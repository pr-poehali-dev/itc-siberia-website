import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О компании' },
    { path: '/services', label: 'Услуги' },
    { path: '/services/inzhiniring', label: 'Инжиниринг' },
    { path: '/equipment', label: 'Оборудование' },
    { path: '/contacts', label: 'Контакты' }
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname === '/contacts') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border z-50">
      <div className="hidden md:block bg-primary text-white/70">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9 font-mono-tech text-[11px] uppercase tracking-[0.14em]">
            <span>Инженерно-технологический центр Сибири · с 2013</span>
            <div className="flex items-center gap-6">
              <span>Красноярск</span>
              <a href="tel:+79059755888" className="text-secondary hover:text-white transition-colors">
                +7 905 975 58 88
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://cdn.poehali.dev/files/2(без фона).png" 
              alt="ИТЦ Инженерно-технологический центр Сибири"
              width="260"
              height="72"
              className="h-16 md:h-[72px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary" />
                )}
              </Link>
            ))}
          </nav>

          <Button asChild className="hidden md:inline-flex bg-secondary hover:bg-secondary/85 text-secondary-foreground">
            <Link to="/contacts" onClick={handleContactClick}>
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Link>
          </Button>

          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left py-3 px-4 border-l-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive(item.path)
                    ? 'border-secondary text-primary bg-surface' 
                    : 'border-transparent text-muted-foreground hover:bg-surface'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full mt-2"
            >
              <a href="tel:+79059755888" onClick={() => setMobileMenuOpen(false)}>
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;