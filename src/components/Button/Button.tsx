import React from 'react';
import css from './styles.scss';

interface IButtonProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Button: React.FC<IButtonProps> = ({
  children,
  ...props
}) => (
  <button className={css.btn} {...props}>
    {children}
  </button>
);
