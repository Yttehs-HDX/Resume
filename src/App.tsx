import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TamaguiProvider, XStack, Theme } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import { MainContent } from './components/MainContent'
import { Drawer } from './components/Drawer'
import { routes } from './pages/routes'

/**
 * Get system theme preference
 * Returns 'dark' if user prefers dark mode, otherwise 'light'
 */
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

/**
 * Main application component
 * Manages theme state and renders the app layout with routing
 */
export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getSystemTheme)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }

    // Modern browsers
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

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
    <TamaguiProvider config={tamaguiConfig} defaultTheme={getSystemTheme()}>
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
