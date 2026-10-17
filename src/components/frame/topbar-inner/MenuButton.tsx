import { Button } from 'tamagui'
import { Menu } from 'lucide-react'

interface MenuButtonProps {
  onPress: () => void
}

/**
 * Menu button component for mobile navigation
 * Toggles the drawer open/close on mobile devices
 */
export function MenuButton({ onPress }: MenuButtonProps) {
  return (
    <Button
      size="lg"
      backgroundColor="surfaceContainerHighest hover:surfaceContainerHigh press:surfaceContainer"
      width={48}
      height={48}
      display="flex gtSm:none"
      circular
      onPress={onPress}
      icon={Menu}
      scaleIcon={1.4}
      aria-label="Toggle menu"
    />
  )
}
