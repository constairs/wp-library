import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

export default {
  title: 'Example/Typography',
  component: Typography.H1,
  argTypes: {},
} as ComponentMeta<typeof Typography.H1>;

const Template: ComponentStory<typeof Typography.P> = (args) => (
  <>
    <Typography.P {...args}>Съешь ещё этих мягких французских булок, да выпей чаю</Typography.P>
  </>
);

const HTepmplate: ComponentStory<typeof Typography.H1> = (args) => (
  <Typography.H1 {...args}>Съешь ещё этих мягких французских булок, да выпей чаю</Typography.H1>
)

export const P = Template.bind({});
P.args = {
  color: 'accent',
  size: ''
};

export const H1 = HTepmplate.bind({});
H1.args = {
  color: 'main',
  size: 'xs'
};
