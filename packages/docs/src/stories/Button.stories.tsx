import { Button, type ButtonProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: { size: 'small' },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
