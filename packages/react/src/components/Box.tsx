import { styled } from '../styles'
import type { VariantProps } from '@stitches/react'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',

  //   width: '100%',
  //   maxWidth: ''
})

export type BoxProps = VariantProps<typeof Box>

// Para aparecer td:
// import { ComponentProps } from 'react'
// export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
