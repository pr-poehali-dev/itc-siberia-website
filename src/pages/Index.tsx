import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Factory',
      title: 'Производство металлоконструкций',
      description: 'Изготовление металлоконструкций любой сложности с соблюдением всех стандартов качества'
    },
    {
      icon: 'Cog',
      title: 'Инженерное проектирование',
      description: 'Разработка технической документации и проектирование промышленных объектов'
    },
    {
      icon: 'Wrench',
      title: 'Монтажные работы',
      description: 'Профессиональный монтаж конструкций на объекте заказчика'
    },
    {
      icon: 'Shield',
      title: 'Техническая экспертиза',
      description: 'Консультации и технический надзор на всех этапах реализации проекта'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/45edd316-9ba0-4379-b31f-685fa4060cfb.jpg',
      title: 'Производственный комплекс',
      category: 'Промышленное строительство',
      year: '2024'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/799132a0-a086-466a-9c31-d66a17d47c94.jpg',
      title: 'Складской комплекс',
      category: 'Металлоконструкции',
      year: '2023'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/45022743-ed20-49de-9af3-bcb967fb5e39.jpg',
      title: 'Административное здание',
      category: 'Инженерные системы',
      year: '2023'
    }
  ];

  const team = [
    {
      name: 'Александр Иванов',
      position: 'Главный инженер',
      experience: '15 лет опыта в промышленном строительстве'
    },
    {
      name: 'Михаил Петров',
      position: 'Руководитель отдела производства',
      experience: '12 лет в металлообработке'
    },
    {
      name: 'Елена Сидорова',
      position: 'Технический директор',
      experience: '18 лет в инженерном проектировании'
    }
  ];

  const certificates = [
    'ISO 9001:2015',
    'Лицензия МЧС',
    'СРО на строительство',
    'Допуск к опасным работам'
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/2(без фона).png" 
                alt="ИТЦ Инженерно-технологический центр Сибири"
                className="h-16 w-auto object-contain"
              />
            </div>
            <nav className="hidden md:flex gap-6">
              {['home', 'about', 'services', 'portfolio', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О компании'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
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
              {['home', 'about', 'services', 'portfolio', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left py-2 px-4 rounded-lg font-medium transition-colors ${
                    activeSection === section 
                      ? 'bg-primary text-white' 
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О компании'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full mt-2"
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground border-0">
                Надежный партнер с 2008 года
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Инженерные решения для промышленности
              </h1>
              <p className="text-xl text-white/90">
                Полный цикл проектирования и производства металлоконструкций. 
                От идеи до реализации под ключ.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={() => scrollToSection('services')}
                >
                  Наши услуги
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Портфолио
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-4xl font-bold text-secondary">500+</div>
                  <div className="text-white/80 text-sm">Завершенных проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary">15</div>
                  <div className="text-white/80 text-sm">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary">95%</div>
                  <div className="text-white/80 text-sm">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/799132a0-a086-466a-9c31-d66a17d47c94.jpg"
                alt="Производство"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">О компании</Badge>
            <h2 className="text-4xl font-bold mb-4">Профессионализм и опыт</h2>
            <p className="text-muted-foreground text-lg">
              Инженерно-технологический центр Сибири – ведущая компания региона 
              в области инженерных решений и производства металлоконструкций
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={40} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Сертификаты и лицензии</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {certificates.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" size={40} className="text-secondary mx-auto mb-3" />
                    <p className="font-medium">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Комплексные решения для бизнеса</h2>
            <p className="text-muted-foreground text-lg">
              Предоставляем полный спектр услуг от проектирования до монтажа
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="link" className="mt-4 p-0 text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-muted-foreground text-lg">
              Примеры наших работ в различных областях промышленного строительства
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    {project.year}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-white space-y-6">
              <Badge className="bg-secondary text-secondary-foreground border-0">
                Контакты
              </Badge>
              <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
              <p className="text-white/90 text-lg">
                Готовы обсудить ваш проект и предложить оптимальное решение
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес офиса</p>
                    <p className="text-white/80">г. Новосибирск, ул. Промышленная, 15</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-white/80">+7 (383) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">info@itc-siberia.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="w-full" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="w-full" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="w-full" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} className="w-full" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white/70 text-sm">© 2024 ИТЦ-Сибири. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;