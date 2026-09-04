import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LegalLayout, LegalSection } from '@/components/legal/LegalLayout';

const CookiePolicy = () => {
  const cookieTypes = [
    {
      name: 'Технические (обязательные)',
      purpose: 'Обеспечивают работу сайта: навигация, безопасность, сохранение выбора Пользователя',
      period: 'Сессия / до 12 месяцев',
      required: 'Да'
    },
    {
      name: 'Функциональные',
      purpose: 'Запоминают настройки и предпочтения Пользователя для удобства повторных визитов',
      period: 'До 12 месяцев',
      required: 'Нет'
    },
    {
      name: 'Аналитические',
      purpose:
        'Сбор обезличенной статистики посещаемости через Яндекс.Метрику: источники переходов, просмотренные страницы, время на сайте',
      period: 'До 24 месяцев',
      required: 'Нет'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LegalLayout
        title="Политика использования файлов cookie"
        subtitle="ООО «Инженерно-технологический центр Сибири»"
        updated="1 сентября 2026 г."
      >
        <LegalSection title="1. Что такое файлы cookie">
          <p>
            Файлы cookie — это небольшие текстовые файлы, которые сохраняются на устройстве
            Пользователя (компьютере, планшете, смартфоне) при посещении сайта. Они позволяют сайту
            запоминать действия и настройки Пользователя в течение определённого времени.
          </p>
          <p>
            Использование файлов cookie осуществляется в соответствии с Федеральным законом от
            27.07.2006 № 152-ФЗ «О персональных данных» и Федеральным законом от 27.07.2006
            № 149-ФЗ «Об информации, информационных технологиях и о защите информации».
          </p>
        </LegalSection>

        <LegalSection title="2. Какие cookie используются на сайте">
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 font-semibold text-foreground border border-border">
                    Категория
                  </th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">
                    Назначение
                  </th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">
                    Срок хранения
                  </th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border">
                    Обязательные
                  </th>
                </tr>
              </thead>
              <tbody>
                {cookieTypes.map((c) => (
                  <tr key={c.name}>
                    <td className="p-3 border border-border font-medium text-foreground align-top">
                      {c.name}
                    </td>
                    <td className="p-3 border border-border align-top">{c.purpose}</td>
                    <td className="p-3 border border-border align-top whitespace-nowrap">
                      {c.period}
                    </td>
                    <td className="p-3 border border-border align-top">{c.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LegalSection>

        <LegalSection title="3. Сторонние сервисы">
          <p>
            На сайте используется сервис веб-аналитики <strong>Яндекс.Метрика</strong>,
            предоставляемый ООО «ЯНДЕКС». Сервис собирает обезличенные данные о поведении
            посетителей и передаёт их на серверы, расположенные на территории Российской Федерации.
          </p>
          <p>
            <strong>Важно:</strong> скрипт Яндекс.Метрики не загружается и не выполняется до тех
            пор, пока Пользователь не даст согласие на аналитические cookie. При отказе счётчик не
            подключается вовсе.
          </p>
          <p>
            Также на странице «Контакты» может отображаться виджет <strong>Яндекс.Карт</strong>.
            Он относится к функциональным cookie и загружается только после соответствующего
            согласия Пользователя; до этого вместо карты показывается заглушка со ссылкой на
            внешний сервис.
          </p>
          <p>
            Условия обработки данных сервисом доступны в документации Яндекса. Пользователь вправе
            отказаться от сбора данных Яндекс.Метрикой, установив блокирующее дополнение для
            браузера или отключив cookie в настройках браузера.
          </p>
        </LegalSection>

        <LegalSection title="4. Согласие на использование cookie">
          <p>
            При первом посещении сайта Пользователю отображается уведомление об использовании
            файлов cookie. Продолжая пользоваться сайтом и нажимая кнопку «Принять», Пользователь
            выражает согласие на обработку файлов cookie в соответствии с настоящей Политикой.
          </p>
          <p>
            Пользователь вправе отказаться от необязательных cookie, нажав кнопку «Только
            необходимые», либо выбрать отдельные категории через кнопку «Настроить». В этом случае
            будут использоваться только технические cookie, без которых работа сайта невозможна.
          </p>
          <p>
            <strong>Отзыв согласия.</strong> Ранее данное согласие можно отозвать в любой момент —
            ссылка «Настройки cookie» размещена в нижней части каждой страницы сайта. После нажатия
            уведомление появится снова, и выбор можно будет изменить.
          </p>
        </LegalSection>

        <LegalSection title="5. Как управлять и отключить cookie">
          <p>
            Пользователь может в любой момент удалить сохранённые файлы cookie и запретить их
            установку в настройках своего браузера:
          </p>
          <ul>
            <li>Google Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie</li>
            <li>Яндекс.Браузер: Настройки → Сайты → Расширенные настройки сайтов → Cookie-файлы</li>
            <li>Mozilla Firefox: Настройки → Приватность и защита → Куки и данные сайтов</li>
            <li>Safari: Настройки → Конфиденциальность → Управление данными сайтов</li>
          </ul>
          <p>
            Обращаем внимание: полное отключение файлов cookie может привести к некорректной работе
            отдельных функций сайта.
          </p>
        </LegalSection>

        <LegalSection title="6. Изменения Политики и контакты">
          <p>
            Оператор вправе вносить изменения в настоящую Политику. Актуальная редакция всегда
            доступна на данной странице.
          </p>
          <p>
            По вопросам использования файлов cookie обращайтесь по адресу{' '}
            <strong>itc2555888@mail.ru</strong>. Порядок обработки персональных данных описан в{' '}
            <Link to="/privacy-policy" className="text-primary hover:underline">
              Политике обработки персональных данных
            </Link>
            .
          </p>
        </LegalSection>
      </LegalLayout>
      <Footer />
    </div>
  );
};

export default CookiePolicy;