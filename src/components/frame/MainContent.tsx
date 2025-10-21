import { YStack } from 'tamagui'
import { useLocation } from 'react-router-dom'
import { TopBar } from './TopBar'
import { routes } from '../../pages/routes'

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
export function MainContent({
  theme,
  onToggleTheme,
  onToggleDrawer,
  children,
}: MainContentProps) {
  const location = useLocation()
  
  // Find the current route label based on the current path
  const currentRoute = routes.find((route) => route.path === location.pathname)
  const currentTitle = currentRoute?.label || 'My Application'

  return (
    <YStack flex={1} backgroundColor="$surfaceContainerHigh">
      <TopBar
        theme={theme}
        onToggleTheme={onToggleTheme}
        onToggleDrawer={onToggleDrawer}
        title={currentTitle}
      />

      <YStack
        flex={1}
        borderTopLeftRadius="$6"
        borderTopRightRadius="$6"
        backgroundColor="$background"
        style={{ overflowX: 'hidden', overflowY: 'auto' }}
      >
        {children}
      </YStack>
    </YStack>
  )
}
