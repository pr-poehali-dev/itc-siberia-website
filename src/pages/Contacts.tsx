import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/send-contact-form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Ошибка отправки заявки');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Не удалось отправить заявку. Проверьте подключение к интернету.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      details: ['660020, Красноярский край, г. Красноярск,', 'ул. Дудинская, д. 5']
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      details: ['8 (391) 2-555-888', '8-905-975-58-88']
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['itc2555888@mail.ru']
    }
  ];

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
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{contact.title}</h3>
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Оставьте заявку</h2>
              <p className="text-muted-foreground mb-8">
                Заполните форму, и наш специалист свяжется с вами в ближайшее время 
                для обсуждения деталей проекта
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
                        placeholder="+7 (___) ___-__-__" 
                        className="w-full" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input 
                        type="email" 
                        placeholder="example@mail.ru" 
                        className="w-full" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Компания</label>
                      <Input 
                        placeholder="Название компании" 
                        className="w-full" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение *</label>
                      <Textarea 
                        placeholder="Опишите ваш проект или задайте вопрос" 
                        rows={5} 
                        className="w-full" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
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

            <div className="space-y-8">
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

              <Card className="bg-muted/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Режим работы</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Понедельник - Пятница:</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Суббота - Воскресенье:</span>
                      <span className="font-medium">Выходной</span>
                    </div>
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