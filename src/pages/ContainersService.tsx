import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContainersService = () => {
  const advantages = [
    'Индивидуальное проектирование – каждый резервуар создается с учетом конкретных задач заказчика и условий эксплуатации.',
    'Полный цикл работ – от разработки чертежей до доставки и монтажа на вашем объекте.',
    'Надежность и долговечность – использование качественных материалов и соблюдение требований нормативных документов.',
    'Собственные производственные мощности – контроль качества на всех этапах изготовления.',
    'Быстрые сроки изготовления – оптимизированные производственные процессы и опытная команда.'
  ];

  const solutions = [
    {
      icon: 'Trash2',
      title: 'Мусорные емкости',
      description: 'Изготовление контейнеров и бункеров-накопителей для сбора и временного хранения твердых коммунальных и промышленных отходов. Конструкции отличаются повышенной прочностью, стойкостью к воздействию среды и удобством для транспортировки.'
    },
    {
      icon: 'Box',
      title: 'Емкости для строительства, под бетон и под другие материалы',
      description: 'Производство металлических емкостей (емкостей-бункеров) для хранения, транспортировки и дозирования инертных материалов (цемент, песок, щебень) на строительных площадках и бетонных заводах.'
    },
    {
      icon: 'Droplet',
      title: 'Емкости под жидкости',
      description: 'Изготовление резервуаров и цистерн для воды, технических жидкостей, ГСМ и других неагрессивных сред. Возможна установка необходимого технологического оборудования (теплоизоляция, змеевики, уровнемеры).'
    }
  ];

  const specs = [
    {
      title: 'Материалы',
      value: 'углеродистая сталь (Ст3, 09Г2С), нержавеющая сталь (AISI 304/316)'
    },
    {
      title: 'Толщина стенки',
      value: 'от 2 до 12 мм в зависимости от назначения'
    },
    {
      title: 'Покрытие',
      value: 'порошковая окраска, цинкование, антикоррозийная грунтовка'
    },
    {
      title: 'Стандарты',
      value: 'ГОСТ Р 52630, ГОСТ 31385, ISO 9001'
    }
  ];

  const images = [
    { url: 'https://cdn.poehali.dev/files/116.jpg', alt: 'Технологическая емкость для жидкостей' },
    { url: 'https://cdn.poehali.dev/files/111.jpg', alt: 'Мусорный контейнер-бункер' },
    { url: 'https://cdn.poehali.dev/files/112.jpeg', alt: 'Емкость для сбора отходов' },
    { url: 'https://cdn.poehali.dev/files/113.jpg', alt: 'Строительный бункер для материалов' },
    { url: 'https://cdn.poehali.dev/files/114.jpg', alt: 'Резервуар для воды' },
    { url: 'https://cdn.poehali.dev/files/115.jpg', alt: 'Бункер для бетона с дозатором' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Button 
              asChild 
              variant="ghost" 
              className="mb-6 text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/services">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад к услугам
              </Link>
            </Button>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Технологические емкости – надежные решения для промышленности
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Мы изготавливаем надежные и долговечные технологические емкости на собственных производственных мощностях. Каждый резервуар проектируется с учетом конкретных задач заказчика, условий эксплуатации и требований нормативных документов. Полный цикл работ: от разработки чертежей до доставки и монтажа на вашем объекте.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg hover-scale">
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-[250px] md:h-72 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Наши решения</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                        <Icon name={solution.icon as any} size={28} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Почему выбирают нас</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-0.5">
                      <Icon name="Check" size={16} className="text-secondary-foreground" />
                    </div>
                    <p className="text-muted-foreground">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Технические характеристики</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-primary">{spec.title}</h3>
                      <p className="text-muted-foreground">{spec.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary to-primary/90 border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Готовы обсудить ваш проект?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Свяжитесь с нами для консультации. Наши специалисты помогут подобрать 
                  оптимальное решение и рассчитают стоимость работ
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    <Link to="/contacts">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Связаться с нами
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    <Link to="/services">Все услуги</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContainersService;