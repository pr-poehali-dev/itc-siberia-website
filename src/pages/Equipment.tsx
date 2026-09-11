import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
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

      <PageHero
        eyebrow="Каталог"
        title="Оборудование"
        subtitle={`Каталог промышленного оборудования и роботизированных решений: ${totalItems} позиций в ${equipmentCategories.length} направлениях`}
      />

      <section className="sticky top-[88px] md:top-[112px] z-40 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              Все категории
            </button>
            {equipmentCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
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
              <div className="w-14 h-14 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
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

            <div className={category.items.length === 1 ? 'grid grid-cols-1 gap-6' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
              {category.items.map((item) => item.features ? (
                <div key={item.id} className="border border-border bg-white">
                  <div className="grid lg:grid-cols-2">
                    <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-muted">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">{item.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                      <div className="space-y-2 mb-8">
                        {item.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between gap-3 text-sm border-b border-border/60 pb-1.5">
                            <span className="text-muted-foreground">{spec.label}</span>
                            <span className="font-medium text-right">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-auto w-full sm:w-auto sm:self-start px-8">
                        <Link to="/contacts">
                          Запросить расчёт
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t border-border p-8 lg:p-10">
                    <div className="eyebrow-muted mb-6">Преимущества</div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {item.features.map((f, idx) => (
                        <div key={idx} className="flex gap-4">
                          <span className="font-mono-tech text-sm text-secondary pt-0.5">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <div className="font-bold mb-1">{f.title}</div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {item.prices && item.bundle && (
                    <div className="border-t border-border p-8 lg:p-10">
                      <div className="eyebrow-muted mb-6">Стоимость</div>
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          {item.prices.map((p, idx) => (
                            <div key={idx} className="flex justify-between items-baseline gap-4 border-b border-border pb-2">
                              <span className="text-sm">{p.label}</span>
                              <span className="font-mono-tech font-bold whitespace-nowrap">{p.value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-primary text-white p-7">
                          <div className="flex items-center justify-between mb-5">
                            <span className="eyebrow-muted text-white/70">{item.bundle.title}</span>
                            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary">
                              {item.bundle.note}
                            </Badge>
                          </div>
                          <div className="text-3xl font-extrabold mb-5">{item.bundle.price}</div>
                          <div className="space-y-2">
                            {item.bundle.items.map((b, idx) => (
                              <div key={idx} className="flex items-center gap-2.5 text-sm text-white/85">
                                <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                                {b}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.gallery && (
                    <div className="border-t border-border p-8 lg:p-10">
                      <div className="eyebrow-muted mb-6">Примеры установленных защит</div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {item.gallery.map((g, idx) => (
                          <div key={idx}>
                            <div className="aspect-[4/3] overflow-hidden bg-muted mb-2">
                              <img src={g.src} alt={g.caption} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="text-sm text-muted-foreground">{g.caption}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Card
                  key={item.id}
                  className="flex flex-col h-full overflow-hidden transition-shadow hover:shadow-none"
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

      <section className="py-20 bg-primary tech-grid-dark">
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