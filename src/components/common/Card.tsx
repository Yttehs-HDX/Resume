import { Card as TamaguiCard, styled } from 'tamagui'

/**
 * Standard elevated card component
 * Material You design with elevation and rounded corners
 */
export const Card = styled(TamaguiCard, {
  elevate: true,
  backgroundColor: '$surfaceContainerHigh',
  padding: '$5',
  borderRadius: '$4',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
})

/**
 * Primary container card variant
 * Uses primary color scheme for emphasis
 */
export const PrimaryCard = styled(TamaguiCard, {
  elevate: true,
  backgroundColor: '$primaryContainer',
  padding: '$5',
  borderRadius: '$4',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.12,
  shadowRadius: 4,
})
