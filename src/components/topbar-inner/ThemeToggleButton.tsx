import { Button } from 'tamagui'
import { Moon, Sun } from '@tamagui/lucide-icons'

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
      size="$9"
      circular
      backgroundColor="$surfaceContainerHighest"
      width={48}
      height={48}
      hoverStyle={{
        backgroundColor: '$surfaceContainerHigh',
      }}
      pressStyle={{
        backgroundColor: '$surfaceContainer',
      }}
      onPress={onToggle}
      icon={theme === 'light' ? Moon : Sun}
      scaleIcon={1.4}
      aria-label="Toggle dark mode"
    />
  )
}
