import React from 'react';
import { TextRoll } from './TextRoll';

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = ''
}) {
  const isDark = theme === 'dark';
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {subtitle && (
        <span
          className={`text-xs uppercase tracking-[0.35em] font-semibold mb-3 ${
            isDark ? 'text-[#B08D57]' : 'text-[#8C6D46]'
          }`}
        >
          <TextRoll>{subtitle}</TextRoll>
        </span>
      )}
      {title && (
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.18] tracking-wide max-w-4xl ${
            isDark ? 'text-white' : 'text-[#1F1F1F]'
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-4 text-sm md:text-base leading-relaxed max-w-3xl ${
            isDark ? 'text-[#A0A0A0]' : 'text-[#6F6F6F]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
