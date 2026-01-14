<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = isset($data['name']) ? trim($data['name']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$company = isset($data['company']) ? trim($data['company']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Заполните все обязательные поля'], JSON_UNESCAPED_UNICODE);
    exit;
}

// НАСТРОЙКИ EMAIL - ИЗМЕНИТЕ НА СВОИ!
$to_email = 'itc2555888@mail.ru'; // Email, куда будут приходить заявки
$subject = 'Новая заявка с сайта от ' . $name;

// Формирование HTML письма
$date = date('d.m.Y H:i');
$html_body = "
<html>
<head>
    <meta charset='utf-8'>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
    <h2 style='color: #2563eb;'>Новая заявка с сайта ИТЦ Сибири</h2>
    <p><strong>Дата:</strong> $date</p>
    <hr style='border: 1px solid #e5e7eb;'>
    <p><strong>Имя:</strong> $name</p>
    <p><strong>Телефон:</strong> $phone</p>
";

if (!empty($email)) {
    $html_body .= "<p><strong>Email:</strong> $email</p>";
}

if (!empty($company)) {
    $html_body .= "<p><strong>Компания:</strong> $company</p>";
}

$html_body .= "
    <hr style='border: 1px solid #e5e7eb;'>
    <p><strong>Сообщение:</strong></p>
    <p style='background: #f9fafb; padding: 15px; border-radius: 5px;'>$message</p>
</body>
</html>
";

// Заголовки письма
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";

if (!empty($email)) {
    $headers .= "Reply-To: $email\r\n";
}

// Отправка письма
if (mail($to_email, $subject, $html_body, $headers)) {
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Заявка успешно отправлена'
    ], JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Не удалось отправить заявку. Попробуйте позже.'
    ], JSON_UNESCAPED_UNICODE);
}
?>
