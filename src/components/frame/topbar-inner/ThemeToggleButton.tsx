import { Button } from 'tamagui'
import { ThemedIcon } from '../../common'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleButtonProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

/**
 * Theme toggle button component
 * Switches between light and dark themes
 */
export function ThemeToggleButton({ theme, onToggle }: ThemeToggleButtonProps) {
  return (
    <Button
      size={false}
      backgroundColor="surfaceContainerHighest hover:surfaceContainerHigh press:surfaceContainer"
      width={48}
      height={48}
      borderRadius={24}
      padding={0}
      onPress={onToggle}
      aria-label="Toggle dark mode"
    >
      <ThemedIcon icon={theme === 'light' ? Moon : Sun} size={24} color="$onSurface" />
    </Button>
  )
}
