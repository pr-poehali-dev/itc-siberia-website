import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { url: 'https://cdn.poehali.dev/files/57.jpg', alt: 'Технологические металлоконструкции' },
    { url: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/ecec6679-1916-4d02-aec1-4aeadd59769b.jpg', alt: 'Современное производство' },
    { url: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/919d6fae-f726-4357-a8d0-36b93d621de4.jpg', alt: 'Сварочные работы' },
    { url: 'https://cdn.poehali.dev/files/110.jpg', alt: 'Токарные работы' },
    { url: 'https://cdn.poehali.dev/files/67.jpg', alt: 'Технологические площадки' },
    { url: 'https://cdn.poehali.dev/files/68.jpg', alt: 'Сварные профили' },
    { url: 'https://cdn.poehali.dev/files/60.jpg', alt: 'Промышленное оборудование' },
    { url: 'https://cdn.poehali.dev/files/61.jpg', alt: 'Металлообработка' },
    { url: 'https://cdn.poehali.dev/files/62.jpg', alt: 'Производственный процесс' },
    { url: 'https://cdn.poehali.dev/files/63.jpg', alt: 'Сварочные работы' },
    { url: 'https://cdn.poehali.dev/files/64.jpg', alt: 'Станочное оборудование' },
    { url: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/0b6129a4-8a22-40e6-b1ae-b12152184cdf.jpg', alt: 'Готовые изделия' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const services = [
    {
      icon: 'Factory',
      title: 'Производство металлоконструкций',
      description: 'Изготовление металлоконструкций любой сложности с соблюдением всех стандартов качества'
    },
    {
      icon: 'Cog',
      title: 'Решение инжиниринговых задач',
      description: 'Разработка и подбор оборудования для решения ваших технологических задач производства'
    },
    {
      icon: 'Wrench',
      title: 'Монтажные работы',
      description: 'Профессиональный монтаж металлоконструкций на объекте заказчика с соблюдением всех стандартов качества и безопасности'
    }
  ];

  const stats = [
    { value: '500+', label: 'Завершенных\nпроектов' },
    { value: '3000+м²', label: 'Производственных\nплощадей' },
    { value: '60+', label: 'Сотрудников' },
    { value: '13', label: 'Лет на\nрынке' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white space-y-4 md:space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground border-0 text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 hover:bg-secondary/90">
                Надежный партнер с 2013 года
              </Badge>
              <h1 className="text-2xl md:text-5xl font-bold leading-snug md:leading-tight">
                Инженерные решения для промышленности
              </h1>
              <p className="text-sm md:text-xl text-white/90 leading-relaxed">
                Полный цикл проектирования, производства металлоконструкций и решение инженерных технологический задач. 
                От идеи до реализации под ключ.
              </p>
              <div className="flex justify-start pt-2 md:pt-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 md:px-12 text-sm md:text-base"
                >
                  <Link to="/services">
                    Наши услуги
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 md:flex md:flex-nowrap md:justify-start md:items-start md:gap-x-10 pt-6 md:pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center md:items-start">
                    <div className="text-xl md:text-4xl font-bold text-secondary whitespace-nowrap">{stat.value}</div>
                    <div className="text-white/80 text-[9px] md:text-sm mt-1 text-center md:text-left leading-tight">{stat.label.replace('\n', ' ')}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in group max-w-lg mx-auto">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[350px] md:h-[500px]">
                <img 
                  src={images[currentImage].url}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Предыдущее изображение"
                >
                  <Icon name="ChevronLeft" size={24} className="text-primary" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Следующее изображение"
                >
                  <Icon name="ChevronRight" size={24} className="text-primary" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                      aria-label={`Перейти к изображению ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Комплексные решения для бизнеса</h2>
            <p className="text-muted-foreground text-lg">
              Предоставляем полный спектр услуг от проектирования до монтажа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale flex flex-col">
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow min-h-[3rem]">{service.description}</p>
                  <Button asChild variant="link" className="p-0 text-primary self-start">
                    <Link to={index === 1 ? "/services/inzhiniring" : "/services"}>
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Свяжитесь с нами для консультации и расчета стоимости работ
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contacts">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;