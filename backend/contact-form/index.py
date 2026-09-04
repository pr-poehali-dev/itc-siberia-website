import json
import os
import psycopg2
import smtplib
from datetime import datetime, timezone, timedelta
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional
from pydantic import BaseModel, Field, ValidationError

RETENTION_DAYS = 365

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    consent: bool = Field(default=False)
    consent_source: Optional[str] = Field(default=None, max_length=255)

def handler(event: dict, context) -> dict:
    '''Обработка заявок с формы обратной связи с отправкой на email'''
    method = event.get('httpMethod', 'POST')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        body = json.loads(event.get('body', '{}'))
        request = ContactRequest(**body)
    except ValidationError as e:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Неверные данные формы', 'details': e.errors()})
        }
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Неверный формат JSON'})
        }

    if not request.consent:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Необходимо согласие на обработку персональных данных'})
        }

    krsk_tz = timezone(timedelta(hours=7))
    consent_dt = datetime.now(krsk_tz)
    consent_at_str = consent_dt.strftime('%d.%m.%Y %H:%M:%S')
    consent_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', 'не определён')
    consent_source = request.consent_source or 'форма на сайте'

    database_url = os.environ.get('DATABASE_URL')
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.mail.ru')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    target_email = 'itc2555888@mail.ru'
    
    if not smtp_user or not smtp_password:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Настройки SMTP не заданы. Требуется SMTP_USER и SMTP_PASSWORD'})
        }
    
    conn = None
    request_id = None
    
    if database_url:
        try:
            conn = psycopg2.connect(database_url)
            cur = conn.cursor()
            
            schema_name = os.environ.get('MAIN_DB_SCHEMA', 'public')
            
            cur.execute(
                f"INSERT INTO {schema_name}.contact_requests (name, phone, message, consent_given, consent_at, consent_ip, consent_source) VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id",
                (request.name, request.phone, 'Заявка с сайта', True, consent_dt.replace(tzinfo=None), consent_ip, consent_source)
            )
            request_id = cur.fetchone()[0]
            conn.commit()

            cur.execute(
                f"SELECT 1 FROM {schema_name}.retention_log "
                f"WHERE run_at > NOW() - INTERVAL '24 hours' LIMIT 1"
            )
            if not cur.fetchone():
                cur.execute(
                    f"WITH removed AS ("
                    f"  DELETE FROM {schema_name}.contact_requests "
                    f"  WHERE created_at < NOW() - INTERVAL '{RETENTION_DAYS} days' RETURNING id"
                    f") SELECT COUNT(*) FROM removed"
                )
                removed = cur.fetchone()[0]
                cur.execute(
                    f"INSERT INTO {schema_name}.retention_log "
                    f"(removed_count, retention_days, triggered_by) VALUES (%s, %s, %s)",
                    (removed, RETENTION_DAYS, 'auto')
                )
                conn.commit()

            cur.close()
            conn.close()
        except Exception as e:
            if conn:
                conn.rollback()
                conn.close()

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта от {request.name}'
    msg['From'] = smtp_user
    msg['To'] = target_email

    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2563eb;">Новая заявка с сайта ИТЦ Сибири</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin-top: 20px;">
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold; width: 150px; border: 1px solid #e5e7eb;">Имя:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">{request.name}</td>
            </tr>
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold; border: 1px solid #e5e7eb;">Телефон:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">{request.phone}</td>
            </tr>
        </table>

        <h3 style="margin-top: 28px; color: #111827; font-size: 16px;">Согласие на обработку персональных данных</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin-top: 8px;">
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold; width: 150px; border: 1px solid #e5e7eb;">Статус:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #15803d; font-weight: bold;">Получено</td>
            </tr>
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold; border: 1px solid #e5e7eb;">Дата и время:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">{consent_at_str} (Красноярск, UTC+7)</td>
            </tr>
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold; border: 1px solid #e5e7eb;">IP-адрес:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">{consent_ip}</td>
            </tr>
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold; border: 1px solid #e5e7eb;">Источник:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">{consent_source}</td>
            </tr>
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold; border: 1px solid #e5e7eb;">Основание:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">ст. 9 ФЗ № 152-ФЗ «О персональных данных»</td>
            </tr>
        </table>

        <p style="margin-top: 20px; color: #6b7280; font-size: 13px;">
            Пользователь подтвердил согласие отметкой в форме перед отправкой заявки.
            Запись зафиксирована в базе данных под номером {request_id if request_id else '—'}.
        </p>
    </body>
    </html>
    """

    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    try:
        if smtp_port == 465:
            server = smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=15)
        else:
            server = smtplib.SMTP(smtp_host, smtp_port, timeout=15)
            server.starttls()
        
        server.set_debuglevel(0)
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()

        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': True, 
                'message': 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
                'request_id': request_id
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Ошибка отправки письма: {str(e)}'})
        }