import { Text as TamaguiText, styled } from 'tamagui'

/**
 * Standard body text component
 * Default styling for regular content text
 */
export const BodyText = styled(TamaguiText, {
  color: '$onSurface',
  fontSize: 16,
  lineHeight: 24,
  letterSpacing: 0.15,
})

/**
 * Secondary body text component
 * Slightly muted text for less important content
 */
export const SecondaryText = styled(TamaguiText, {
  color: '$onSurfaceVariant',
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.25,
})

/**
 * Primary container text component
 * Text styled for use on primary container backgrounds
 */
export const PrimaryContainerText = styled(TamaguiText, {
  color: '$onPrimaryContainer',
  fontSize: 16,
  lineHeight: 24,
  letterSpacing: 0.15,
})
