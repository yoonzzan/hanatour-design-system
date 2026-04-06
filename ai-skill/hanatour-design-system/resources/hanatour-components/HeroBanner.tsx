import React from 'react';

type HeroVariant = 'default' | 'premium' | 'light';

export interface HeroBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: HeroVariant;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function HeroBanner({
  className = '',
  variant = 'default',
  title,
  subtitle,
  align = 'center',
  children,
  ...props
}: HeroBannerProps) {
  const baseStyles = 'w-full px-8 py-16 md:py-24 rounded-ht-xl flex flex-col justify-center';
  
  const alignStyles = {
    left: 'items-start text-left',
    center: 'items-center text-center'
  };

  const variantStyles = {
    // Purple to Mint gradient
    default: 'bg-gradient-to-br from-ht-master-purple to-ht-master-mint text-ht-white',
    // Premium dark gradient
    premium: 'bg-gradient-to-br from-ht-premium-purple to-ht-master-purple text-ht-white',
    // Light mint gradient
    light: 'bg-gradient-to-br from-ht-tint-mint-1 to-ht-tint-purple-1 text-ht-master-purple'
  };

  const classes = [
    baseStyles,
    alignStyles[align],
    variantStyles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl font-medium opacity-90 mb-8 max-w-2xl">
          {subtitle}
        </p>
      )}
      {children && (
        <div className="mt-4 w-full max-w-md">
          {children}
        </div>
      )}
    </div>
  );
}
