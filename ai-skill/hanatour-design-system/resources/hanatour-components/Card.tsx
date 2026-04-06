import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  className = '',
  hoverable = false,
  children,
  ...props
}: CardProps) {
  const baseStyles = 'bg-ht-white rounded-ht-lg border border-ht-light-gray overflow-hidden shadow-ht-card transition-shadow duration-300';
  const hoverStyles = hoverable ? 'hover:shadow-ht-card-hover hover:-translate-y-1' : '';

  const classes = [
    baseStyles,
    hoverStyles,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
