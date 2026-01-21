import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

def handler(event: dict, context) -> dict:
    '''Обрабатывает отправку заявки с контактной формы на email'''
    
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
        data = json.loads(event.get('body', '{}'))
        
        name = data.get('name', '').strip()
        phone = data.get('phone', '').strip()
        email = data.get('email', '').strip()
        company = data.get('company', '').strip()
        message = data.get('message', '').strip()
        
        if not name or not phone or not message:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Заполните все обязательные поля'})
            }
        
        smtp_host = os.environ.get(smtp.mail.ru)
        smtp_port_str = os.environ.get(465)
        smtp_user = os.environ.get(itc2555888@mail.ru)
        smtp_password = os.environ.get(oyxy9U6tyjV0mjytH2eW)
        contact_email = os.environ.get(itc2555888@mail.ru)
        
        if not all([smtp_host, smtp_port_str, smtp_user, smtp_password, contact_email]):
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Настройте SMTP секреты в настройках проекта'})
            }
        
        try:
            smtp_port = int(smtp_port_str)
        except (ValueError, TypeError):
            smtp_port = 465
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка с сайта от {name}'
        msg['From'] = smtp_user
        msg['To'] = contact_email
        
        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2563eb;">Новая заявка с сайта ИТЦ Сибири</h2>
            <p><strong>Дата:</strong> {datetime.now().strftime('%d.%m.%Y %H:%M')}</p>
            <hr style="border: 1px solid #e5e7eb;">
            <p><strong>Имя:</strong> {name}</p>
            <p><strong>Телефон:</strong> {phone}</p>
            {f'<p><strong>Email:</strong> {email}</p>' if email else ''}
            {f'<p><strong>Компания:</strong> {company}</p>' if company else ''}
            <hr style="border: 1px solid #e5e7eb;">
            <p><strong>Сообщение:</strong></p>
            <p style="background: #f9fafb; padding: 15px; border-radius: 5px;">{message}</p>
        </body>
        </html>
        """
        
        msg.attach(MIMEText(html_body, 'html'))
        
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'message': 'Заявка успешно отправлена'})
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Некорректный формат данных'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }