import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import func2url from '../../backend/func2url.json';

const FloatingPhoneButton = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7 '
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (location.pathname === '/contacts') {
    return null;
  }

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
          setIsOpen(false);
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
    <>
      <Button
        size="lg"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground p-0 hover:scale-110 transition-transform duration-200"
        aria-label="Связаться с нами"
      >
        <Icon name="Phone" size={24} />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Оставьте заявку</DialogTitle>
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
    </>
  );
};

export default FloatingPhoneButton;
