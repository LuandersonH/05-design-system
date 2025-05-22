import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    '../src/pages/*.mdx',
    '../src/pages/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  docs: {
    autodocs: true,
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      return mergeConfig(config, {
        base: '/05-design-system/',
        build: {
          manifest: true,
          assetsDir: 'assets',
        },
      });
    }
    return config;
  },
};

export default config;
