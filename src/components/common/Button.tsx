import { Button as TamaguiButton, styled } from 'tamagui'

/**
 * Primary action button
 * Material You primary button with proper color scheme
 */
export const PrimaryButton = styled(TamaguiButton, {
  backgroundColor: "primary hover:primary press:primary",
  color: "onPrimary",
  borderRadius: "5",
  paddingHorizontal: "5",
  paddingVertical: "3",
  fontSize: 14,
  fontWeight: '600',
  letterSpacing: 0.5,
  opacity: "hover:0.9 press:0.8"
})
