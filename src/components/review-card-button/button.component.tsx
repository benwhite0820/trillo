import React from 'react';
import './button.style.scss';

type Props = {
  children: React.ReactNode;
  buttonType: 'inline';
  className?: string;
};

const Button = ({ children, buttonType, className = '' }: Props) => {
  if (buttonType === 'inline')
    return <button className={`btn-inline ${className}`}> {children}</button>;
};

export default Button;
