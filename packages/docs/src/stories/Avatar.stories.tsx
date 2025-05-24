import { Avatar, AvatarProps } from '@lh-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react/*'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://gru.ifsp.edu.br/images/phocagallery/galeria2/image03_grd.png',
    alt: 'Avatar',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
