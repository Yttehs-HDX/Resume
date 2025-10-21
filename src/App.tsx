import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TamaguiProvider, YStack, XStack, Theme } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import { TopBar } from './components/TopBar'
import { Drawer } from './components/Drawer'
import { routes } from './pages/routes'

/**
 * Main application component
 * Manages theme state and renders the app layout with routing
 */
export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <Theme name={theme}>
        <BrowserRouter>
          <YStack fullscreen backgroundColor="$background">
            <TopBar theme={theme} onToggleTheme={toggleTheme} />
          
            <XStack flex={1}>
              <Drawer />
            
              <YStack 
                flex={1} 
                overflow="scroll"
                backgroundColor="$surface"
              >
                <Routes>
                  {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </YStack>
            </XStack>
          </YStack>
        </BrowserRouter>
      </Theme>
    </TamaguiProvider>
  )
}
