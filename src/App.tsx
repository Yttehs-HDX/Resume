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

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <Theme name={theme}>
        <BrowserRouter>
          <XStack fullscreen>
            <Drawer />
            
            <MainContent theme={theme} onToggleTheme={toggleTheme}>
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
