import json
import os
import psycopg2

RETENTION_DAYS = 365

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
    dry_run = method == 'GET'

    conn = psycopg2.connect(database_url)
    cur = conn.cursor()

    cur.execute(
        f"SELECT COUNT(*) FROM {schema_name}.contact_requests "
        f"WHERE created_at < NOW() - INTERVAL '{RETENTION_DAYS} days'"
    )
    expired_count = cur.fetchone()[0]

    deleted = 0
    if not dry_run and expired_count > 0:
        cur.execute(
            f"DELETE FROM {schema_name}.contact_requests "
            f"WHERE created_at < NOW() - INTERVAL '{RETENTION_DAYS} days'"
        )
        deleted = cur.rowcount
        conn.commit()

    cur.execute(f"SELECT COUNT(*) FROM {schema_name}.contact_requests")
    remaining = cur.fetchone()[0]

    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({
            'success': True,
            'dry_run': dry_run,
            'retention_days': RETENTION_DAYS,
            'expired_found': expired_count,
            'deleted': deleted,
            'remaining': remaining
        })
    }
