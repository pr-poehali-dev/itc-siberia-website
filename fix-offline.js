#!/usr/bin/env node
/**
 * 🔧 ИСПРАВЛЕНИЕ БИЛДА ДЛЯ ОФЛАЙН-РАБОТЫ
 * 
 * Эта версия исправляет УЖЕ СКАЧАННЫЙ билд:
 * 1. Удаляет внешние скрипты poehali.dev
 * 2. Исправляет абсолютные пути /assets/ → ./assets/
 * 3. Удаляет Яндекс.Метрику
 * 
 * КАК ИСПОЛЬЗОВАТЬ:
 * 1. Скачать билд: "Скачать → Скачать билд"
 * 2. Распаковать архив
 * 3. Скопировать ЭТОТ файл (fix-offline.js) в папку билда
 * 4. Запустить: node fix-offline.js
 * 5. Открыть index.html - готово! ✅
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Исправление билда для офлайн-работы...\n');

// Проверяем наличие index.html
const indexPath = path.join(process.cwd(), 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ Файл index.html не найден!');
  console.error('📁 Убедитесь, что скрипт находится в папке с билдом (там где index.html)');
  process.exit(1);
}

console.log('📄 Читаю index.html...');
let html = fs.readFileSync(indexPath, 'utf-8');

// ===== ШАГ 1: Исправляем пути /assets/ → ./assets/ =====
console.log('🔧 Исправляю пути к ресурсам...');
const originalHtml = html;

// Исправляем пути в атрибутах src и href
html = html.replace(/\ssrc="\/assets\//g, ' src="./assets/');
html = html.replace(/\shref="\/assets\//g, ' href="./assets/');

// Исправляем modulepreload
html = html.replace(/rel="modulepreload" href="\/assets\//g, 'rel="modulepreload" href="./assets/');

if (html !== originalHtml) {
  console.log('✅ Пути исправлены: /assets/ → ./assets/');
} else {
  console.log('⚠️  Пути /assets/ не найдены (возможно уже исправлены)');
}

// ===== ШАГ 2: Удаляем внешние скрипты poehali.dev =====
console.log('🧹 Удаляю внешние скрипты...');

const scriptPatterns = [
  /<script[^>]*src="https:\/\/cdn\.poehali\.dev\/[^"]*"[^>]*><\/script>/g,
  /<!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS COMMENT! -->/g,
  /<meta name="pp-name"[^>]*>/g,
];

let scriptsRemoved = 0;
scriptPatterns.forEach(pattern => {
  const matches = html.match(pattern);
  if (matches) scriptsRemoved += matches.length;
  html = html.replace(pattern, '');
});

if (scriptsRemoved > 0) {
  console.log(`✅ Удалено внешних скриптов: ${scriptsRemoved}`);
}

// ===== ШАГ 3: Удаляем Яндекс.Метрику =====
console.log('🧹 Удаляю Яндекс.Метрику...');

const ymStartComment = '<!-- Yandex.Metrika counter -->';
const ymEndComment = '<!-- /Yandex.Metrika counter -->';

const ymStart = html.indexOf(ymStartComment);
const ymEnd = html.indexOf(ymEndComment);

if (ymStart !== -1 && ymEnd !== -1) {
  html = html.substring(0, ymStart) + html.substring(ymEnd + ymEndComment.length);
  console.log('✅ Яндекс.Метрика удалена');
} else {
  console.log('⚠️  Яндекс.Метрика не найдена');
}

// ===== ШАГ 4: Очищаем пустые строки =====
html = html.replace(/\n\s*\n\s*\n/g, '\n\n');

// ===== ШАГ 5: Обновляем мета-теги =====
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>ИТЦ Сибирь - Строительство и монтаж</title>'
);

if (!html.includes('ИТЦ Сибирь')) {
  html = html.replace(
    /<meta name="description"[^>]*>/,
    '<meta name="description" content="ИТЦ Сибирь - профессиональное строительство и монтаж металлоконструкций">'
  );
}

// ===== СОХРАНЯЕМ =====
fs.writeFileSync(indexPath, html, 'utf-8');

console.log('\n✅ ГОТОВО! Билд исправлен для офлайн-работы');
console.log('🚀 Откройте index.html в браузере - всё должно работать!');
console.log('\n📋 Что было сделано:');
console.log('   ✓ Исправлены пути к ресурсам (CORS-ошибка больше не будет)');
console.log('   ✓ Удалены внешние скрипты poehali.dev');
console.log('   ✓ Удалена Яндекс.Метрика');
console.log('\n💡 Если не работает:');
console.log('   1. Закройте и снова откройте index.html');
console.log('   2. Попробуйте другой браузер');
console.log('   3. Нажмите F12 → Console и напишите какие ошибки');
