import React from 'react';
import './form.style.scss';

type Props = {
  children: React.ReactNode;
};

const Form = ({ children }: Props) => {
  return (
    <form action="" className="search">
      {children}
    </form>
  );
};

export default Form;
