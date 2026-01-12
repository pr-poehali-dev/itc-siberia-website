import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: 'Factory',
      title: 'Производство металлоконструкций',
      description: 'Изготовление металлоконструкций любой сложности с соблюдением всех стандартов качества',
      details: [
        'Каркасы зданий и сооружений',
        'Балки, колонны, фермы',
        'Нестандартные конструкции',
        'Лестницы и ограждения',
        'Площадки и настилы'
      ]
    },
    {
      icon: 'Cog',
      title: 'Инженерное проектирование',
      description: 'Разработка технической документации и проектирование промышленных объектов',
      details: [
        'Разработка проектной документации',
        'Расчеты прочности и устойчивости',
        '3D моделирование конструкций',
        'Рабочая документация',
        'Авторский надзор'
      ]
    },
    {
      icon: 'Wrench',
      title: 'Монтажные работы',
      description: 'Профессиональный монтаж конструкций на объекте заказчика',
      details: [
        'Монтаж металлоконструкций',
        'Сварочные работы на объекте',
        'Установка несущих конструкций',
        'Монтаж технологического оборудования',
        'Пусконаладочные работы'
      ]
    },
    {
      icon: 'Shield',
      title: 'Техническая экспертиза',
      description: 'Консультации и технический надзор на всех этапах реализации проекта',
      details: [
        'Обследование конструкций',
        'Экспертиза проектной документации',
        'Технический надзор',
        'Консультации по модернизации',
        'Оценка технического состояния'
      ]
    },
    {
      icon: 'Paintbrush',
      title: 'Антикоррозийная защита',
      description: 'Нанесение защитных покрытий для долговечности конструкций',
      details: [
        'Пескоструйная обработка',
        'Грунтование металла',
        'Окраска в заводских условиях',
        'Антикоррозийные покрытия',
        'Огнезащитная обработка'
      ]
    },
    {
      icon: 'Package',
      title: 'Комплексные поставки',
      description: 'Поставка металлопроката и комплектующих для строительства',
      details: [
        'Металлопрокат всех видов',
        'Крепежные элементы',
        'Сварочные материалы',
        'Метизы и комплектующие',
        'Логистика по России'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">
              Услуги
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Комплексные решения для вашего бизнеса
            </h1>
            <p className="text-xl text-white/90">
              Предоставляем полный спектр услуг от проектирования до монтажа. 
              Работаем с объектами любой сложности
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/contacts">
                      Заказать услугу
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Этапы работы</h2>
            <p className="text-xl text-white/90 mb-12">
              Прозрачный процесс от заявки до сдачи объекта
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Заявка', desc: 'Получение и обработка заявки' },
                { num: '02', title: 'Расчет', desc: 'Расчет стоимости и сроков' },
                { num: '03', title: 'Производство', desc: 'Изготовление и контроль качества' },
                { num: '04', title: 'Монтаж', desc: 'Доставка и монтаж на объекте' }
              ].map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-5xl font-bold text-secondary mb-4">{step.num}</div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-white/80 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Наши специалисты помогут подобрать оптимальное решение для вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contacts">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">Посмотреть проекты</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
