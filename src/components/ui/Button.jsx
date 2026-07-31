import React from 'react';
import { motion } from 'framer-motion';
import { TextRoll } from './TextRoll';

export function Button({
  children,
  href,
  onClick,
  variant = 'brown',
  className = '',
  type = 'button',
  fillEffect = true,
  ...props
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'brown':
        return {
          base: fillEffect
            ? 'bg-[#8C6D46] text-white border border-[#8C6D46]'
            : 'bg-[#8C6D46] text-white border border-[#8C6D46] hover:bg-[#6F5434]',
          fill: 'bg-[#D0C7BC]',
          text: fillEffect ? 'group-hover:text-[#1F1F1F]' : ''
        };
      case 'white':
        return {
          base: fillEffect
            ? 'bg-white text-[#1F1F1F] border border-white'
            : 'bg-white text-[#1F1F1F] border border-white hover:bg-[#F0EAE1]',
          fill: 'bg-[#D0C7BC]',
          text: fillEffect ? 'group-hover:text-[#1F1F1F]' : ''
        };
      case 'transparent-white':
        return {
          base: fillEffect
            ? 'bg-white/20 text-white border border-white/20 backdrop-blur-md'
            : 'bg-white/20 text-white border border-white/20 backdrop-blur-md hover:bg-white/30',
          fill: 'bg-[#D0C7BC]',
          text: fillEffect ? 'group-hover:text-[#1F1F1F]' : ''
        };
      case 'dark':
        return {
          base: fillEffect
            ? 'bg-[#161616] text-white border border-[#161616]'
            : 'bg-[#161616] text-white border border-[#161616] hover:bg-[#333333]',
          fill: 'bg-[#D0C7BC]',
          text: fillEffect ? 'group-hover:text-[#1F1F1F]' : ''
        };
      case 'outline':
        return {
          base: fillEffect
            ? 'bg-transparent text-[#1F1F1F] border border-[#E8E2D8]'
            : 'bg-transparent text-[#1F1F1F] border border-[#E8E2D8] hover:border-[#8C6D46]',
          fill: 'bg-[#D0C7BC]',
          text: fillEffect ? 'group-hover:text-[#1F1F1F]' : ''
        };
      default:
        return {
          base: fillEffect
            ? 'bg-[#8C6D46] text-white border border-[#8C6D46]'
            : 'bg-[#8C6D46] text-white border border-[#8C6D46] hover:bg-[#6F5434]',
          fill: 'bg-[#D0C7BC]',
          text: fillEffect ? 'group-hover:text-[#1F1F1F]' : ''
        };
    }
  };

  const Component = href ? motion.a : motion.button;
  const styles = getVariantStyles();

  return (
    <Component
      initial="initial"
      whileHover="hovered"
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      className={`group relative inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] rounded-[10px] overflow-hidden cursor-pointer transition-colors duration-300 ${styles.base} ${className}`}
      {...props}
    >
      {/* Horizontal Background Fill Layer matching Dekora (optional) */}
      {fillEffect && (
        <motion.span
          variants={{
            initial: { x: '-101%' },
            hovered: { x: '0%' },
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`absolute inset-0 z-0 ${styles.fill}`}
        />
      )}

      {/* Button Text with Kinetic TextRoll on top */}
      <span className={`relative z-10 transition-colors duration-300 ${styles.text}`}>
        {typeof children === 'string' ? (
          <TextRoll>{children}</TextRoll>
        ) : (
          children
        )}
      </span>
    </Component>
  );
}
