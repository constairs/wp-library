import React, { useMemo } from 'react';
import cn from 'classnames';
import css from './styles.scss';

interface IButtonProps {
  children: React.ReactNode | React.ReactNode[];
  appearance?: 'base' | 'ghost' | 'bevel';
  inversed?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  appearance = 'base',
  inversed = false,
  onClick,
  ...props
}) => {
  const appearanceClass = useMemo(() => {
    if (inversed) {
      return `btn-${appearance}-inversed`;
    }

    return `btn-${appearance}`;
  }, [appearance,  inversed]);

  return (
    <button
      className={cn([
        css.btn,
        css[appearanceClass]
      ])}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
