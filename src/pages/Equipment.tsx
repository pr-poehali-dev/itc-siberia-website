import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { equipmentCategories } from '@/data/equipment';

const Equipment = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const visibleCategories =
    activeCategory === 'all'
      ? equipmentCategories
      : equipmentCategories.filter((c) => c.id === activeCategory);

  const totalItems = equipmentCategories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center min-h-[280px] md:min-h-[360px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight mb-4">
              Оборудование
            </h1>
            <p className="text-base md:text-xl text-white/90">
              Каталог промышленного оборудования и роботизированных решений: {totalItems} позиций
              в {equipmentCategories.length} направлениях
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-[88px] md:top-[112px] z-40 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-muted text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Все категории
            </button>
            {equipmentCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-muted text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Icon name={cat.icon as any} size={16} />
                {cat.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {visibleCategories.map((category, catIndex) => (
        <section
          key={category.id}
          className={catIndex % 2 === 1 ? 'py-16 bg-muted/40' : 'py-16'}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-4 mb-10">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name={category.icon as any} size={28} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                  <Badge variant="secondary">{category.items.length} позиций</Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">{category.description}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <Card
                  key={item.id}
                  className="flex flex-col h-full overflow-hidden transition-shadow hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2 leading-snug">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="space-y-2 mb-6 flex-grow">
                      {item.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between gap-3 text-sm border-b border-border/60 pb-1.5"
                        >
                          <span className="text-muted-foreground">{spec.label}</span>
                          <span className="font-medium text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 mt-auto">
                      <Link to="/contacts">
                        Запросить цену
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Не нашли нужное оборудование?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Подберём решение под вашу задачу, выполним расчёт и поставим оборудование
              с монтажом и пусконаладкой
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Link to="/contacts">
                <Icon name="Phone" size={18} className="mr-2" />
                Получить консультацию
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipment;
