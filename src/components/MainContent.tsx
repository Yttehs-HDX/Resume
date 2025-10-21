import { YStack } from 'tamagui'
import { TopBar } from './TopBar'

interface MainContentProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  onToggleDrawer: () => void
  children: React.ReactNode
}

/**
 * Main content area component
 * Contains TopBar and page content area with matching background to Drawer
 */
export function MainContent({ theme, onToggleTheme, onToggleDrawer, children }: MainContentProps) {
  return (
    <YStack 
      flex={1} 
      backgroundColor="$surfaceContainerHigh"
    >
      <TopBar theme={theme} onToggleTheme={onToggleTheme} onToggleDrawer={onToggleDrawer} />
      
      <YStack 
        flex={1}
        borderTopLeftRadius="$6"
        borderTopRightRadius="$6"
        style={{ overflowX: 'hidden', overflowY: 'auto' }}
      >
        {children}
      </YStack>
    </YStack>
  )
}
