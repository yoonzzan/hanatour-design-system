import React from 'react';

type BadgeVariant = 'premium' | 'active' | 'eco' | 'friendly' | 'urban' | 'soft' | 'default';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  className = '',
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-ht-pill text-xs font-semibold';
  
  const variantStyles = {
    premium: 'bg-ht-premium-purple text-ht-white',
    active: 'bg-ht-active-purple text-ht-white',
    eco: 'bg-ht-eco-mint text-ht-text-primary',
    friendly: 'bg-ht-friendly-purple text-ht-white',
    urban: 'bg-ht-urban-purple text-ht-white',
    soft: 'bg-ht-soft-purple text-ht-white',
    default: 'bg-ht-bg-subtle text-ht-text-secondary',
  };

  const classes = [
    baseStyles,
    variantStyles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
