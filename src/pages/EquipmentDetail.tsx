import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { findEquipmentItem } from '@/data/equipment';

const EquipmentDetail = () => {
  const { itemId } = useParams();
  const found = itemId ? findEquipmentItem(itemId) : null;

  if (!found) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-40 text-center">
          <h1 className="text-3xl font-bold mb-4">Позиция не найдена</h1>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/equipment">Вернуться в каталог</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const { category, item } = found;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageHero
        eyebrow={category.shortTitle}
        title={item.title}
        subtitle={item.shortDescription ?? item.description}
      />

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link to="/equipment" className="hover:text-primary transition-colors">
              Оборудование
            </Link>
            <Icon name="ChevronRight" size={14} />
            <Link to="/equipment" className="hover:text-primary transition-colors">
              {category.shortTitle}
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-primary font-medium">{item.title}</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="aspect-[4/3] overflow-hidden bg-muted border border-border">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{item.title}</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">{item.description}</p>

              <div className="eyebrow-muted mb-4">Характеристики</div>
              <div className="space-y-2 mb-8">
                {item.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between gap-4 text-sm border-b border-border/60 pb-2"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto px-10"
              >
                <Link to="/contacts">
                  Запросить расчёт
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {item.features && (
        <section className="py-14 bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="eyebrow-muted mb-8">Преимущества</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>
      )}

      {item.prices && (
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="eyebrow-muted mb-8">Стоимость</div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-3">
                {item.prices.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-baseline gap-4 border-b border-border pb-2"
                  >
                    <span className="text-sm">{p.label}</span>
                    <span className="font-mono-tech font-bold whitespace-nowrap">{p.value}</span>
                  </div>
                ))}
              </div>
              {item.bundle && (
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
              )}
            </div>
          </div>
        </section>
      )}

      {item.gallery && (
        <section className="py-14 bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="eyebrow-muted mb-8">Примеры выполненных работ</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {item.gallery.map((g, idx) => (
                <div key={idx}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted mb-2">
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">{g.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-primary tech-grid-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы защитить вашу технику</h2>
            <p className="text-lg text-white/90 mb-8">
              Рассчитаем стоимость под вашу модель, изготовим и установим
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
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

export default EquipmentDetail;
