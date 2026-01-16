import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const FloatingPhoneButton = () => {
  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground p-0 hover:scale-110 transition-transform duration-200"
      aria-label="Связаться с нами"
    >
      <Link to="/contacts">
        <Icon name="Phone" size={24} />
      </Link>
    </Button>
  );
};

export default FloatingPhoneButton;
