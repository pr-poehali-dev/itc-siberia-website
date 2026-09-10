import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

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
        'Мусорные баки',
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
    },
    {
      icon: 'Wrench',
      title: 'Услуги по обработке металла',
      description: 'Полный технологический цикл обработки металла: резка, гибка, вальцовка, сварка и покраска',
      details: [
        'Лазерная и плазменная резка металлов',
        'Гибочные работы на прессах с ЧПУ',
        'Вальцовочные работы (радиусная гибка)',
        'Сварочные работы всех видов',
        'Покрасочные работы и антикоррозионная защита'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageHero
        eyebrow="Услуги"
        title="Предоставляем полный спектр услуг от проектирования до монтажа"
        subtitle="Работаем с объектами любой сложности"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {services.map((service, index) => {
              const serviceUrl = 
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
                index === 11 ? "/services/metalloobrabotka" :
                "/contacts";

              return (
                <Link key={index} to={serviceUrl} className="group bg-white hover:bg-surface transition-colors">
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 border border-border group-hover:border-secondary group-hover:bg-secondary flex items-center justify-center transition-colors">
                        <Icon name={service.icon as any} size={24} className="text-primary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      <span className="font-mono-tech text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-snug">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-2.5 mb-6 flex-grow border-t border-border pt-5">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-primary flex items-center text-sm font-semibold uppercase tracking-wide mt-auto">
                      {(index >= 0 && index <= 11) ? 'Подробнее' : 'Заказать услугу'}
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary tech-grid-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-secondary" />
              <span className="eyebrow">Процесс</span>
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-white leading-tight mb-4">Этапы работы</h2>
            <p className="text-white/60 text-base md:text-lg">
              Прозрачный процесс от заявки до сдачи объекта
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/12 border border-white/12">
            {[
              { num: '01', title: 'Заявка', desc: 'Получение и обработка заявки' },
              { num: '02', title: 'Расчет', desc: 'Расчет стоимости и сроков' },
              { num: '03', title: 'Производство', desc: 'Изготовление и контроль качества' },
              { num: '04', title: 'Монтаж', desc: 'Доставка и монтаж на объекте' }
            ].map((step, index) => (
              <div key={index} className="bg-primary p-6 md:p-8">
                <div className="font-mono-tech text-3xl md:text-4xl font-semibold text-secondary mb-5">{step.num}</div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <div className="eyebrow-muted mb-4">Консультация</div>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight">Нужна консультация?</h2>
              <p className="text-muted-foreground">
                Наши специалисты помогут подобрать оптимальное решение для вашего проекта
              </p>
            </div>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/85 text-secondary-foreground shrink-0">
              <Link to="/contacts">
                <Icon name="Phone" size={18} className="mr-2" />
                Связаться с нами
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;