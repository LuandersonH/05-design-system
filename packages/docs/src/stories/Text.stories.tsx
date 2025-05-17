import { Text, TextProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react/*'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolore, nesciunt beatae odio dolores dignissimos, autem illo commodi sint possimus ullam quas! Ducimus magnam voluptatem eaque. Perspiciatis ipsam cumque fuga.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
