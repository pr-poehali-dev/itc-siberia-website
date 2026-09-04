import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  updated?: string;
  children: ReactNode;
}

export const LegalSection = ({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="mb-10">
    <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-foreground [&_strong]:font-semibold">
      {children}
    </div>
  </div>
);

export const LegalLayout = ({ title, subtitle, updated, children }: LegalLayoutProps) => (
  <>
    <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-3">{title}</h1>
          {subtitle && <p className="text-sm md:text-lg text-white/90">{subtitle}</p>}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>

          {updated && (
            <p className="text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
              Редакция от {updated}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  </>
);
