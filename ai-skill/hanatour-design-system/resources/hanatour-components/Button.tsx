import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-ht-pill transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = {
    primary: 'bg-ht-master-purple text-ht-white hover:bg-ht-tint-purple-8 hover:shadow-ht-btn-primary',
    secondary: 'bg-transparent text-ht-master-purple border-2 border-ht-master-purple hover:bg-ht-tint-purple-1',
    accent: 'bg-ht-accent-yellow text-ht-master-purple hover:bg-ht-accent-yellow-t1 hover:shadow-ht-btn-cta',
    ghost: 'bg-transparent text-ht-text-secondary hover:bg-ht-bg-subtle hover:text-ht-text-primary'
  };

  const classes = [
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
