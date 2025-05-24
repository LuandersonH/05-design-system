import { Text, TextProps } from '@lh-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react/*'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolore, nesciunt beatae odio dolores dignissimos, autem illo commodi sint possimus ullam quas! Ducimus magnam voluptatem eaque. Perspiciatis ipsam cumque fuga.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    variants: 'xxs',
  },
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
