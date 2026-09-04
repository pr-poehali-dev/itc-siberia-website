import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const STORAGE_KEY = 'itc_cookie_consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (value: 'accepted' | 'necessary') => {
    localStorage.setItem(STORAGE_KEY, value);
    localStorage.setItem(`${STORAGE_KEY}_date`, new Date().toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-3 md:p-4 animate-fade-in">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-xl shadow-2xl border border-border p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Cookie" size={20} className="text-primary" />
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground block mb-1">
                  Мы используем файлы cookie
                </span>
                Сайт использует cookie и сервисы веб-аналитики для корректной работы и улучшения
                качества обслуживания. Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
                <Link to="/cookie-policy" className="text-primary hover:underline">
                  Политикой использования cookie
                </Link>{' '}
                и{' '}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Политикой обработки персональных данных
                </Link>
                .
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:flex-shrink-0">
              <Button
                variant="outline"
                onClick={() => save('necessary')}
                className="whitespace-nowrap"
              >
                Только необходимые
              </Button>
              <Button
                onClick={() => save('accepted')}
                className="bg-primary hover:bg-primary/90 whitespace-nowrap"
              >
                Принять все
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
