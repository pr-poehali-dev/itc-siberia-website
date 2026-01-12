import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Все проекты' },
    { id: 'industrial', label: 'Промышленные объекты' },
    { id: 'constructions', label: 'Металлоконструкции' },
    { id: 'engineering', label: 'Инженерные системы' }
  ];

  const projects = [
    {
      image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/45edd316-9ba0-4379-b31f-685fa4060cfb.jpg',
      title: 'Производственный комплекс "Сибметалл"',
      category: 'industrial',
      categoryLabel: 'Промышленное строительство',
      year: '2024',
      description: 'Проектирование и строительство производственного комплекса площадью 3500 кв.м',
      scope: 'Каркас здания, кровельные конструкции, монтаж'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/799132a0-a086-466a-9c31-d66a17d47c94.jpg',
      title: 'Складской комплекс "Логистика+"',
      category: 'constructions',
      categoryLabel: 'Металлоконструкции',
      year: '2023',
      description: 'Изготовление и монтаж металлоконструкций для складского комплекса',
      scope: 'Несущие конструкции, фермы, балки'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/45022743-ed20-49de-9af3-bcb967fb5e39.jpg',
      title: 'Административное здание ТЦ "Форум"',
      category: 'engineering',
      categoryLabel: 'Инженерные системы',
      year: '2023',
      description: 'Проектирование и монтаж инженерных систем здания',
      scope: 'Вентиляция, отопление, электроснабжение'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/45edd316-9ba0-4379-b31f-685fa4060cfb.jpg',
      title: 'Завод по переработке "ЭкоТех"',
      category: 'industrial',
      categoryLabel: 'Промышленное строительство',
      year: '2022',
      description: 'Строительство завода под ключ с полным циклом работ',
      scope: 'Проектирование, металлоконструкции, монтаж'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/799132a0-a086-466a-9c31-d66a17d47c94.jpg',
      title: 'Ангарный комплекс "СпецТех"',
      category: 'constructions',
      categoryLabel: 'Металлоконструкции',
      year: '2022',
      description: 'Производство и монтаж быстровозводимых ангаров',
      scope: 'Каркасные конструкции, ворота, утепление'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/45022743-ed20-49de-9af3-bcb967fb5e39.jpg',
      title: 'Модернизация цеха "ПромМаш"',
      category: 'engineering',
      categoryLabel: 'Инженерные системы',
      year: '2021',
      description: 'Реконструкция производственного цеха с модернизацией систем',
      scope: 'Усиление конструкций, новые системы'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">
              Портфолио
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Реализованные проекты
            </h1>
            <p className="text-xl text-white/90">
              Примеры наших работ в различных областях промышленного строительства. 
              Более 500 успешно завершенных проектов
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeFilter === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(cat.id)}
                className={activeFilter === cat.id ? 'bg-primary' : ''}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    {project.year}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge className="mb-2 bg-white/20 text-white border-0">
                      {project.categoryLabel}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="font-medium text-primary">Объем работ:</span>
                    <span className="text-muted-foreground">{project.scope}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Проекты в этой категории скоро появятся
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Завершенных проектов', icon: 'Briefcase' },
              { number: '15', label: 'Лет успешной работы', icon: 'Calendar' },
              { number: '95%', label: 'Довольных клиентов', icon: 'ThumbsUp' }
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
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

export default Portfolio;
