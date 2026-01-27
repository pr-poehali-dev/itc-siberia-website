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
    { path: '/contacts', label: 'Контакты' }
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname === '/contacts') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src="https://cdn.poehali.dev/files/2(без фона).png" 
              alt="ИТЦ Инженерно-технологический центр Сибири"
              className="h-20 md:h-24 w-auto object-contain drop-shadow-md"
            />
          </Link>

          <nav className="hidden md:flex gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive(item.path) 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground">
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
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-white' 
                    : 'text-foreground hover:bg-muted'
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