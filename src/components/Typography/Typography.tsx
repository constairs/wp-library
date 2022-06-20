import React from "react";
import cn from 'classnames';
import { Color } from '../../constants';
import css from './Typography.scss';


type typographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ITypographyProps = {
  children: React.ReactNode | React.ReactNode[];
  color?: typeof Color;
  size?: typographySize;
}

const getClassName = (tag, size, color) => {
  const sizeStyle =  size ? css[`${tag}-${size}`] : css[`${tag}`];
  const colorStlye = css[color];

  return cn([sizeStyle, colorStlye]);
};

export const Typography: {
  P: React.FC<ITypographyProps>,
  H1: React.FC<ITypographyProps>,
} = {
  P: ({ children, size = '', color = Color.MAIN }) => (<p className={getClassName('p', size, color)}>{children}</p>),
  H1: ({ children, size = '', color = Color.MAIN }) => (<h1 className={getClassName('h1', size, color)}>{children}</h1>),
  // H2: ({ children, color }) => (<h2>{children}</h2>),
  // H3: ({ children, color }) => (<h3>{children}</h3>),
  // H4: ({ children, color }) => (<h4>{children}</h4>),
  // H5: ({ children, color }) => (<h5>{children}</h5>),
  // H6: ({ children, color }) => (<h6>{children}</h6>),
};
