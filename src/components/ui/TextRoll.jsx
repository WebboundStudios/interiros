import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const STAGGER = 0.025;

export const TextRoll = ({
  children,
  className,
  center = false,
  active = false,
}) => {
  if (typeof children !== 'string') {
    return <span className={className}>{children}</span>;
  }

  const letters = children.split('');

  return (
    <span
      className={cn('relative inline-flex flex-nowrap whitespace-nowrap overflow-hidden align-bottom leading-tight select-none pointer-events-none', className)}
    >
      {/* Default Row (rolls up to -100%) */}
      <span className="inline-flex flex-nowrap whitespace-nowrap">
        {letters.map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (letters.length - 1) / 2)
            : STAGGER * i;

          const isDevanagari = /[\u0900-\u097F]/.test(l);

          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: '-100%' },
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
                delay,
              }}
              className={cn('inline-block', isDevanagari && 'font-arya font-bold px-[0.5px]')}
              key={i}
            >
              {l === ' ' ? '\u00A0' : l}
            </motion.span>
          );
        })}
      </span>

      {/* Duplicate Row (rolls up from 100% to 0%) */}
      <span className="absolute inset-0 inline-flex flex-nowrap whitespace-nowrap">
        {letters.map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (letters.length - 1) / 2)
            : STAGGER * i;

          const isDevanagari = /[\u0900-\u097F]/.test(l);

          return (
            <motion.span
              variants={{
                initial: { y: '100%' },
                hovered: { y: 0 },
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
                delay,
              }}
              className={cn('inline-block', isDevanagari && 'font-arya font-bold px-[0.5px]')}
              key={i}
            >
              {l === ' ' ? '\u00A0' : l}
            </motion.span>
          );
        })}
      </span>
    </span>
  );
};
