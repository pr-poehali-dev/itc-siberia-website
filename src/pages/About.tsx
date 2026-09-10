import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const About = () => {
  const team = [
    {
      name: 'Александр Иванов',
      position: 'Главный инженер',
      experience: '15 лет опыта в промышленном строительстве'
    },
    {
      name: 'Михаил Петров',
      position: 'Руководитель отдела производства',
      experience: '12 лет в металлообработке'
    },
    {
      name: 'Елена Сидорова',
      position: 'Технический директор',
      experience: '18 лет в инженерном проектировании'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Главный конструктор',
      experience: '10 лет проектирования металлоконструкций'
    },
    {
      name: 'Ольга Новикова',
      position: 'Начальник отдела качества',
      experience: '8 лет контроля качества'
    },
    {
      name: 'Сергей Волков',
      position: 'Начальник монтажного отдела',
      experience: '14 лет монтажных работ'
    }
  ];

  const certificates = [
    'ISO 9001:2015',
    'Лицензия МЧС',
    'СРО на строительство',
    'Допуск к опасным работам',
    'Сертификат соответствия ГОСТ',
    'Лицензия на проектирование',
    'Аттестация сварщиков',
    'Экологический сертификат'
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Высокое качество',
      description: 'Все работы выполняются по ГОСТ и международным стандартам качества'
    },
    {
      icon: 'Clock',
      title: 'Соблюдение сроков',
      description: 'Гарантируем выполнение работ точно в установленные сроки'
    },
    {
      icon: 'Shield',
      title: 'Полная гарантия',
      description: 'Предоставляем гарантию на все виды выполненных работ'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Квалифицированные специалисты с большим опытом работы'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageHero
        eyebrow="О компании"
        title="Профессионализм и опыт"
        subtitle="Ведущая компания в Красноярском крае в области инженерных решений и производства металлоконструкций"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-secondary" />
                <span className="eyebrow-muted">История</span>
              </div>
              <h2 className="text-3xl md:text-[2.6rem] font-extrabold mb-6 leading-tight">Наша история</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ИТЦ-Сибири — инженерно-технологический центр с полным циклом производства металлоконструкций 
                  и услуг промышленного строительства. Компания выросла из небольшой производственной мастерской 
                  в крупное предприятие с собственной производственной базой площадью более 1500 кв.м, 
                  располагающее современным оборудованием и командой опытных специалистов.
                </p>
                <p>
                  За время деятельности реализовано более 500 проектов для крупнейших промышленных предприятий 
                  Сибири. Сегодня мы продолжаем развиваться, внедряя передовые технологии и неустанно повышая 
                  качество предоставляемых услуг.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/AdobeStock_725429792_34-1.jpeg"
                alt="Команда ИТЦ-Сибири"
                className="w-full h-[400px] object-cover border border-border"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {advantages.map((advantage, index) => (
              <div key={index} className="group bg-white hover:bg-surface transition-colors p-8">
                <div className="w-12 h-12 border border-border group-hover:border-secondary group-hover:bg-secondary flex items-center justify-center mb-6 transition-colors">
                  <Icon name={advantage.icon as any} size={24} className="text-primary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-2 leading-snug">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;