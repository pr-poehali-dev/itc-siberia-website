import { Link } from 'react-router-dom';
import { revokeConsent } from '@/lib/cookieConsent';

const Footer = () => {
  const legalLinks = [
    { path: '/privacy-policy', label: 'Политика обработки персональных данных' },
    { path: '/cookie-policy', label: 'Политика использования cookie' },
    { path: '/data-consent', label: 'Согласие на обработку данных' }
  ];

  return (
    <footer className="bg-ink text-white tech-grid-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div className="space-y-3">
            <div className="eyebrow">ООО «ИТЦ Сибири»</div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Инженерно-технологический центр полного цикла: проектирование, производство
              металлоконструкций и монтаж.
            </p>
          </div>

          <div className="space-y-3">
            <div className="eyebrow-muted">Контакты</div>
            <a href="tel:+79059755888" className="block font-mono-tech text-lg text-white hover:text-secondary transition-colors">
              +7 905 975 58 88
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              660020, г. Красноярск,<br />ул. Дудинская, д. 5
            </p>
          </div>

          <div className="space-y-3">
            <div className="eyebrow-muted">Документы</div>
            <nav className="flex flex-col gap-2 items-start">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/60 hover:text-secondary text-sm transition-colors text-left"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={revokeConsent}
                className="text-white/60 hover:text-secondary text-sm transition-colors text-left"
              >
                Настройки cookie
              </button>
            </nav>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-white/40">
            © {new Date().getFullYear()} ООО «ИТЦ Сибири»
          </p>
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-white/40">
            ИНН 2465360948 · ОГРН 1242400009378
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;