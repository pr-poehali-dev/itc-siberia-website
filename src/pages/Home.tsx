import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
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
    { value: '3000+\u00A0м²', label: 'Производственных площадей' },
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
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-secondary whitespace-nowrap">{stat.value}</div>
                    <div className="text-white/80 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/57.jpg"
                alt="Производство металлоконструкций"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contacts">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">О компании</Link>
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