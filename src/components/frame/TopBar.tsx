import { XStack } from 'tamagui'
import { MenuButton, ThemeToggleButton, AppTitle, SourceCodeButton } from './topbar-inner'

interface TopBarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  onToggleDrawer: () => void
  title: string
}

/**
 * Top navigation bar component
 * Displays current page title and theme toggle button
 * On mobile: shows menu button to toggle drawer
 * On desktop: hides menu button (drawer is always visible)
 */
export function TopBar({ theme, onToggleTheme, onToggleDrawer, title }: TopBarProps) {
  return (
    <XStack
      backgroundColor="$surfaceContainerHigh"
      paddingHorizontal="$4"
      paddingVertical="$1"
      alignItems="center"
      justifyContent="space-between"
    >
      <XStack alignItems="center" gap="$3">
        <MenuButton onPress={onToggleDrawer} />
        <AppTitle title={title} />
      </XStack>

      <XStack alignItems="center" gap="$2">
        <SourceCodeButton />
        <ThemeToggleButton theme={theme} onToggle={onToggleTheme} />
      </XStack>
    </XStack>
  )
}
