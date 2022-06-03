import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from './Switch';

export default {
  title: 'Example/Switch',
  component: Switch,
  argTypes: {
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <>
    <Switch {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'default'
};
