import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EngineeringService = () => {
  const solutions = [
    {
      icon: 'Settings',
      title: 'Подбор технологического оборудования',
      description: 'Комплексный анализ производственных задач и подбор оптимального оборудования для вашего предприятия',
      features: [
        'Анализ технологических процессов',
        'Подбор оборудования под задачи',
        'Расчет производительности',
        'Оптимизация бюджета'
      ]
    },
    {
      icon: 'Lightbulb',
      title: 'Разработка технических решений',
      description: 'Проектирование и разработка индивидуальных технических решений для сложных производственных задач',
      features: [
        'Инженерные расчеты',
        'Техническая документация',
        'Моделирование процессов',
        'Внедрение решений'
      ]
    },
    {
      icon: 'Wrench',
      title: 'Модернизация производства',
      description: 'Анализ текущих производственных процессов и разработка решений по их оптимизации и модернизации',
      features: [
        'Аудит производства',
        'Выявление узких мест',
        'План модернизации',
        'Сопровождение внедрения'
      ]
    },
    {
      icon: 'Database',
      title: 'Автоматизация процессов',
      description: 'Разработка систем автоматизации для повышения эффективности производства и снижения затрат',
      features: [
        'Системы управления',
        'Интеграция оборудования',
        'Диспетчеризация',
        'Обучение персонала'
      ]
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт более 13 лет',
      description: 'Успешно реализовали более 500 проектов в различных отраслях промышленности'
    },
    {
      icon: 'Users',
      title: 'Команда экспертов',
      description: 'Высококвалифицированные инженеры с глубокими знаниями в различных областях'
    },
    {
      icon: 'Target',
      title: 'Индивидуальный подход',
      description: 'Каждый проект уникален - разрабатываем решения под конкретные задачи заказчика'
    },
    {
      icon: 'TrendingUp',
      title: 'Эффективность',
      description: 'Наши решения позволяют увеличить производительность на 20-40%'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Анализ задачи',
      description: 'Детальное изучение производственных процессов и требований заказчика'
    },
    {
      step: '02',
      title: 'Разработка решения',
      description: 'Проектирование оптимального технического решения с расчетами и обоснованием'
    },
    {
      step: '03',
      title: 'Согласование',
      description: 'Презентация решения, внесение корректировок, согласование всех деталей'
    },
    {
      step: '04',
      title: 'Реализация',
      description: 'Подбор и поставка оборудования, монтаж, пусконаладка и обучение персонала'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center min-h-[300px] md:min-h-[400px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Решение инжиниринговых задач
            </h1>
            <p className="text-base md:text-xl text-white/90">
              Комплексный подход к решению технологических задач вашего производства. 
              От анализа и проектирования до внедрения и запуска
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши инжиниринговые услуги</h2>
            <p className="text-muted-foreground text-lg">
              Разрабатываем технические решения любой сложности для промышленных предприятий
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon name={solution.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Этапы работы</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-4">{item.step}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg">
              Мы предлагаем не просто услуги, а комплексные решения для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover-scale text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{advantage.title}</h4>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для консультации. Наши инженеры помогут найти оптимальное решение 
                для ваших производственных задач
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link to="/contacts">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Связаться с нами
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link to="/services">
                    <Icon name="ArrowLeft" size={20} className="mr-2" />
                    Все услуги
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EngineeringService;