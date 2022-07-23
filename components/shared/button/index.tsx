import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: string | any;
}

const Button: React.FC<IButton> = ({ disabled=false, styles, children, ...props}) => {
  return (
    <button 
      {...props}
      className={`${styles}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;