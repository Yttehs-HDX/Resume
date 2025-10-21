import { Button } from 'tamagui'
import { Menu } from '@tamagui/lucide-icons'

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
      size="$9"
      circular
      backgroundColor="$surfaceContainerHighest"
      width={48}
      height={48}
      display="flex"
      $gtSm={{
        display: 'none',
      }}
      hoverStyle={{
        backgroundColor: '$surfaceContainerHigh',
      }}
      pressStyle={{
        backgroundColor: '$surfaceContainer',
      }}
      onPress={onPress}
      icon={Menu}
      scaleIcon={1.4}
      aria-label="Toggle menu"
    />
  )
}
