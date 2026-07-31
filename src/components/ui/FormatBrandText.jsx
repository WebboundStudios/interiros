import React from 'react';

export function FormatBrandText({ children, className = '' }) {
  if (typeof children !== 'string') return children;
  if (!children.includes('न्वी')) return <span className={className}>{children}</span>;

  const parts = children.split('न्वी');

  return (
    <span className={className}>
      {parts.map((part, idx) => (
        <React.Fragment key={idx}>
          {part}
          {idx < parts.length - 1 && (
            <span className="font-arya font-bold px-[1px] inline-block">न्वी</span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}
