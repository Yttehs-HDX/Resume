import { Card as TamaguiCard, styled } from 'tamagui'

/**
 * Standard elevated card component
 * Material You design with elevation and rounded corners
 */
export const Card = styled(TamaguiCard, {
  backgroundColor: "surfaceContainerHigh",
  padding: "5",
  borderRadius: "4",
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)'
})

/**
 * Primary container card variant
 * Uses primary color scheme for emphasis
 */
export const PrimaryCard = styled(TamaguiCard, {
  backgroundColor: "primaryContainer",
  padding: "5",
  borderRadius: "4",
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)'
})
