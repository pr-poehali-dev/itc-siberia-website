import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

const ConsentCheckbox = ({ checked, onChange, id = 'consent' }: ConsentCheckboxProps) => (
  <div className="flex items-start gap-2.5">
    <Checkbox
      id={id}
      checked={checked}
      onCheckedChange={(v) => onChange(v === true)}
      className="mt-0.5 flex-shrink-0"
      required
    />
    <label
      htmlFor={id}
      className="text-xs text-muted-foreground leading-relaxed cursor-pointer select-none"
    >
      Я даю{' '}
      <Link
        to="/data-consent"
        target="_blank"
        className="text-primary hover:underline"
        onClick={(e) => e.stopPropagation()}
      >
        согласие на обработку персональных данных
      </Link>{' '}
      и принимаю{' '}
      <Link
        to="/privacy-policy"
        target="_blank"
        className="text-primary hover:underline"
        onClick={(e) => e.stopPropagation()}
      >
        Политику конфиденциальности
      </Link>
    </label>
  </div>
);

export default ConsentCheckbox;
