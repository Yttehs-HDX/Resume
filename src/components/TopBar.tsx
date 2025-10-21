import { XStack, Text, Button } from 'tamagui'
import { Moon, Sun, Menu } from '@tamagui/lucide-icons'

interface TopBarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  onToggleDrawer: () => void
}

/**
 * Top navigation bar component
 * Displays app title and theme toggle button
 * On mobile: shows menu button to toggle drawer
 * On desktop: hides menu button (drawer is always visible)
 */
export function TopBar({ theme, onToggleTheme, onToggleDrawer }: TopBarProps) {
  return (
    <XStack
      backgroundColor="$surfaceContainerHigh"
      paddingHorizontal="$4"
      paddingVertical="$4"
      alignItems="center"
      justifyContent="space-between"
    >
      <XStack alignItems="center" gap="$3">
        <Button
          size="$8"
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
          onPress={onToggleDrawer}
          icon={Menu}
          scaleIcon={1.4}
          aria-label="Toggle menu"
        />
        
        <Text
          fontSize={22}
          fontWeight="600"
          color="$onSurface"
          letterSpacing={0.5}
        >
          My Application
        </Text>
      </XStack>
      
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
