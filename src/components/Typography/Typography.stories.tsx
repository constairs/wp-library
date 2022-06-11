import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

export default {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography.P {...args}>Съешь ещё этих мягких французских булок, да выпей чаю</Typography.P>
    <Typography.H1 {...args}>Съешь ещё этих мягких французских булок, да выпей чаю</Typography.H1>
  </>
);

export const P = Template.bind({});
P.args = {
  color: 'accent'
};

export const H1 = Template.bind({});
H1.args = {
  color: 'accent'
};
