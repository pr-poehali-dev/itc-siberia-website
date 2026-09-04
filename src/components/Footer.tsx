import { Link } from 'react-router-dom';

const Footer = () => {
  const legalLinks = [
    { path: '/privacy-policy', label: 'Политика обработки персональных данных' },
    { path: '/cookie-policy', label: 'Политика использования cookie' },
    { path: '/data-consent', label: 'Согласие на обработку данных' }
  ];

  return (
    <footer className="bg-foreground text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5 text-center">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="w-full max-w-3xl border-t border-white/10 pt-5 space-y-1">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} ООО «ИТЦ Сибири». Все права защищены.
            </p>
            <p className="text-white/50 text-xs">
              ИНН 2465360948 · ОГРН 1242400009378 · 660020, г. Красноярск, ул. Дудинская, д. 5
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
