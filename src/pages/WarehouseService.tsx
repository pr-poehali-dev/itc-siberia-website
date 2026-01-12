import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WarehouseService = () => {
  const advantages = [
    'Скорость строительства – монтаж за 1-6 месяцев, в зависимости от сложности строения.',
    'Энергоэффективность – утепленные сэндвич-панели, системы вентиляции и «умного» освещения.',
    'Масштабируемость – возможность расширения площади без остановки работы склада.',
    'Индивидуальный подход – проекты под специфику грузов.',
    'Соответствие стандартам – соблюдение ГОСТ, СНиП и требований пожарной безопасности.'
  ];

  const applications = [
    { icon: 'Truck', text: 'Логистические центры и распределительные хабы' },
    { icon: 'Factory', text: 'Промышленные склады для сырья и готовой продукции' },
    { icon: 'Package', text: 'Склады временного хранения (СВХ) и таможенные терминалы' }
  ];

  const specs = [
    {
      title: 'Типы конструкций',
      value: 'каркасные, бескаркасные, ангарные, многоэтажные'
    },
    {
      title: 'Материалы',
      value: 'оцинкованная сталь, сэндвич-панели (толщина 80-200 мм), бетонные фундаменты'
    },
    {
      title: 'Параметры',
      value: 'пролеты до 20 м, высота до 12 м, площадь от 200 м² до 5 000 м²'
    },
    {
      title: 'Дополнительные опции',
      value: 'докшелтеры, пандусы, системы пожаротушения, CCTV, склады класса «А»'
    }
  ];

  const images = [
    { url: 'https://cdn.poehali.dev/files/55.jpg', alt: 'Интерьер складского помещения с продукцией' },
    { url: 'https://cdn.poehali.dev/files/65.jpg', alt: 'Пустое складское помещение внутри' },
    { url: 'https://cdn.poehali.dev/files/15.jpg', alt: 'Современный синий склад снаружи' },
    { url: 'https://cdn.poehali.dev/files/25.jpg', alt: 'Просторное складское помещение с высокими потолками' },
    { url: 'https://cdn.poehali.dev/files/35.jpg', alt: 'Каркас складского здания' },
    { url: 'https://cdn.poehali.dev/files/45.jpg', alt: 'Индустриальное складское пространство' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Строительство складских помещений – быстро, надежно и под ключ
            </h1>
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
                    className="w-full h-72 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Современные складские помещения – это основа эффективной логистики, хранения и производства. 
                Мы проектируем и строим склады любой сложности: от компактных хранилищ до масштабных 
                логистических комплексов. Быстровозводимые конструкции, адаптивные планировки и использование 
                инновационных материалов обеспечивают долговечность, безопасность и экономическую выгоду 
                для вашего бизнеса.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Преимущества наших решений</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Icon name="Check" size={20} className="text-secondary-foreground" />
                        </div>
                        <p className="text-foreground leading-relaxed">{advantage}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Область применения</h2>
              <div className="grid md:grid-cols-1 gap-6">
                {applications.map((app, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name={app.icon as any} size={24} className="text-primary" />
                        </div>
                        <p className="text-foreground leading-relaxed pt-2">{app.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Технические характеристики</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {specs.map((spec, index) => (
                      <div key={index} className="border-b border-border last:border-0 pb-6 last:pb-0">
                        <h3 className="text-lg font-bold text-primary mb-2">{spec.title}</h3>
                        <p className="text-muted-foreground">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                <div className="flex justify-center">
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

export default WarehouseService;