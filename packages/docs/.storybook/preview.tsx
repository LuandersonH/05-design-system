import React from 'react'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen', // <- ESSENCIAL para remover padding dos wrappers do Storybook
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#121214',
          color: '#FFFFFF',
          padding: '0',
          margin: '0',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
