import { YStack, type TamaguiElement } from 'tamagui'
import { useLocation } from 'react-router-dom'
import { TopBar } from './TopBar'
import { routes } from '../../pages/routes'
import { useScrollReset } from '../../hooks'

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
  const scrollRef = useScrollReset<HTMLElement & TamaguiElement>()
  
  // Find the current route label based on the current path
  const currentRoute = routes.find((route) => route.path === location.pathname)
  const currentTitle = currentRoute?.label || 'My Application'

  return (
    <YStack flex={1} minWidth={0} minHeight={0} backgroundColor="surfaceContainerHigh">
      <TopBar
        theme={theme}
        onToggleTheme={onToggleTheme}
        onToggleDrawer={onToggleDrawer}
        title={currentTitle}
      />

      <YStack
        ref={scrollRef}
        flex={1}
        minHeight={0}
        borderTopLeftRadius="6"
        borderTopRightRadius="6"
        backgroundColor="background"
        style={{
                overflowX: 'hidden',
                overflowY: 'auto',
                paddingBottom: 'var(--app-safe-bottom)',
                paddingLeft: 'var(--app-safe-left)',
                paddingRight: 'var(--app-safe-right)',
              }}
      >
        {children}
      </YStack>
    </YStack>
  )
}
