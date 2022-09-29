import {NextUIProvider} from '@nextui-org/react'
import theme from '../src/theme/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

import React from 'react'

export const decorators = [
  (Story) => (
    <NextUIProvider theme={theme}>
      <Story />
    </NextUIProvider>
  ),
];