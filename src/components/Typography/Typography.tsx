import React from "react";
import cn from 'classnames';
import css from './Typography.scss';

enum Color {
  MAIN = 'main',
  SECOND = 'second',
  ACCENT = 'accent',
  GREEN = 'green',
  DARK = 'dark',
  WHITE = 'white',
}

type typographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TypographyProps {
  children: React.ReactNode | React.ReactNode[];
  color?: typeof Color;
  size?: typographySize;
}

const styling = (tag, size, color) => {
  const sizeStyle =  size ? css[`${tag}-${size}`] : css[`${tag}`];
  const colorStlye = css[color];

  return cn([sizeStyle, colorStlye]);
};

export const Typography = {
  P: ({ children, size = '', color = Color.MAIN }) => (<p className={styling('p', size, color)}>{children}</p>),
  H1: ({ children, size = '', color = Color.MAIN }) => (<h1 className={styling('h1', size, color)}>{children}</h1>),
  H2: ({ children, color }) => (<h2>{children}</h2>),
  H3: ({ children, color }) => (<h3>{children}</h3>),
  H4: ({ children, color }) => (<h4>{children}</h4>),
  H5: ({ children, color }) => (<h5>{children}</h5>),
  H6: ({ children, color }) => (<h6>{children}</h6>),
};
