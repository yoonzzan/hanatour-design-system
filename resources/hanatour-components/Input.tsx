import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, fullWidth = false, ...props }, ref) => {
    const baseStyles = 'w-full px-4 py-3 rounded-ht-md border border-ht-light-gray bg-ht-white text-base transition-colors focus:outline-none focus:ring-2 focus:ring-ht-master-purple focus:border-transparent placeholder-ht-medium-gray disabled:bg-ht-bright-gray disabled:cursor-not-allowed';
    const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';

    return (
      <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="text-sm font-semibold text-ht-text-primary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`${baseStyles} ${errorStyles} ${className}`.trim()}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 font-medium">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
