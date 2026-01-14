import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TechnologicalService = () => {
  const advantages = [
    'Индивидуальное проектирование – учитываем специфику вашего производства (температуры, давление, химические воздействия).',
    'Промышленная прочность – материалы с повышенной износостойкостью и антикоррозийной защитой.',
    'Соответствие стандартам – соблюдение ГОСТ, ISO, ASME и отраслевых требований безопасности.',
    'Быстрая интеграция – конструкции адаптированы под монтаж оборудования и коммуникаций.',
    'Минимизация простоев – поставка и монтаж в сжатые сроки без остановки производства.'
  ];

  const applications = [
    { icon: 'Fuel', text: 'Нефтегазовая отрасль (платформы, трубопроводные эстакады)' },
    { icon: 'Mountain', text: 'Горнодобывающая промышленность (конвейерные галереи, опоры дробильных комплексов)' },
    { icon: 'Cookie', text: 'Пищевое производство (платформы для оборудования, стеллажные системы)' },
    { icon: 'Zap', text: 'Энергетика (опоры для турбин, кабельные эстакады)' },
    { icon: 'Flask', text: 'Химическая промышленность (каркасы реакторов, технологические переходы)' }
  ];

  const specs = [
    {
      title: 'Материалы',
      value: 'нержавеющая сталь (AISI 304/316), углеродистая сталь с цинкованием, жаропрочные сплавы'
    },
    {
      title: 'Типы конструкций',
      value: 'рамы, платформы, лестницы, площадки, кожухи, технологические эстакады'
    },
    {
      title: 'Защита',
      value: 'пескоструйная обработка, полимерные покрытия, термоустойчивые краски'
    },
    {
      title: 'Нагрузки',
      value: 'до 10 тонн на м², устойчивость к температурам от -60°C до +500°C'
    },
    {
      title: 'Стандарты',
      value: 'ГОСТ Р 53695-2009, ISO 3834, EN 1090 (EXC3/EXC4)'
    }
  ];

  const images = [
    { url: 'https://cdn.poehali.dev/files/57.jpg', alt: 'Технологические металлоконструкции на производстве' },
    { url: 'https://cdn.poehali.dev/files/67.jpg', alt: 'Технологическая площадка с ограждениями' },
    { url: 'https://cdn.poehali.dev/files/17.jpg', alt: 'Промышленные технологические эстакады' },
    { url: 'https://cdn.poehali.dev/files/27.jpg', alt: 'Конвейерные галереи и переходы' },
    { url: 'https://cdn.poehali.dev/files/37.jpg', alt: 'Технологическая платформа с лестницей' },
    { url: 'https://cdn.poehali.dev/files/47.jpg', alt: 'Технологические конструкции для оборудования' }
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
              Технологические металлоконструкции – точность, надежность и адаптация под ваши производственные задачи
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
                Технологические металлоконструкции – это специализированные решения для промышленных процессов, 
                обеспечивающие безопасность, эффективность и долговечность производственных линий. Они используются 
                в нефтегазовой, энергетической, химической и других отраслях, где требуются высокая точность, 
                устойчивость к экстремальным нагрузкам и агрессивным средам. Наши конструкции проектируются под 
                конкретные технологические задачи, гарантируя бесперебойную работу вашего предприятия.
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

export default TechnologicalService;