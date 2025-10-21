import { YStack } from 'tamagui'

interface SpacerProps {
  size?: 'small' | 'medium' | 'large'
}

/**
 * Spacer component - Creates vertical spacing
 * Used to add bottom padding to pages
 */
export function Spacer({ size = 'large' }: SpacerProps) {
  const heights = {
    small: '$6',
    medium: '$8',
    large: '$10',
  }

  return <YStack height={heights[size]} flexShrink={0} />
}
