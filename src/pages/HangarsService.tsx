import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HangarsService = () => {
  const advantages = [
    'Модульная конструкция – быстрая сборка и возможность масштабирования.',
    'Устойчивость к экстремальным условиям – противостояние ураганам, снеговым нагрузкам, коррозии.',
    'Индивидуальное проектирование – адаптация под размеры и тип воздушных судов (самолеты, вертолеты, дроны).',
    'Современные материалы – оцинкованная сталь, алюминиевые панели, огнестойкие покрытия.',
    'Инженерная оснастка – возможность интеграции систем вентиляции, освещения, противопожарной безопасности.'
  ];

  const applications = [
    { icon: 'Plane', text: 'Гражданские и коммерческие аэропорты' },
    { icon: 'Shield', text: 'Военные авиабазы и ангары для спецтехники' },
    { icon: 'MapPin', text: 'Частные аэродромы и вертолетные площадки' },
    { icon: 'Wrench', text: 'Ремонтные мастерские и сервисные центры' },
    { icon: 'Package', text: 'Хранилища для авиационных запчастей и оборудования' }
  ];

  const specs = [
    {
      title: 'Типы конструкций',
      value: 'каркасные, бескаркасные, тентовые, быстровозводимые'
    },
    {
      title: 'Покрытие',
      value: 'сэндвич-панели, профилированный настил, армированный тент'
    },
    {
      title: 'Дополнительные опции',
      value: 'раздвижные ворота, системы климат-контроля, смотровые площадки'
    },
    {
      title: 'Стандарты',
      value: 'ГОСТ Р 56193-2014, ICAO, требования МЧС'
    }
  ];

  const images = [
    { url: 'https://cdn.poehali.dev/files/33.jpg', alt: 'Интерьер авиационного ангара с самолетами' },
    { url: 'https://cdn.poehali.dev/files/43.jpg', alt: 'Открытый ангар с самолетом' },
    { url: 'https://cdn.poehali.dev/files/53.jpg', alt: 'Современный авиационный ангар' },
    { url: 'https://cdn.poehali.dev/files/63.jpg', alt: 'Самолет внутри ангара' },
    { url: 'https://cdn.poehali.dev/files/13.jpg', alt: 'Большой ангар с несколькими самолетами' },
    { url: 'https://cdn.poehali.dev/files/23.jpg', alt: 'Бескаркасный ангар с ретро самолетом' }
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
              Авиационные ангары – надежная защита и современные решения для авиатехники
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
                    className="w-full h-[250px] md:h-72 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Авиационные ангары – это специализированные сооружения, предназначенные для безопасного хранения, 
                обслуживания и ремонта воздушных судов. Наши ангары сочетают в себе высокую прочность, 
                функциональность и соответствие строгим отраслевым стандартам. Они обеспечивают защиту 
                авиационной техники от внешних воздействий, коррозии и перепадов температур, продлевая 
                срок ее эксплуатации.
              </p>
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
              <h2 className="text-3xl font-bold mb-8">Преимущества наших ангаров</h2>
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

export default HangarsService;