import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';
import { CONSENT_EVENT, getConsent, saveConsent } from '@/lib/cookieConsent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    if (!getConsent()) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === null) {
        setSettingsOpen(false);
        setVisible(true);
      }
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  const acceptAll = () => {
    saveConsent({ functional: true, analytics: true });
    setVisible(false);
  };

  const acceptNecessary = () => {
    saveConsent({ functional: false, analytics: false });
    setVisible(false);
  };

  const acceptSelected = () => {
    saveConsent({ functional, analytics });
    setVisible(false);
  };

  if (!visible) return null;

  const categories = [
    {
      key: 'necessary',
      title: 'Технические (обязательные)',
      text: 'Обеспечивают базовую работу сайта, навигацию и безопасность. Без них сайт работать не может.',
      value: true,
      disabled: true,
      set: (_v: boolean) => {}
    },
    {
      key: 'functional',
      title: 'Функциональные',
      text: 'Запоминают ваши настройки и предпочтения для удобства повторных визитов.',
      value: functional,
      disabled: false,
      set: setFunctional
    },
    {
      key: 'analytics',
      title: 'Аналитические',
      text: 'Яндекс.Метрика — обезличенная статистика посещаемости для улучшения сайта.',
      value: analytics,
      disabled: false,
      set: setAnalytics
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-3 md:p-4 animate-fade-in">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-xl shadow-2xl border border-border p-5 md:p-6 max-h-[85vh] overflow-y-auto">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Cookie" size={20} className="text-primary" />
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground block mb-1">
                Мы используем файлы cookie
              </span>
              Сайт использует файлы cookie и сервисы веб-аналитики. Аналитические и функциональные
              cookie подключаются только с вашего согласия в соответствии с ФЗ № 152-ФЗ.
              Подробнее — в{' '}
              <Link to="/cookie-policy" className="text-primary hover:underline">
                Политике использования cookie
              </Link>{' '}
              и{' '}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Политике обработки персональных данных
              </Link>
              .
            </div>
          </div>

          {settingsOpen && (
            <div className="space-y-3 mb-5 pt-4 border-t border-border animate-fade-in">
              {categories.map((c) => (
                <div
                  key={c.key}
                  className="flex items-start justify-between gap-4 bg-muted/50 rounded-lg p-3"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-0.5">{c.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.text}</p>
                  </div>
                  <Switch
                    checked={c.value}
                    disabled={c.disabled}
                    onCheckedChange={(v) => c.set(v)}
                    className="mt-1 flex-shrink-0"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
            <Button
              variant="ghost"
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="whitespace-nowrap text-muted-foreground"
            >
              <Icon name="Settings2" size={16} className="mr-2" />
              {settingsOpen ? 'Скрыть настройки' : 'Настроить'}
            </Button>
            {settingsOpen ? (
              <Button variant="outline" onClick={acceptSelected} className="whitespace-nowrap">
                Сохранить выбор
              </Button>
            ) : (
              <Button variant="outline" onClick={acceptNecessary} className="whitespace-nowrap">
                Только необходимые
              </Button>
            )}
            <Button onClick={acceptAll} className="bg-primary hover:bg-primary/90 whitespace-nowrap">
              Принять все
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
