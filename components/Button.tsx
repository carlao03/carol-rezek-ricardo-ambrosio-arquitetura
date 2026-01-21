import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'white';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

// Extended to allow anchor attributes when href is present
type Props = ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button: React.FC<Props> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  onClick,
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 rounded-full font-sans text-sm tracking-widest uppercase font-semibold cursor-pointer select-none no-underline";
  
  const variants = {
    primary: "bg-brand-black text-white hover:bg-gold-600 hover:shadow-lg border border-transparent",
    outline: "bg-transparent text-brand-black border border-brand-black hover:bg-brand-black hover:text-white",
    white: "bg-white text-brand-black hover:bg-gold-500 hover:text-white border border-transparent shadow-md"
  };

  const classes = `${baseStyle} ${variants[variant]} ${className}`;

  // Helper to handle smooth scroll if it's an anchor link to an ID
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) {
      onClick(e as any);
    }
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        onClick={handleAnchorClick}
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes} 
      onClick={onClick}
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {children}
    </button>
  );
};