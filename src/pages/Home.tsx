import { useState } from 'react';
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
    { url: 'https://cdn.poehali.dev/files/58.jpg', alt: 'Сварные металлоконструкции' },
    { url: 'https://cdn.poehali.dev/files/59.jpg', alt: 'Фрезерные работы' },
    { url: 'https://cdn.poehali.dev/files/110.jpg', alt: 'Токарные работы' },
    { url: 'https://cdn.poehali.dev/files/67.jpg', alt: 'Технологические площадки' },
    { url: 'https://cdn.poehali.dev/files/68.jpg', alt: 'Сварные профили' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

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
    { value: '500+', label: 'Завершенных проектов' },
    { value: '3000+м²', label: 'Производственных площадей' },
    { value: '60+', label: 'Сотрудников' },
    { value: '13', label: 'Лет на рынке' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground border-0 text-base px-4 py-2 hover:bg-secondary/90">
                Надежный партнер с 2013 года
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Инженерные решения для промышленности
              </h1>
              <p className="text-xl text-white/90">
                Полный цикл проектирования, производства металлоконструкций и решение инженерных технологический задач. 
                От идеи до реализации под ключ.
              </p>
              <div className="flex justify-center md:justify-start pt-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12"
                >
                  <Link to="/services">
                    Наши услуги
                  </Link>
                </Button>
              </div>
              <div className="flex flex-nowrap justify-start items-start gap-x-6 md:gap-x-10 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center min-w-[100px] flex-shrink-0">
                    <div className="text-3xl md:text-4xl font-bold text-secondary whitespace-nowrap">{stat.value}</div>
                    <div className="text-white/80 text-xs md:text-sm mt-1 text-center leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in group">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src={images[currentImage].url}
                  alt={images[currentImage].alt}
                  className="w-full h-[500px] object-cover transition-all duration-500"
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
                    <Link to="/services">
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