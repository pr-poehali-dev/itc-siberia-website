import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServiceDetail = () => {
  const advantages = [
    'Высокая прочность – изготавливаются из качественной стали с антикоррозийной обработкой',
    'Точность размеров – соответствие ГОСТ и индивидуальным чертежам заказчика',
    'Широкий ассортимент – пластины, стержни, анкеры и сложные комбинированные элементы',
    'Долговечность – устойчивость к нагрузкам и агрессивным средам',
    'Гибкость производства – возможность изготовления по вашим техническим требованиям'
  ];

  const applications = [
    'Промышленное и гражданское строительство',
    'Мостостроение и транспортная инфраструктура',
    'Энергетические объекты (ЛЭП, подстанции)',
    'Строительство метро и тоннелей',
    'Сельскохозяйственные и складские комплексы'
  ];

  const specifications = [
    { label: 'Материал', value: 'сталь (Ст3, 09Г2С, нержавеющая сталь)' },
    { label: 'Типы', value: 'открытые, закрытые, съемные, комбинированные' },
    { label: 'Защита', value: 'оцинковка, грунтовка, покраска' }
  ];

  const images = [
    'https://cdn.poehali.dev/files/fe9019f5-d897-4d12-b592-671ff42bce9e.jpg',
    'https://cdn.poehali.dev/files/cc00f12b-1066-4911-a1de-2ffa710dab9c.jpg',
    'https://cdn.poehali.dev/files/ea71e03f-4e39-4b98-9b45-77231d18ad57.jpg',
    'https://cdn.poehali.dev/files/4f2b11f4-d743-4a31-afc6-fa3f5a526c23.jpg',
    'https://cdn.poehali.dev/files/b26aca73-87b4-4990-8c84-ba9d0afe2c8f.jpg',
    'https://cdn.poehali.dev/files/22119a27-4d4e-4f6d-88ce-9422542a9452.jpg'
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
              Закладные детали для железобетонных конструкций
            </h1>
            <p className="text-base md:text-xl text-white/90">
              Надежное крепление и долговечность конструкций
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl aspect-video group">
                <img 
                  src={img} 
                  alt={`Закладные детали ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Описание</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Закладные детали – это металлические элементы, которые монтируются в железобетонные 
              конструкции для обеспечения прочного соединения с другими строительными элементами. 
              Они играют ключевую роль в создании каркасов зданий, мостов, опор, колонн и других 
              конструкций, гарантируя их устойчивость и долговечность.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Область применения</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Icon name="Building2" size={24} className="text-primary flex-shrink-0" />
                      <p className="font-medium">{app}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Преимущества наших закладных деталей</h2>
            <div className="grid gap-4">
              {advantages.map((advantage, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={24} className="text-secondary" />
                      </div>
                      <p className="text-lg">{advantage}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Технические характеристики</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 pb-6 border-b last:border-0 last:pb-0">
                      <span className="font-bold text-lg md:w-1/3">{spec.label}:</span>
                      <span className="text-muted-foreground md:w-2/3">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Заинтересовала услуга?</h2>
            <p className="text-xl text-white/90 mb-8">
              Свяжитесь с нами для консультации и расчета стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contacts">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/services">Все услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;