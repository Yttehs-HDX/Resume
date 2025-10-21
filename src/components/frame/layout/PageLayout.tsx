import { YStack, styled } from 'tamagui'

/**
 * Page layout container
 * Standard padding and spacing for all pages
 */
export const PageLayout = styled(YStack, {
  flex: 1,
  padding: '$6',
  gap: '$5',
  backgroundColor: '$background',
})
