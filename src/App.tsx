import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TamaguiProvider, XStack, Theme } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import { MainContent } from './components/MainContent'
import { Drawer } from './components/Drawer'
import { routes } from './pages/routes'

/**
 * Main application component
 * Manages theme state and renders the app layout with routing
 */
export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <Theme name={theme}>
        <BrowserRouter>
          <XStack fullscreen>
            <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
            
            <MainContent theme={theme} onToggleTheme={toggleTheme} onToggleDrawer={toggleDrawer}>
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </MainContent>
          </XStack>
        </BrowserRouter>
      </Theme>
    </TamaguiProvider>
  )
}
