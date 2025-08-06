import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error = false, ...props }, ref) => {
    const baseClasses = 'w-full bg-gray-100 rounded-lg py-2 px-4 text-sm md:text-base transition-all duration-200 ease-in-out focus:outline-none placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const stateClasses = error
      ? 'border-2 border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500'
      : 'border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white';
    
    const combinedClasses = [
      baseClasses,
      stateClasses,
      className
    ].filter(Boolean).join(' ');

    return (
      <input
        ref={ref}
        className={combinedClasses}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;