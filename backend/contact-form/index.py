import json
import os
import psycopg2
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pydantic import BaseModel, Field, ValidationError

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)

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

    database_url = os.environ.get('DATABASE_URL')
    smtp_host = 'smtp.mail.ru'
    smtp_port = int('465')
    smtp_user = 'itc2555888@mail.ru'
    smtp_password = 'oyxy9U6tyjV0mjytH2eW'
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
                f"INSERT INTO {schema_name}.contact_requests (name, phone, message) VALUES (%s, %s, %s) RETURNING id",
                (request.name, request.phone, 'Заявка с сайта')
            )
            request_id = cur.fetchone()[0]
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
        <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
            Заявка получена {context.request_time if hasattr(context, 'request_time') else 'сейчас'}
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