import { themes } from '@storybook/theming';
import cyberTheme from './cyber-theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...cyberTheme },
    light: { ...themes.light }
  },
  docs: {
    theme: cyberTheme
  }
}