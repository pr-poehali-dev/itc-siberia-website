#!/usr/bin/env node
/**
 * Скрипт для создания автономной версии index.html
 * Удаляет все внешние скрипты poehali.dev и Яндекс.Метрику
 * 
 * Использование:
 * 1. Скачать билд: "Скачать → Скачать билд"
 * 2. Распаковать архив
 * 3. Скопировать этот файл в папку билда
 * 4. Запустить: node make-offline.js
 * 5. Откроется index.html - готово!
 */

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ Файл index.html не найден!');
  console.error('Убедитесь, что скрипт находится в папке с билдом.');
  process.exit(1);
}

console.log('📄 Читаю index.html...');
let html = fs.readFileSync(indexPath, 'utf-8');

// Удаляем скрипты poehali.dev
const scriptPatterns = [
  /<script[^>]*src="https:\/\/cdn\.poehali\.dev\/[^"]*"[^>]*><\/script>/g,
  /<!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS COMMENT! -->/g,
  /<meta name="pp-name"[^>]*>/g,
];

scriptPatterns.forEach(pattern => {
  html = html.replace(pattern, '');
});

// Удаляем Яндекс.Метрику
const ymStartComment = '<!-- Yandex.Metrika counter -->';
const ymEndComment = '<!-- /Yandex.Metrika counter -->';

const ymStart = html.indexOf(ymStartComment);
const ymEnd = html.indexOf(ymEndComment);

if (ymStart !== -1 && ymEnd !== -1) {
  html = html.substring(0, ymStart) + html.substring(ymEnd + ymEndComment.length);
  console.log('✅ Яндекс.Метрика удалена');
}

// Очищаем пустые строки
html = html.replace(/\n\s*\n\s*\n/g, '\n\n');

// Обновляем мета-теги
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>ИТЦ Сибирь - Строительство и монтаж</title>'
);
html = html.replace(
  /<meta name="description".*?>/,
  '<meta name="description" content="ИТЦ Сибирь - профессиональное строительство и монтаж металлоконструкций, ангаров, модульных зданий">'
);

// Сохраняем
fs.writeFileSync(indexPath, html, 'utf-8');

console.log('✅ index.html очищен от внешних зависимостей!');
console.log('🚀 Теперь сайт работает полностью автономно');
console.log('');
console.log('📂 Откройте index.html в браузере - всё готово!');
