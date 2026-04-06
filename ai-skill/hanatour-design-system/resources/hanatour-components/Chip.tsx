import React from 'react';

type ChipVariant = 'filled' | 'outlined';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ChipVariant;
  active?: boolean;
}

export function Chip({
  className = '',
  variant = 'filled',
  active = false,
  children,
  ...props
}: ChipProps) {
  const baseStyles = 'inline-flex items-center px-4 py-1.5 rounded-ht-pill text-sm font-medium transition-colors focus:outline-none';
  
  const filledStyles = active 
    ? 'bg-ht-master-purple text-ht-white' 
    : 'bg-ht-bright-gray text-ht-text-secondary hover:bg-ht-light-gray';
    
  const outlinedStyles = active
    ? 'border border-ht-master-purple text-ht-master-purple bg-ht-tint-purple-1'
    : 'border border-ht-light-gray text-ht-text-secondary hover:border-ht-medium-gray hover:text-ht-text-primary';

  const classes = [
    baseStyles,
    variant === 'filled' ? filledStyles : outlinedStyles,
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
