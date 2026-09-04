import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { CONSENT_EVENT, getConsent, saveConsent } from '@/lib/cookieConsent';

interface ConsentGatedMapProps {
  src: string;
  title: string;
  height?: number;
}

const ConsentGatedMap = ({ src, title, height = 600 }: ConsentGatedMapProps) => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getConsent()?.functional === true);
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  const enableMap = () => {
    const current = getConsent();
    saveConsent({ functional: true, analytics: current?.analytics ?? false });
    setAllowed(true);
  };

  if (allowed) {
    return (
      <iframe
        src={src}
        width="100%"
        height={height}
        frameBorder="0"
        allowFullScreen
        style={{ position: 'relative' }}
        title={title}
      />
    );
  }

  return (
    <div
      className="w-full bg-muted flex flex-col items-center justify-center text-center px-6 py-12 gap-4"
      style={{ minHeight: height }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
        <Icon name="MapPin" size={26} className="text-primary" />
      </div>
      <div className="max-w-md">
        <p className="font-semibold text-foreground mb-2">Карта отключена</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Для отображения карты Яндекса требуется загрузка стороннего сервиса, который использует
          файлы cookie. Включите функциональные cookie, чтобы увидеть карту.{' '}
          <Link to="/cookie-policy" className="text-primary hover:underline">
            Подробнее
          </Link>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={enableMap} className="bg-primary hover:bg-primary/90">
          Показать карту
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://yandex.ru/maps/?text=Красноярск, Дудинская 5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть в Яндекс.Картах
            <Icon name="ExternalLink" size={14} className="ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ConsentGatedMap;
