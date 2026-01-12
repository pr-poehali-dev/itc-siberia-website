import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес офиса',
      details: ['г. Новосибирск, ул. Промышленная, 15', 'Пн-Пт: 9:00 - 18:00']
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      details: ['+7 (383) 123-45-67', '+7 (383) 123-45-68']
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['info@itc-siberia.ru', 'sales@itc-siberia.ru']
    }
  ];

  const departments = [
    {
      name: 'Отдел продаж',
      phone: '+7 (383) 123-45-67',
      email: 'sales@itc-siberia.ru'
    },
    {
      name: 'Технический отдел',
      phone: '+7 (383) 123-45-68',
      email: 'tech@itc-siberia.ru'
    },
    {
      name: 'Бухгалтерия',
      phone: '+7 (383) 123-45-69',
      email: 'accounting@itc-siberia.ru'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">
              Контакты
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-white/90">
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
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                      <Input placeholder="Иван Иванов" className="w-full" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон *</label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" className="w-full" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="example@mail.ru" className="w-full" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Компания</label>
                      <Input placeholder="Название компании" className="w-full" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение *</label>
                      <Textarea 
                        placeholder="Опишите ваш проект или задайте вопрос" 
                        rows={5} 
                        className="w-full" 
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
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
                <h3 className="text-2xl font-bold mb-6">Наши отделы</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-3">{dept.name}</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Phone" size={16} className="text-primary" />
                            <span>{dept.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Mail" size={16} className="text-primary" />
                            <span>{dept.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                      <span className="text-muted-foreground">Суббота:</span>
                      <span className="font-medium">10:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Воскресенье:</span>
                      <span className="font-medium">Выходной</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-primary/90 text-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={32} className="text-secondary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Быстрый ответ</h4>
                      <p className="text-white/90 text-sm">
                        Мы отвечаем на заявки в течение 1 часа в рабочее время
                      </p>
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
          <div className="aspect-video w-full bg-muted rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Карта будет здесь</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
