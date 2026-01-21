import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="block text-gold-600 text-sm font-bold tracking-[0.2em] uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif text-brand-black leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-gold-500 mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};