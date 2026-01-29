import { useState } from 'react';
import func2url from '../../backend/func2url.json';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7 '
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedContact, setCopiedContact] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

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

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Заявка с сайта от ${formData.name}`);
    const body = encodeURIComponent(
      `Имя: ${formData.name}\n` +
      `Телефон: ${formData.phone}`
    );
    window.location.href = `mailto:itc2555888@mail.ru?subject=${subject}&body=${body}`;
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
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Ошибка отправки заявки');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Ошибка соединения с сервером. Попробуйте позже или используйте кнопку "Отправить через почту".');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyContact = (text: string, type: 'email' | 'phone', e: React.MouseEvent) => {
    navigator.clipboard.writeText(text).then(() => {
      // Отправляем событие в Яндекс.Метрику
      if (window.ym) {
        window.ym(98703835, 'reachGoal', type === 'email' ? 'copy_email' : 'copy_phone');
      }
      // Сохраняем позицию мыши
      setTooltipPosition({ x: e.clientX, y: e.clientY });
      // Показываем уведомление
      setCopiedContact(text);
      setTimeout(() => setCopiedContact(null), 3000);
    });
  };

  const handleMessengerClick = (messengerName: string) => {
    // Отправляем событие в Яндекс.Метрику
    if (window.ym) {
      window.ym(98703835, 'reachGoal', 'messenger_click');
    }
  };

  const contactInfoTop = [
    {
      icon: 'Mail',
      title: 'Email',
      details: ['itc2555888@mail.ru', 'itcsibiri@yandex.ru'],
      type: 'email' as const
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      details: ['8-905-975-58-88', '8-913-532-28-88', '8-391-2-555-888', '8-391-2-502-888'],
      type: 'phone' as const
    },
    {
      icon: 'MessageCircle',
      title: 'Мессенджеры',
      links: [
        { name: 'Telegram', url: 'https://t.me/itc_sibiri' },
        { name: 'MAX', url: 'https://max.ru/u/f9LHodD0cOKAHGAE7Y0G1ri2SRJxylc6dJrLbQXiPFHGUVdQuyddDLO_RFc' },
        { name: 'Вконтакте', url: 'https://vk.com/itc_sibiri' }
      ],
      type: null
    }
  ];

  const addressInfo = {
    icon: 'MapPin',
    title: 'Адрес',
    details: '660020, Красноярский край, г. Красноярск, ул. Дудинская, д. 5',
    type: null
  };

  const companyInfo = [
    { label: 'Полное наименование', value: 'Общество с ограниченной ответственностью «Инженерно-технологический центр Сибири»' },
    { label: 'Сокращенное наименование', value: 'ООО «ИТЦ Сибири»' },
    { label: 'ИНН / КПП', value: '2465360948 / 246501001' },
    { label: 'ОГРН', value: '1242400009378' },
    { label: 'Юридический адрес', value: '660020, Красноярский край, г. Красноярск, ул. Дудинская, д. 5' }
  ];

  const bankInfo = [
    { label: 'Наименование банка', value: 'ФИЛИАЛ «НОВОСИБИРСКИЙ» АО «АЛЬФА-БАНК»' },
    { label: 'БИК', value: '045004774' },
    { label: 'Расчетный счет', value: '40702810223270005573' },
    { label: 'Корреспондентский счет', value: '30101810600000000774' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center min-h-[300px] md:min-h-[400px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-base md:text-xl text-white/90">
              Готовы обсудить ваш проект и предложить оптимальное решение. 
              Свяжитесь с нами удобным способом
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {copiedContact && (
            <div 
              className="fixed z-50 animate-fade-in pointer-events-none"
              style={{ 
                left: `${tooltipPosition.x}px`, 
                top: `${tooltipPosition.y - 60}px`,
                transform: 'translateX(-50%)'
              }}
            >
              <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap">
                <Icon name="Check" size={18} />
                <span className="font-medium text-sm">Скопировано: {copiedContact}</span>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {contactInfoTop.map((contact, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-8 text-center min-h-[280px] lg:min-h-0 flex flex-col">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{contact.title}</h3>
                  <div className="flex-1">
                  {contact.details?.map((detail, idx) => (
                    <p 
                      key={idx} 
                      className={contact.type ? "text-muted-foreground cursor-pointer hover:text-primary transition-colors" : "text-muted-foreground"}
                      onClick={(e) => contact.type && handleCopyContact(detail, contact.type, e)}
                      title={contact.type ? "Нажмите, чтобы скопировать" : undefined}
                    >
                      {detail}
                    </p>
                  ))}
                  {contact.links?.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => handleMessengerClick(link.name)}
                    >
                      {link.name}
                    </a>
                  ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Оставьте заявку</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте свои контакты, и наш специалист свяжется с вами в ближайшее время
              </p>
              
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-8 h-full">
              <Card className="hover-scale flex-1">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={addressInfo.icon as any} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{addressInfo.title}</h3>
                  </div>
                  <p className="text-muted-foreground flex-1">
                    {addressInfo.details}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 flex-1">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-6">Режим работы</h3>
                  <div className="space-y-4 text-base flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-center gap-8">
                      <span className="font-medium">Понедельник - Пятница:</span>
                      <span className="font-bold text-lg">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center gap-8">
                      <span className="font-medium">Суббота - Воскресенье:</span>
                      <span className="font-bold text-lg">Выходной</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6">Банковские реквизиты</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {bankInfo.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <span className="text-sm text-muted-foreground">{item.label}:</span>
                        <span className="text-sm font-medium md:col-span-2">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Реквизиты компании</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {companyInfo.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <span className="text-sm text-muted-foreground">{item.label}:</span>
                        <span className="text-sm font-medium md:col-span-2">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Как нас найти</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=92.895520%2C56.025889&z=17&pt=92.895520,56.025889,pm2rdm"
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'relative' }}
              title="Карта офиса ИТЦ Сибири"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;