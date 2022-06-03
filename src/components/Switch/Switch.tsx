import React from 'react';
import css from './Switch.scss';

interface ISwitchProps {
  id?: string;
  name: string;
  labelText?: string;
  withStateText?: boolean;
  checked?: boolean;
  onChange(): void;
}

export const Switch: React.FC<ISwitchProps> = ({
  id = '',
  name,
  withStateText = false,
  checked = false,
  onChange,
}) => (
    <div className={css.switch} id={id}>
      <label htmlFor={name} className={css.switchState}>{withStateText && (checked ? 'on' : 'off')}</label>
      <label htmlFor={name} className={css.switchLabel}>
        <input id={name} name={name} type="checkbox" checked={checked} onChange={onChange} />
        <span className={css.switchToggler}></span>
        <span className={css.switchToggle}></span>
      </label>
    </div>
  );
