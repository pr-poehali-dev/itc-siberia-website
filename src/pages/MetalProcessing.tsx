import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function MetalProcessing() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2">
              Металлообработка
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Услуги по обработке металла
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Полный технологический цикл обработки металла на современном оборудовании. Высокоточная резка, гибка, вальцовка, сварка и покраска металлических деталей и конструкций любой сложности.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contacts">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <a href="#services">
                  <Icon name="ChevronDown" size={20} className="mr-2" />
                  Подробнее об услугах
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши ключевые направления</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Мы объединили передовые технологии и многолетний опыт, чтобы предложить комплекс услуг по металлообработке. Контроль качества на каждом этапе гарантирует долговечность и надежность готовых изделий.
              </p>
            </div>

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
                      <p className="text-sm text-muted-foreground">Гибка в холодном состоянии, работа с различными радиусами</p>
                    </div>
                    <div>
                      <p className="font-semibold">Параметры:</p>
                      <p className="text-sm text-muted-foreground">Длина вальцов до 2500 мм, толщина до 10 мм</p>
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
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
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
                      <p className="text-white/80 text-sm">Выполняем как крупносерийные заказы, так и мелкие партии и индивидуальные проекты</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Наши специалисты помогут подобрать оптимальное решение для вашего проекта и рассчитают стоимость работ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contacts">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Все услуги
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
