import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ConstructionService = () => {
  const advantages = [
    'Экономия времени – быстрый монтаж и сокращение сроков строительства.',
    'Прочность и устойчивость – выдерживают высокие нагрузки, перепады температур и сейсмические воздействия.',
    'Экологичность – минимальные отходы при производстве и монтаже.',
    'Индивидуальные решения – проектируем конструкции под ваши требования (размеры, форма, функционал).',
    'Долгий срок службы – антикоррозийная обработка и использование высококачественной стали.'
  ];

  const applications = [
    { icon: 'Factory', text: 'Промышленные здания (цеха, склады, ангары)' },
    { icon: 'Building2', text: 'Торгово-развлекательные комплексы и офисные центры' },
    { icon: 'Bridge', text: 'Мосты, эстакады, путепроводы' },
    { icon: 'Trophy', text: 'Спортивные сооружения (стадионы, бассейны)' },
    { icon: 'Sprout', text: 'Сельскохозяйственные объекты (фермы, теплицы, зернохранилища)' }
  ];

  const specs = [
    {
      title: 'Материалы',
      value: 'сталь (углеродистая, легированная, оцинкованная), алюминий'
    },
    {
      title: 'Типы конструкций',
      value: 'каркасы, фермы, колонны, балки, связи'
    },
    {
      title: 'Защита',
      value: 'порошковая покраска, антикоррозийные грунты'
    },
    {
      title: 'Стандарты',
      value: 'ГОСТ 23118-2012, СП 16.13330, EN 1090, ISO 9001'
    },
    {
      title: 'Пролеты',
      value: 'до 20 метров, высота – до 12 метров'
    }
  ];

  const images = [
    { url: 'https://cdn.poehali.dev/files/56.jpg', alt: 'Строительство каркаса здания из красных металлоконструкций' },
    { url: 'https://cdn.poehali.dev/files/66.jpg', alt: 'Металлический каркас на стройплощадке' },
    { url: 'https://cdn.poehali.dev/files/16.jpg', alt: 'Готовые металлические фермы' },
    { url: 'https://cdn.poehali.dev/files/26.jpg', alt: 'Металлические каркасные конструкции на фоне неба' },
    { url: 'https://cdn.poehali.dev/files/36.jpg', alt: 'Двухэтажный металлический каркас здания' },
    { url: 'https://cdn.poehali.dev/files/46.jpg', alt: 'Производство металлических балок в цехе' }
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
              Строительные металлоконструкции – основа современных, прочных и быстровозводимых зданий
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
                Строительные металлоконструкции (СМК) – это каркасы и элементы, из которых создаются промышленные, 
                коммерческие и инфраструктурные объекты. Благодаря высокой прочности, легкости и скорости монтажа, 
                они становятся оптимальным решением для строительства складов, ангаров, мостов, торговых центров и 
                многоэтажных зданий. Наши конструкции обеспечивают надежность, долговечность и соответствие самым 
                строгим стандартам безопасности.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Преимущества наших металлоконструкций</h2>
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

export default ConstructionService;