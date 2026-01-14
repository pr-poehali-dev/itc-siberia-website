import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pydantic import BaseModel, Field, EmailStr, ValidationError

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=5, max_length=20)
    email: EmailStr | None = None
    company: str | None = Field(default=None, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)

def handler(event: dict, context) -> dict:
    '''Обработка заявок с формы обратной связи'''
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

    smtp_host = os.environ.get('SMTP_HOST', '')
    smtp_port_str = os.environ.get('SMTP_PORT', '465')
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    contact_email = os.environ.get('CONTACT_EMAIL', '')
    
    try:
        smtp_port = int(smtp_port_str)
    except ValueError:
        smtp_port = 465

    if not all([smtp_host, smtp_user, smtp_password, contact_email]):
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'SMTP не настроен'})
        }

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта от {request.name}'
    msg['From'] = smtp_user
    msg['To'] = contact_email

    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2563eb;">Новая заявка с сайта</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold; width: 150px;">Имя:</td>
                <td style="padding: 12px;">{request.name}</td>
            </tr>
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold;">Телефон:</td>
                <td style="padding: 12px;">{request.phone}</td>
            </tr>
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold;">Email:</td>
                <td style="padding: 12px;">{request.email or 'Не указан'}</td>
            </tr>
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold;">Компания:</td>
                <td style="padding: 12px;">{request.company or 'Не указана'}</td>
            </tr>
            <tr>
                <td style="padding: 12px; background-color: #f3f4f6; font-weight: bold; vertical-align: top;">Сообщение:</td>
                <td style="padding: 12px;">{request.message}</td>
            </tr>
        </table>
    </body>
    </html>
    """

    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    try:
        if smtp_port == 465:
            server = smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10)
        else:
            server = smtplib.SMTP(smtp_host, smtp_port, timeout=10)
            server.starttls()
        
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()

        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'message': 'Заявка успешно отправлена'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Ошибка отправки email: {str(e)}'})
        }