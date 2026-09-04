import json
import os
import psycopg2

RETENTION_DAYS = 365
MIN_HOURS_BETWEEN_RUNS = 24


def run_retention(conn, schema_name: str, triggered_by: str = 'auto') -> dict:
    cur = conn.cursor()

    cur.execute(
        f"SELECT run_at FROM {schema_name}.retention_log "
        f"WHERE run_at > NOW() - INTERVAL '{MIN_HOURS_BETWEEN_RUNS} hours' "
        f"ORDER BY run_at DESC LIMIT 1"
    )
    recent = cur.fetchone()

    if recent and triggered_by == 'auto':
        cur.close()
        return {'skipped': True, 'reason': 'already_run_today', 'removed': 0}

    cur.execute(
        f"WITH removed AS ("
        f"  DELETE FROM {schema_name}.contact_requests "
        f"  WHERE created_at < NOW() - INTERVAL '{RETENTION_DAYS} days' RETURNING id"
        f") SELECT COUNT(*) FROM removed"
    )
    removed = cur.fetchone()[0]

    cur.execute(
        f"INSERT INTO {schema_name}.retention_log (removed_count, retention_days, triggered_by) "
        f"VALUES (%s, %s, %s)",
        (removed, RETENTION_DAYS, triggered_by)
    )
    conn.commit()
    cur.close()

    return {'skipped': False, 'removed': removed}


def handler(event: dict, context) -> dict:
    '''Удаление заявок с истёкшим сроком хранения (1 год) согласно ФЗ-152'''
    method = event.get('httpMethod', 'POST')

    cors_headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Token'
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'DATABASE_URL не задан'})
        }

    schema_name = os.environ.get('MAIN_DB_SCHEMA', 'public')
    conn = psycopg2.connect(database_url)

    if method == 'GET':
        cur = conn.cursor()
        cur.execute(
            f"SELECT COUNT(*) FROM {schema_name}.contact_requests "
            f"WHERE created_at < NOW() - INTERVAL '{RETENTION_DAYS} days'"
        )
        expired = cur.fetchone()[0]
        cur.execute(f"SELECT COUNT(*) FROM {schema_name}.contact_requests")
        total = cur.fetchone()[0]
        cur.execute(
            f"SELECT run_at, removed_count, triggered_by FROM {schema_name}.retention_log "
            f"ORDER BY run_at DESC LIMIT 5"
        )
        history = [
            {'run_at': r[0].isoformat(), 'removed': r[1], 'triggered_by': r[2]}
            for r in cur.fetchall()
        ]
        cur.close()
        conn.close()
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({
                'success': True,
                'dry_run': True,
                'retention_days': RETENTION_DAYS,
                'expired_found': expired,
                'total': total,
                'history': history
            })
        }

    result = run_retention(conn, schema_name, triggered_by='manual')

    cur = conn.cursor()
    cur.execute(f"SELECT COUNT(*) FROM {schema_name}.contact_requests")
    remaining = cur.fetchone()[0]
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({
            'success': True,
            'dry_run': False,
            'retention_days': RETENTION_DAYS,
            'deleted': result['removed'],
            'remaining': remaining
        })
    }