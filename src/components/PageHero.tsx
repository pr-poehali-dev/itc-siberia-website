import { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="pt-28 md:pt-44 pb-10 md:pb-16 bg-primary tech-grid-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          {children}
          {eyebrow && (
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-secondary" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
          )}
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
  );
};

export default PageHero;