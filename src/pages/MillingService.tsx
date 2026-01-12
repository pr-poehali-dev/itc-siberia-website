import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MillingService = () => {
  const advantages = [
    'Точность до 0,01 мм – использование 3-х и 5-осевых станков с ЧПУ.',
    'Широкий спектр материалов – сталь, алюминий, титан, латунь, пластики, оргстекло.',
    'Сложная геометрия – реализация 3D-моделей, прототипов и микродеталей.',
    'Оптимизация сроков – срочные заказы и серийное производство.',
    'Контроль качества – каждое изделие проходит проверку ОТК.'
  ];

  const applications = [
    { icon: 'Cog', text: 'Машиностроение (корпуса, валы, штампы)' },
    { icon: 'Box', text: 'Производство оснастки и пресс-форм' },
    { icon: 'Sparkles', text: 'Архитектурный декор и рекламные конструкции' },
    { icon: 'Cpu', text: 'Электроника и приборостроение (корпуса устройств)' },
    { icon: 'Wrench', text: 'Запасные части и единичные изделия' }
  ];

  const specs = [
    {
      title: 'Максимальные размеры заготовок',
      value: '2000 × 800 × 600 мм'
    },
    {
      title: 'Точность позиционирования',
      value: '±0,05 мм'
    },
    {
      title: 'Типы обработки',
      value: 'торцевая фрезеровка, концевая, профильная, контурная, 3D-фрезеровка'
    },
    {
      title: 'Программное обеспечение',
      value: 'SolidWorks, Mastercam, Siemens NX'
    },
    {
      title: 'Стандарты',
      value: 'ГОСТ 26645-85, ISO 2768, DIN 4766'
    }
  ];

  const images = [
    { url: 'https://cdn.poehali.dev/files/59.jpg', alt: 'Фрезерование сложной детали на станке ЧПУ' },
    { url: 'https://cdn.poehali.dev/files/69.jpg', alt: 'Контроль качества фрезерованной заготовки' },
    { url: 'https://cdn.poehali.dev/files/19.jpg', alt: 'Фрезерование пластиковой детали' },
    { url: 'https://cdn.poehali.dev/files/29.jpg', alt: 'Фрезерование алюминиевой детали' },
    { url: 'https://cdn.poehali.dev/files/39.jpg', alt: 'Готовые фрезерованные детали из алюминия' },
    { url: 'https://cdn.poehali.dev/files/49.jpg', alt: 'Процесс фрезеровки металлической заготовки' }
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
              Фрезерные работы – высокая точность и сложные формы для ваших деталей
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
                Фрезерные работы – это современная обработка металла, пластика и композитных материалов с помощью 
                станков с ЧПУ, позволяющая создавать детали любой сложности. Мы выполняем фрезеровку плоских, 
                объемных и фасонных поверхностей, пазов, отверстий и 3D-моделей, гарантируя точность до микронов. 
                Наше оборудование и опытные операторы превратят ваш чертеж в идеально подогнанное изделие.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Преимущества наших услуг</h2>
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
              <div className="grid md:grid-cols-2 gap-6">
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

export default MillingService;