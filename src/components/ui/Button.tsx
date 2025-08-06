import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'default' | 'sm';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'default', className = '', type = 'button', onClick, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:bg-opacity-90 focus:ring-blue-500 active:bg-blue-800',
      secondary: 'border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500 active:bg-gray-100',
      text: 'text-blue-600 bg-transparent hover:bg-blue-50 hover:text-blue-700 focus:ring-blue-500 active:bg-blue-100'
    };
    
    const sizeClasses = {
      default: 'px-4 py-2 text-sm md:px-6 md:py-3 md:text-base',
      sm: 'px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm'
    };
    
    const combinedClasses = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;