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
    <section className="pt-28 md:pt-44 pb-10 md:pb-16 bg-primary tech-grid-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-secondary" />
            <span className="eyebrow">Документы</span>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold leading-[1.15] md:leading-[1.12] tracking-tight break-words">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/60 text-sm md:text-lg leading-relaxed mt-5 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <Icon name="ArrowLeft" size={14} />
            На главную
          </Link>

          {updated && (
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-10 pb-6 border-b border-border">
              Редакция от {updated}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  </>
);