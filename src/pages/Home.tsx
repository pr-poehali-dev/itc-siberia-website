import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import func2url from '../../backend/func2url.json';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '+7 ' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const images = [
    { url: 'https://cdn.poehali.dev/files/110.jpg', alt: 'Токарные работы' },
    { url: 'https://cdn.poehali.dev/files/210.jpg', alt: 'Токарные изделия' },
    { url: 'https://cdn.poehali.dev/files/17.jpg', alt: 'Промышленные эстакады' },
    { url: 'https://cdn.poehali.dev/files/57.jpg', alt: 'Технологические металлоконструкции' },
    { url: 'https://cdn.poehali.dev/files/67.jpg', alt: 'Технологические площадки' },
    { url: 'https://cdn.poehali.dev/files/68.jpg', alt: 'Сварные профили' },
    { url: 'https://cdn.poehali.dev/files/66.jpg', alt: 'Металлический каркас на строительстве' },
    { url: 'https://cdn.poehali.dev/files/56.jpg', alt: 'Строительные металлоконструкции' },
    { url: 'https://cdn.poehali.dev/files/63.jpg', alt: 'Сварочные работы' },
    { url: 'https://cdn.poehali.dev/files/62.jpg', alt: 'Производственный процесс' },
    { url: 'https://cdn.poehali.dev/files/18.jpg', alt: 'Сварные фермы' },
    { url: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/919d6fae-f726-4357-a8d0-36b93d621de4.jpg', alt: 'Сварочные работы' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const services = [
    {
      icon: 'Cog',
      title: 'Решение инжиниринговых задач',
      description: 'Разработка и подбор оборудования для решения ваших технологических задач производства'
    },
    {
      icon: 'Factory',
      title: 'Производство металлоконструкций',
      description: 'Изготовление металлоконструкций любой сложности с соблюдением всех стандартов качества'
    },
    {
      icon: 'Wrench',
      title: 'Монтажные работы',
      description: 'Профессиональный монтаж металлоконструкций на объекте заказчика с соблюдением всех стандартов качества и безопасности'
    }
  ];

  const stats = [
    { value: '500+', label: 'Завершенных\nпроектов' },
    { value: '3000+м²', label: 'Производственных\nплощадей' },
    { value: '60+', label: 'Сотрудников' },
    { value: '13', label: 'Лет на\nрынке' }
  ];

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 0) return '+7 ';
    if (digits.length <= 1) return '+7 ';
    let formatted = '+7';
    if (digits.length > 1) formatted += ' ' + digits.slice(1, 4);
    if (digits.length > 4) formatted += ' ' + digits.slice(4, 7);
    if (digits.length > 7) formatted += ' ' + digits.slice(7, 9);
    if (digits.length > 9) formatted += ' ' + digits.slice(9, 11);
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.length < 3) {
      setFormData({ ...formData, phone: '+7 ' });
      return;
    }
    const digits = input.replace(/\D/g, '');
    if (digits.length <= 11) {
      setFormData({ ...formData, phone: formatPhoneNumber(input) });
    }
  };

  const validatePhone = () => {
    const digits = formData.phone.replace(/\D/g, '');
    return digits.length === 11;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone()) {
      setSubmitStatus('error');
      setErrorMessage('Введите корректный номер телефона в формате +7 XXX XXX XX XX');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    try {
      const response = await fetch(func2url['contact-form'], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '+7 ' });
        setTimeout(() => {
          setIsDialogOpen(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Ошибка отправки заявки');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Ошибка соединения с сервером. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white space-y-4 md:space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground border-0 text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 hover:bg-secondary/90">
                Надежный партнер с 2013 года
              </Badge>
              <h1 className="text-2xl md:text-5xl font-bold leading-snug md:leading-tight">
                Инженерные решения для промышленности
              </h1>
              <p className="text-sm md:text-xl text-white/90 leading-relaxed">
                Полный цикл проектирования, производства металлоконструкций и решение инженерных технологический задач. 
                От идеи до реализации под ключ.
              </p>
              <div className="flex gap-4 justify-start pt-2 md:pt-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 md:px-12 text-sm md:text-base"
                >
                  <Link to="/services">
                    Наши услуги
                  </Link>
                </Button>
                <Button 
                  onClick={() => setIsDialogOpen(true)}
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 md:px-12 text-sm md:text-base"
                >
                  Оставить заявку
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 md:flex md:flex-nowrap md:justify-start md:items-start md:gap-x-10 pt-6 md:pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center md:items-start">
                    <div className="text-xl md:text-4xl font-bold text-secondary whitespace-nowrap">{stat.value}</div>
                    <div className="text-white/80 text-[9px] md:text-sm mt-1 text-center md:text-left leading-tight">{stat.label.replace('\n', ' ')}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in group max-w-lg mx-auto">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[350px] md:h-[500px]">
                <img 
                  src={images[currentImage].url}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Предыдущее изображение"
                >
                  <Icon name="ChevronLeft" size={24} className="text-primary" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Следующее изображение"
                >
                  <Icon name="ChevronRight" size={24} className="text-primary" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                      aria-label={`Перейти к изображению ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Комплексные решения для бизнеса</h2>
            <p className="text-muted-foreground text-lg">
              Предоставляем полный спектр услуг от проектирования до монтажа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale flex flex-col">
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow min-h-[3rem]">{service.description}</p>
                  <Button asChild variant="link" className="p-0 text-primary self-start">
                    <Link to={index === 0 ? "/services/inzhiniring" : "/services"}>
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Свяжитесь с нами для консультации и расчета стоимости работ
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contacts">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Оставьте заявку</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения вашего проекта.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                <Icon name="CheckCircle" size={16} className="inline mr-2" />
                Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                <Icon name="AlertCircle" size={16} className="inline mr-2" />
                {errorMessage}
              </div>
            )}
            
            <div>
              <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
              <Input 
                placeholder="Иван Иванов" 
                className="w-full" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Телефон *</label>
              <Input 
                type="tel" 
                placeholder="+7 XXX XXX XX XX" 
                className="w-full" 
                value={formData.phone}
                onChange={handlePhoneChange}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              <Icon name="Send" size={16} className="ml-2" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;