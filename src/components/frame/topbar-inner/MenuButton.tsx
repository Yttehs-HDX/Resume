import { Button } from 'tamagui'
import { ThemedIcon } from '../../common'
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
      size={false}
      backgroundColor="surfaceContainerHighest hover:surfaceContainerHigh press:surfaceContainer"
      width={48}
      height={48}
      display="flex gtSm:none"
      borderRadius={24}
      padding={0}
      onPress={onPress}
      aria-label="Toggle menu"
    >
      <ThemedIcon icon={Menu} size={24} color="$onSurface" />
    </Button>
  )
}
