import { YStack, styled } from 'tamagui'

/**
 * Drawer content container
 * Scrollable area for navigation items
 */
export const DrawerContent = styled(YStack, {
  flex: 1,
  paddingHorizontal: '$4',
  gap: '$3',
  style: { overflowY: 'auto' },
})
