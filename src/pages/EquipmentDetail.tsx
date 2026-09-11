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
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link
              to="/equipment"
              className="group inline-flex items-center gap-2 px-4 py-2 border border-border bg-white text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              <Icon
                name="ArrowLeft"
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Назад в каталог
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
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

      {item.components && (
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <div className="eyebrow-muted mb-6">Состав комплекса</div>
                <div className="border border-border">
                  {item.components.map((c, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center gap-4 px-4 py-3 border-b border-border last:border-0 odd:bg-muted/30"
                    >
                      <span className="text-sm">{c.name}</span>
                      <span className="font-mono-tech text-sm text-muted-foreground whitespace-nowrap">
                        {c.qty} шт
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {item.terms && (
                <div>
                  <div className="eyebrow-muted mb-6">Условия поставки</div>
                  <div className="bg-primary text-white p-7">
                    {item.terms.map((t, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-baseline gap-4 py-2.5 border-b border-white/15 last:border-0"
                      >
                        <span className="text-sm text-white/75">{t.label || '\u00A0'}</span>
                        <span className="font-mono-tech font-bold text-right">{t.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Состав комплектации меняется в зависимости от технического задания —
                    пришлите ТЗ, и мы подготовим расчёт под ваше изделие.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {item.modules && (
        <section className="py-14 bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="eyebrow-muted mb-10">Оборудование в составе комплекса</div>
            <div className="space-y-10">
              {item.modules.map((m, idx) => (
                <div key={idx} className="bg-white border border-border p-6 md:p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {m.image && (
                      <div className="aspect-[4/3] bg-muted/50 border border-border/60 overflow-hidden flex items-center justify-center p-4">
                        <img
                          src={m.image}
                          alt={m.title}
                          loading="lazy"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                    <div className={m.image ? 'lg:col-span-2' : 'lg:col-span-3'}>
                      <h3 className="text-xl font-bold mb-1">{m.title}</h3>
                      {m.subtitle && (
                        <p className="text-sm text-muted-foreground mb-5">{m.subtitle}</p>
                      )}
                      {m.text && (
                        <p className="text-sm leading-relaxed text-muted-foreground mb-5">
                          {m.text}
                        </p>
                      )}
                      {m.specs && (
                        <div className="grid sm:grid-cols-2 gap-x-8">
                          {m.specs.map((s, i) => (
                            <div
                              key={i}
                              className="flex justify-between gap-3 text-sm border-b border-border/60 py-1.5"
                            >
                              <span className="text-muted-foreground">{s.label}</span>
                              <span className="font-medium text-right">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {m.list && (
                        <div
                          className={
                            m.list.length === 1
                              ? 'mt-6'
                              : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'
                          }
                        >
                          {m.list.map((l, i) => (
                            <div key={i}>
                              <div className="font-bold text-sm mb-2">{l.title}</div>
                              <ul
                                className={
                                  m.list!.length === 1
                                    ? 'grid sm:grid-cols-2 gap-x-8 gap-y-2'
                                    : 'space-y-1.5'
                                }
                              >
                                {l.items.map((li, k) => (
                                  <li
                                    key={k}
                                    className="flex gap-2 text-sm text-muted-foreground leading-snug"
                                  >
                                    <Icon
                                      name="Check"
                                      size={14}
                                      className="text-secondary flex-shrink-0 mt-0.5"
                                    />
                                    {li}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Обсудим вашу задачу</h2>
            <p className="text-lg text-white/90 mb-8">
              Пришлите техническое задание — рассчитаем решение под ваше изделие,
              изготовим, смонтируем и запустим
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

      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Link
            to="/equipment"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary hover:text-secondary transition-colors"
          >
            <Icon
              name="ArrowLeft"
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Вернуться в каталог оборудования
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EquipmentDetail;