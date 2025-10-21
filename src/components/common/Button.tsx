import { Button as TamaguiButton, styled } from 'tamagui'

/**
 * Primary action button
 * Material You primary button with proper color scheme
 */
export const PrimaryButton = styled(TamaguiButton, {
  backgroundColor: '$primary',
  color: '$onPrimary',
  borderRadius: '$5',
  paddingHorizontal: '$5',
  paddingVertical: '$3',
  fontSize: 14,
  fontWeight: '600',
  letterSpacing: 0.5,
  hoverStyle: {
    backgroundColor: '$primary',
    opacity: 0.9,
  },
  pressStyle: {
    backgroundColor: '$primary',
    opacity: 0.8,
  },
})
