import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    "../src/pages/*.mdx", 
    "../src/pages/**/*.mdx", 
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  docs: {
    autodocs: true, 
  },

  // Aqui vem a função para ajustar o config do Vite
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system/';
    }
    return config;
  },
};

export default config;
