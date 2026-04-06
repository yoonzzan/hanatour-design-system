import React from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'default';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
}

export function Alert({
  className = '',
  variant = 'default',
  title,
  children,
  ...props
}: AlertProps) {
  const baseStyles = 'w-full p-4 rounded-ht-md flex flex-col gap-1 border';
  
  const variantStyles = {
    info: 'bg-ht-tint-mint-1 border-ht-tint-mint-3 text-ht-premium-mint',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    default: 'bg-ht-tint-purple-1 border-ht-tint-purple-3 text-ht-premium-purple'
  };

  const classes = [
    baseStyles,
    variantStyles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="alert" {...props}>
      {title && <div className="font-bold">{title}</div>}
      <div className="text-sm opacity-90">{children}</div>
    </div>
  );
}
