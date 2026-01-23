import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DecorativeService = () => {
  const advantages = [
    'Эксклюзивный дизайн – создаем изделия по вашим эскизам или предлагаем готовые решения из каталога.',
    'Прочность и долговечность – используем сталь, алюминий, нержавейку с антикоррозийной обработкой.',
    'Универсальность – подходят для интерьеров, экстерьеров, общественных пространств и частных владений.',
    'Современные технологии – лазерная резка, 3D-моделирование, ручная ковка.',
    'Экологичность – безопасные материалы и покрытия.'
  ];

  const applications = [
    { icon: 'Building', text: 'Фасадный декор (козырьки, решетки, арки)' },
    { icon: 'Shield', text: 'Ограждения (ворота, заборы, перила, балконные решетки)' },
    { icon: 'Home', text: 'Элементы интерьера (лестницы, каминные экраны, светильники, мебель)' },
    { icon: 'Trees', text: 'Ландшафтный дизайн (беседки, садовые скульптуры, фонари, перголы)' },
    { icon: 'Store', text: 'Коммерческие объекты (вывески, стойки ресепшн, зонирующие элементы)' }
  ];

  const specs = [
    {
      title: 'Материалы',
      value: 'углеродистая сталь, нержавеющая сталь, алюминий, медь'
    },
    {
      title: 'Технологии',
      value: 'резка металла, гибка, сварка, литье, патинирование'
    },
    {
      title: 'Покрытия',
      value: 'порошковая окраска, золочение, полировка, антикоррозийные грунты'
    },
    {
      title: 'Варианты исполнения',
      value: 'классика, модерн, хай-тек, барокко, минимализм'
    }
  ];

  const images = [
    { url: 'https://cdn.poehali.dev/files/262eb485-abfa-466c-afc3-a7e2447ca85b.jpg', alt: 'Декоративная металлическая ферма для сцены' },
    { url: 'https://cdn.poehali.dev/files/6c63d4ae-ac04-4653-b45c-317591bcfb11.jpg', alt: 'Декоративные арочные перголы с деревом' },
    { url: 'https://cdn.poehali.dev/files/6810eee5-2284-487e-ab31-ff20aa6f473d.jpg', alt: 'Декоративные металлические ограждения с узором' },
    { url: 'https://cdn.poehali.dev/files/60c64a9f-a258-430c-b2bb-de3d4504e12f.jpg', alt: 'Декоративные панели с геометрическим орнаментом' },
    { url: 'https://cdn.poehali.dev/files/df9d90e4-6598-4821-9176-33d3e3f8b399.jpg', alt: 'Фасадный декор с ажурным узором' },
    { url: 'https://cdn.poehali.dev/files/852987e8-0587-4106-8765-77aafd29cadc.jpg', alt: 'Декоративный мостик с коваными перилами' }
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
              Декоративные металлоконструкции – эстетика, прочность и индивидуальность
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
                Декоративные металлоконструкции — это изящное сочетание искусства и функциональности. 
                Изготовленные методом ковки, литья или лазерной резки, они превращают обычные элементы 
                зданий и ландшафта в уникальные объекты искусства. Используются для украшения фасадов, 
                интерьеров, ограждений, беседок и других элементов, подчеркивая статус и стиль любого пространства.
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
              <h2 className="text-3xl font-bold mb-8">Технические особенности</h2>
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

export default DecorativeService;