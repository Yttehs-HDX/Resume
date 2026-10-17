import { YStack, styled } from 'tamagui'

/**
 * Main drawer container
 * Handles drawer positioning, sliding animation and responsive behavior
 * On mobile: slides in from left
 * On desktop: always visible
 */
export const DrawerContainer = styled(YStack, {
  width: 280,
  height: '100%',
  backgroundColor: "surfaceContainerHigh",
  position: "absolute gtSm:relative",
  left: 0,
  top: 0,
  zIndex: 1000,
  transform: "translateX(-100%) gtSm:translateX(0)",
  transition: "transform 0.3s ease-in-out gtSm:none",
  variants: {
    open: {
      true: {
        transform: 'translateX(0)',
      },
    },
  } as const
})
