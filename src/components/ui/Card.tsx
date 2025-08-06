import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, ...props }) => {
  const baseClasses = 'bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 ease-in-out';
  
  const interactiveClasses = onClick 
    ? 'cursor-pointer hover:shadow-2xl hover:scale-105 active:scale-100' 
    : 'hover:shadow-xl';
  
  const combinedClasses = [
    baseClasses,
    interactiveClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;