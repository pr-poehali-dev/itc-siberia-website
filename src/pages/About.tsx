import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center min-h-[300px] md:min-h-[400px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Профессионализм и опыт
            </h1>
            <p className="text-base md:text-xl text-white/90">
              Ведущая компания в Красноярском крае в области инженерных решений 
              и производства металлоконструкций
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ИТЦ-Сибири — инженерно-технологический центр с полным циклом производства металлоконструкций 
                  и услуг промышленного строительства. Компания выросла из небольшой производственной мастерской 
                  в крупное предприятие с собственной производственной базой площадью более 3000 кв.м, 
                  располагающее современным оборудованием и командой опытных специалистов.
                </p>
                <p>
                  За время деятельности реализовано более 500 проектов для крупнейших промышленных предприятий 
                  Сибири. Сегодня мы продолжаем развиваться, внедряя передовые технологии и неустанно повышая 
                  качество предоставляемых услуг.
                </p>
              </div>
            </div>
            <div className="relative max-w-md mx-auto">
              <img 
                src="https://cdn.poehali.dev/files/AdobeStock_725429792_34-1.jpeg"
                alt="Команда ИТЦ-Сибири"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default About;