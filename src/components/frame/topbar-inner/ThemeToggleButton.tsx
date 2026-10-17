import { Button } from 'tamagui'
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
      size="lg"
      backgroundColor="surfaceContainerHighest hover:surfaceContainerHigh press:surfaceContainer"
      width={48}
      height={48}
      circular
      onPress={onToggle}
      icon={theme === 'light' ? Moon : Sun}
      scaleIcon={1.4}
      aria-label="Toggle dark mode"
    />
  )
}
