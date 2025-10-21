import { YStack, styled } from 'tamagui'

/**
 * Backdrop overlay for mobile drawer
 * Shows semi-transparent dark overlay when drawer is open on mobile
 */
export const DrawerBackdrop = styled(YStack, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  display: 'none',
  '$gtSm': {
    display: 'none',
  },
  variants: {
    visible: {
      true: {
        display: 'flex',
      },
    },
  } as const,
})
