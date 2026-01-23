import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MetalProcessing = () => {
  const services = [
    {
      icon: 'Zap',
      title: 'Лазерная и плазменная резка металлов',
      description: 'Высокоточная резка листового металла любой конфигурации. Лазерная резка обеспечивает идеально ровный край для деталей сложной формы, плазменная резка эффективна для толстостенных заготовок. Работаем с черной и нержавеющей сталью, алюминием.',
      image: 'https://cdn.poehali.dev/files/60f76f96-a278-439e-92cf-c4680cbba039.jpg',
      specs: [
        { label: 'Толщина материала', value: 'до 50 мм (плазма), до 20 мм (лазер)' },
        { label: 'Преимущества', value: 'Минимальная зона термического влияния, чистота реза, высокая скорость' }
      ]
    },
    {
      icon: 'Move',
      title: 'Гибочные работы',
      description: 'Придание металлу требуемой формы на листогибочных прессах с ЧПУ. Изготовление корпусов, откосов, профилей и других элементов с точностью до миллиметра.',
      image: 'https://cdn.poehali.dev/files/39dc0254-e370-4407-8a1a-16825589a54b.jpeg',
      specs: [
        { label: 'Оборудование', value: 'Современное гибочное оборудование с ЧПУ' },
        { label: 'Возможности', value: 'Гибка под любым углом' },
        { label: 'Параметры', value: 'Толщина до 8 мм, длина гиба до 2500 мм' }
      ]
    },
    {
      icon: 'Circle',
      title: 'Вальцовочные работы',
      description: 'Радиусная гибка листового металла и труб для получения конических, овальных и цилиндрических изделий. Изготовление обечаек, корпусов, цилиндров, дымоходов и других элементов сложной формы.',
      image: 'https://cdn.poehali.dev/files/b04aa85d-1e74-4020-aac7-406cb71a99b6.jpg',
      specs: [
        { label: 'Оборудование', value: 'Листогибочные вальцы (вальцовочные станки)' },
        { label: 'Возможности', value: 'Гибка в холодном состоянии, работа с различными радиусами' },
        { label: 'Параметры', value: 'Длина вальцов до 2500 мм, толщина до 10 мм' }
      ]
    },
    {
      icon: 'Flame',
      title: 'Сварочные работы',
      description: 'Все виды сварки: ручная дуговая (ММА), полуавтоматическая (MIG/MAG), аргонодуговая (TIG) для нержавеющих сталей и алюминия. Сварка конструкций ответственного назначения.',
      image: 'https://cdn.poehali.dev/files/5386b00e-7f2b-479b-9f05-b2b455efb383.jpg',
      specs: [
        { label: 'Контроль качества', value: 'Визуальный измерительный контроль (ВИК)' },
        { label: 'Стандарты', value: 'Работы выполняются согласно ГОСТ, СП, EN' }
      ]
    },
    {
      icon: 'Paintbrush',
      title: 'Покрасочные работы',
      description: 'Нанесение защитно-декоративных лакокрасочных покрытий. Подготовка поверхности (очистка, обезжиривание, грунтование) и покраска пневматическим распылением или электростатическим методом.',
      image: 'https://cdn.poehali.dev/files/bb34b6f6-7617-44ad-871f-8a5e8b08f22b.jpg',
      specs: [
        { label: 'Типы покрытий', value: 'Порошковые и жидкие краски' },
        { label: 'Цель', value: 'Защита от коррозии, износа и придание эстетичного вида' }
      ]
    }
  ];

  const advantages = [
    'Полный цикл – все операции от резки до покраски в одном месте, вы экономите время и логистические издержки',
    'Контроль качества – строгий операционный контроль на каждом технологическом этапе',
    'Собственные мощности – производственные цеха площадью 3000+ м² оснащены современными станками с ЧПУ',
    'Гибкость – выполняем как крупносерийные заказы, так и мелкие партии и индивидуальные проекты'
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
              Услуги по обработке металла – полный технологический цикл
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Полный технологический цикл обработки металла на современном оборудовании. Высокоточная резка, 
                гибка, вальцовка, сварка и покраска металлических деталей и конструкций любой сложности для нужд 
                промышленности и строительства. Контроль качества на каждом этапе гарантирует долговечность и 
                надежность готовых изделий.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Наши ключевые направления</h2>
              <div className="space-y-12">
                {services.map((service, index) => (
                  <Card key={index} className="overflow-hidden hover-scale">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover min-h-[300px]"
                          />
                        </div>
                        <div className={`p-8 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Icon name={service.icon as any} size={24} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold">{service.title}</h3>
                          </div>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="space-y-4">
                            {service.specs.map((spec, idx) => (
                              <div key={idx} className="border-l-4 border-l-secondary pl-4">
                                <p className="font-semibold text-sm text-primary mb-1">{spec.label}</p>
                                <p className="text-sm text-muted-foreground">{spec.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Почему выбирают наше производство</h2>
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

export default MetalProcessing;
