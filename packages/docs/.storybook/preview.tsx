import React from 'react'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    }
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
