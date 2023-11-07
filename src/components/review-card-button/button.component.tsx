import React from 'react';
import './button.style.scss';

type Props = {
  children: React.ReactNode;
  buttonType: 'inline' | 'cta';
  className?: string;
  mouseHoverMessage?: never;
  mouseLeaveMessage?: never;
};

const Button = ({ children, buttonType, className = '' }: Props) => {
  if (buttonType === 'inline')
    return <button className={`btn-inline ${className}`}> {children}</button>;

  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
