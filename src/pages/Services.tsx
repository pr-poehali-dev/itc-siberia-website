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
      icon: 'Box',
      title: 'Закладные для ЖБИ',
      description: 'Производство закладных деталей для железобетонных изделий по индивидуальным чертежам',
      details: [
        'Закладные детали любой сложности',
        'Анкерные болты и пластины',
        'Металлические закладные элементы',
        'Работа по чертежам заказчика',
        'Контроль качества продукции'
      ]
    },
    {
      icon: 'Sparkles',
      title: 'Декоративные металлоконструкции',
      description: 'Изготовление художественных и декоративных изделий из металла',
      details: [
        'Кованые элементы и ограждения',
        'Декоративные фасады зданий',
        'Металлические козырьки',
        'Художественная ковка',
        'Нестандартные дизайнерские решения'
      ]
    },
    {
      icon: 'Plane',
      title: 'Авиационные ангары',
      description: 'Проектирование и строительство ангаров для авиационной техники',
      details: [
        'Быстровозводимые ангары',
        'Проектирование под любой тип ВС',
        'Ворота и подъемные системы',
        'Системы вентиляции и отопления',
        'Полный цикл строительства'
      ]
    },
    {
      icon: 'Lightbulb',
      title: 'Дорожное освещение',
      description: 'Производство и монтаж опор освещения для дорог и улиц',
      details: [
        'Опоры освещения различной высоты',
        'Кронштейны и консоли',
        'Монтаж освещения',
        'Окраска в заводских условиях',
        'Гарантия на конструкции'
      ]
    },
    {
      icon: 'Warehouse',
      title: 'Строительство складских помещений',
      description: 'Проектирование и возведение складов под ключ',
      details: [
        'Быстровозводимые склады',
        'Логистические комплексы',
        'Холодильные склады',
        'Складское оборудование',
        'Системы безопасности'
      ]
    },
    {
      icon: 'Building2',
      title: 'Строительные металлоконструкции',
      description: 'Изготовление несущих конструкций для гражданского и промышленного строительства',
      details: [
        'Каркасы зданий',
        'Колонны и балки',
        'Фермы перекрытий',
        'Связевые элементы',
        'Расчет и проектирование'
      ]
    },
    {
      icon: 'Settings',
      title: 'Технологические металлоконструкции',
      description: 'Производство конструкций для технологического оборудования',
      details: [
        'Площадки обслуживания',
        'Лестницы и переходы',
        'Каркасы для оборудования',
        'Эстакады и галереи',
        'Нестандартные решения'
      ]
    },
    {
      icon: 'Zap',
      title: 'Сварные металлоконструкции',
      description: 'Изготовление сварных конструкций различного назначения',
      details: [
        'Сварка всех видов металлов',
        'Рамные конструкции',
        'Емкости и резервуары',
        'Аттестованные сварщики',
        'Контроль сварных швов'
      ]
    },
    {
      icon: 'Container',
      title: 'Технологические емкости',
      description: 'Проектирование и производство металлических емкостей для различных отраслей промышленности',
      details: [
        'Мусорные емкости и бункеры',
        'Емкости для строительных материалов',
        'Резервуары для жидкостей',
        'Полный цикл работ от проекта до монтажа',
        'Индивидуальное проектирование'
      ]
    },
    {
      icon: 'CircuitBoard',
      title: 'Фрезерные работы',
      description: 'Фрезерная обработка металлических деталей на станках ЧПУ',
      details: [
        'Обработка на станках ЧПУ',
        'Высокая точность изготовления',
        'Работа со сложными деталями',
        'Малые и крупные серии',
        'Контроль размеров'
      ]
    },
    {
      icon: 'Circle',
      title: 'Токарные работы',
      description: 'Токарная обработка металлических заготовок любой сложности',
      details: [
        'Токарная обработка металлов',
        'Валы и втулки',
        'Фланцы и диски',
        'Резьбовые изделия',
        'Единичное и серийное производство'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center min-h-[300px] md:min-h-[400px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl md:text-5xl font-bold leading-snug md:leading-tight">
              Предоставляем полный спектр услуг от проектирования до монтажа. 
              Работаем с объектами любой сложности
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale flex flex-col">
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6 flex-grow">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary/90 mt-auto"
                  >
                    <Link to={
                      index === 0 ? "/services/zakladnye-zbi" : 
                      index === 1 ? "/services/dekorativnye" : 
                      index === 2 ? "/services/angary" : 
                      index === 3 ? "/services/osveshchenie" :
                      index === 4 ? "/services/sklady" :
                      index === 5 ? "/services/stroitelnye" :
                      index === 6 ? "/services/tehnologicheskie" :
                      index === 7 ? "/services/svarnye" :
                      index === 8 ? "/services/emkosti" :
                      index === 9 ? "/services/frezernye" :
                      index === 10 ? "/services/tokarnye" :
                      "/contacts"
                    }>
                      {(index >= 0 && index <= 10) ? 'Подробнее' : 'Заказать услугу'}
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary text-white">Металлообработка</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Услуги по обработке металла</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Полный технологический цикл обработки металла на современном оборудовании. Мы выполняем высокоточную резку, гибку, вальцовку, сварку и покраску металлических деталей и конструкций любой сложности для нужд промышленности и строительства. Контроль качества на каждом этапе гарантирует долговечность и надежность готовых изделий.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 text-center">Наши ключевые направления</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Мы объединили передовые технологии и многолетний опыт, чтобы предложить комплекс услуг по металлообработке
              </p>

              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="https://cdn.poehali.dev/files/60f76f96-a278-439e-92cf-c4680cbba039.jpg" 
                      alt="Лазерная резка металла"
                      className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Icon name="Zap" className="text-primary" size={28} />
                      Лазерная и плазменная резка металлов
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Высокоточная резка листового металла любой конфигурации. Лазерная резка обеспечивает идеально ровный край для деталей сложной формы, плазменная резка эффективна для толстостенных заготовок. Работаем с черной и нержавеющей сталью, алюминием.
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-4 border">
                      <p className="font-semibold mb-2">Толщина материала:</p>
                      <p className="text-sm text-muted-foreground">до 50 мм (плазма), до 20 мм (лазер)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm"><strong>Преимущества:</strong> Минимальная зона термического влияния, чистота реза, высокая скорость</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Icon name="Move" className="text-primary" size={28} />
                      Гибочные работы
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Придание металлу требуемой формы на листогибочных прессах с ЧПУ. Изготовление корпусов, откосов, профилей и других элементов с точностью до миллиметра.
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-4 border space-y-2">
                      <div>
                        <p className="font-semibold">Оборудование:</p>
                        <p className="text-sm text-muted-foreground">Современное гибочное оборудование с ЧПУ</p>
                      </div>
                      <div>
                        <p className="font-semibold">Возможности:</p>
                        <p className="text-sm text-muted-foreground">Гибка под любым углом</p>
                      </div>
                      <div>
                        <p className="font-semibold">Параметры:</p>
                        <p className="text-sm text-muted-foreground">Толщина до 8 мм, длина гиба до 2500 мм</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img 
                      src="https://cdn.poehali.dev/files/39dc0254-e370-4407-8a1a-16825589a54b.jpeg" 
                      alt="Гибочные работы"
                      className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="https://cdn.poehali.dev/files/b04aa85d-1e74-4020-aac7-406cb71a99b6.jpg" 
                      alt="Вальцовочные работы"
                      className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Icon name="Circle" className="text-primary" size={28} />
                      Вальцовочные работы
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Радиусная гибка листового металла и труб для получения конических, овальных и цилиндрических изделий. Изготовление обечаек, корпусов, цилиндров, дымоходов и других элементов сложной формы.
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-4 border space-y-2">
                      <div>
                        <p className="font-semibold">Оборудование:</p>
                        <p className="text-sm text-muted-foreground">Листогибочные вальцы (вальцовочные станки)</p>
                      </div>
                      <div>
                        <p className="font-semibold">Возможности:</p>
                        <p className="text-sm text-muted-foreground">Гибка в холодном состоянии, работа с различными радиусами и толщинами металла</p>
                      </div>
                      <div>
                        <p className="font-semibold">Параметры:</p>
                        <p className="text-sm text-muted-foreground">Длина вальцов до 2500 мм, толщина материала до 10 мм</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Icon name="Flame" className="text-primary" size={28} />
                      Сварочные работы
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Все виды сварки: ручная дуговая (ММА), полуавтоматическая (MIG/MAG), аргонодуговая (TIG) для нержавеющих сталей и алюминия. Сварка конструкций ответственного назначения.
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-4 border space-y-2">
                      <div>
                        <p className="font-semibold">Контроль качества:</p>
                        <p className="text-sm text-muted-foreground">Визуальный измерительный контроль (ВИК)</p>
                      </div>
                      <div>
                        <p className="font-semibold">Стандарты:</p>
                        <p className="text-sm text-muted-foreground">Работы выполняются согласно ГОСТ, СП, EN</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img 
                      src="https://cdn.poehali.dev/files/5386b00e-7f2b-479b-9f05-b2b455efb383.jpg" 
                      alt="Сварочные работы"
                      className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="https://cdn.poehali.dev/files/bb34b6f6-7617-44ad-871f-8a5e8b08f22b.jpg" 
                      alt="Покрасочные работы"
                      className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Icon name="Paintbrush" className="text-primary" size={28} />
                      Покрасочные работы
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Нанесение защитно-декоративных лакокрасочных покрытий. Подготовка поверхности (очистка, обезжиривание, грунтование) и покраска пневматическим распылением или электростатическим методом.
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-4 border space-y-2">
                      <div>
                        <p className="font-semibold">Типы покрытий:</p>
                        <p className="text-sm text-muted-foreground">Порошковые и жидкие краски</p>
                      </div>
                      <div>
                        <p className="font-semibold">Цель:</p>
                        <p className="text-sm text-muted-foreground">Защита от коррозии, износа и придание эстетичного вида</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Почему выбирают наше производство</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Layers" size={24} className="text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Полный цикл</h4>
                      <p className="text-white/80 text-sm">Все операции от резки до покраски в одном месте — вы экономите время и логистические издержки</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ShieldCheck" size={24} className="text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Контроль качества</h4>
                      <p className="text-white/80 text-sm">Строгий операционный контроль на каждом технологическом этапе</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Factory" size={24} className="text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Собственные мощности</h4>
                      <p className="text-white/80 text-sm">Производственные цеха площадью 3000+ м² оснащены современными станками с ЧПУ</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Sparkles" size={24} className="text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Гибкость</h4>
                      <p className="text-white/80 text-sm">Выполняем как крупносерийные заказы, так и мелкие партии и индивидуальные проекты, включая вальцовку сложных форм</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center">
                  <div className="text-5xl font-bold text-secondary mb-4">{step.num}</div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-white/80 text-sm text-center">{step.desc}</p>
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
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contacts">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
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