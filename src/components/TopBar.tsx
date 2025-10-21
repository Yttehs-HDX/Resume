import { XStack, Text, Button } from 'tamagui'
import { Moon, Sun } from '@tamagui/lucide-icons'

interface TopBarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

/**
 * Top navigation bar component
 * Displays app title and theme toggle button
 */
export function TopBar({ theme, onToggleTheme }: TopBarProps) {
  return (
    <XStack
      backgroundColor="$surfaceContainer"
      paddingHorizontal="$4"
      paddingVertical="$4"
      alignItems="center"
      justifyContent="space-between"
      elevation="$2"
      zIndex={1000}
      shadowColor="$shadowColor"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.15}
      shadowRadius={3}
    >
      <Text
        fontSize={22}
        fontWeight="600"
        color="$onSurface"
        letterSpacing={0.5}
      >
        My Application
      </Text>
      
      <Button
        size="$8"
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
        onPress={onToggleTheme}
        icon={theme === 'light' ? Moon : Sun}
        scaleIcon={1.4}
        aria-label="Toggle dark mode"
      />
    </XStack>
  )
}
