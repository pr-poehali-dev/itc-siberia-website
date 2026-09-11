import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface BackLinkProps {
  to?: string;
  label?: string;
  parentLabel?: string;
  currentLabel?: string;
}

const BackLink = ({
  to = '/services',
  label = 'Назад к услугам',
  parentLabel = 'Услуги',
  currentLabel
}: BackLinkProps) => (
  <section className="border-b border-border bg-muted/30">
    <div className="container mx-auto px-4 py-3">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link
          to={to}
          className="group inline-flex items-center gap-2 px-4 py-2 border border-border bg-white text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
        >
          <Icon
            name="ArrowLeft"
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          {label}
        </Link>
        {currentLabel && (
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link to={to} className="hover:text-primary transition-colors">
              {parentLabel}
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-primary font-medium">{currentLabel}</span>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default BackLink;
