import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import func2url from '../../backend/func2url.json';
import ConsentCheckbox from '@/components/legal/ConsentCheckbox';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '+7 ' });
  const [consent, setConsent] = useState(false);
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
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

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
    { value: '1500+м²', label: 'Производственных\nплощадей' },
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
    if (!consent) {
      setSubmitStatus('error');
      setErrorMessage('Необходимо дать согласие на обработку персональных данных');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    try {
      const response = await fetch(func2url['contact-form'], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          consent: true,
          consent_source: 'форма на главной странице'
        })
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '+7 ' });
        setConsent(false);
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

      <section className="relative pt-40 md:pt-44 pb-0 bg-primary tech-grid-dark overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center pb-12">
            <div className="text-white space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />
                <span className="eyebrow">Надежный партнер с 2013 года</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
                Инженерные решения<br />
                <span className="text-secondary">для промышленности</span>
              </h1>
              <p className="text-sm md:text-lg text-white/65 leading-relaxed max-w-xl">
                Полный цикл проектирования, производства металлоконструкций и решение инженерных технологический задач. 
                От идеи до реализации под ключ.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/85 text-secondary-foreground px-8"
                >
                  <Link to="/services">
                    Наши услуги
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button 
                  onClick={() => setIsDialogOpen(true)}
                  size="lg" 
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white hover:text-primary hover:border-white px-8"
                >
                  Оставить заявку
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in group">
              <div className="relative overflow-hidden h-[320px] md:h-[440px] border border-white/15">
                <img 
                  src={images[currentImage].url}
                  alt={images[currentImage].alt}
                  width="640"
                  height="440"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-primary/80 hover:bg-secondary hover:text-secondary-foreground text-white flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all"
                  aria-label="Предыдущее изображение"
                >
                  <Icon name="ChevronLeft" size={22} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-primary/80 hover:bg-secondary hover:text-secondary-foreground text-white flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all"
                  aria-label="Следующее изображение"
                >
                  <Icon name="ChevronRight" size={22} />
                </button>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-white/80">
                    {String(currentImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                  </span>
                  <div className="flex gap-1.5">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-0.5 transition-all ${
                          index === currentImage ? 'bg-secondary w-6' : 'bg-white/40 w-3'
                        }`}
                        aria-label={`Перейти к изображению ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`py-6 md:py-8 px-2 md:px-6 ${index !== 0 ? 'md:border-l border-white/12' : ''} ${index % 2 !== 0 ? 'border-l border-white/12 md:border-l' : ''} ${index > 1 ? 'border-t border-white/12 md:border-t-0' : ''}`}
              >
                <div className="font-mono-tech text-2xl md:text-4xl font-semibold text-secondary whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[10px] md:text-xs mt-2 uppercase tracking-[0.1em] leading-tight">
                  {stat.label.replace('\n', ' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-secondary" />
              <span className="eyebrow-muted">Направления</span>
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold leading-tight mb-4">
              Комплексные решения для бизнеса
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Предоставляем полный спектр услуг от проектирования до монтажа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {services.map((service, index) => {
              const serviceUrl = index === 0 ? "/services/inzhiniring" : "/services";
              
              return (
                <Link key={index} to={serviceUrl} className="group bg-white hover:bg-surface transition-colors">
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 border border-border group-hover:border-secondary group-hover:bg-secondary flex items-center justify-center transition-colors">
                        <Icon name={service.icon as any} size={24} className="text-primary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      <span className="font-mono-tech text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-snug">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                    <div className="text-primary flex items-center text-sm font-semibold uppercase tracking-wide">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <div className="eyebrow-muted mb-4">Начнем работу</div>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight">Готовы начать проект?</h2>
              <p className="text-muted-foreground">
                Свяжитесь с нами для консультации и расчета стоимости работ
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/85 text-secondary-foreground">
                <Link to="/contacts">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Все услуги</Link>
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

            <ConsentCheckbox id="consent-home" checked={consent} onChange={setConsent} />

            <div className="flex flex-col gap-3">
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting || !consent}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                <Icon name="Send" size={16} className="ml-2" />
              </Button>

              <Button 
                type="button"
                asChild
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground md:hidden"
              >
                <a href="tel:+79059755888">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Связаться
                </a>
              </Button>
            </div>

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