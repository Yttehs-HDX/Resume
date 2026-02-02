import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TamaguiProvider, XStack, Theme } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import { MainContent } from './components/frame/MainContent'
import { Drawer } from './components/frame/Drawer'
import { routes } from './pages/routes'
import { useTheme, useDrawer } from './hooks'
import { getSystemTheme } from './utils'
import profileData from './data/profile.json'

/**
 * Main application component
 * Manages theme state and renders the app layout with routing
 */
export function App() {
  const { theme, toggleTheme } = useTheme()
  const { isOpen: isDrawerOpen, close: closeDrawer, toggle: toggleDrawer } = useDrawer()

  useEffect(() => {
    if (typeof document === 'undefined') return

    document.documentElement.dataset.theme = theme

    const themeColor = theme === 'dark' ? '#1C1B1F' : '#FFFBFE'
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute('content', themeColor))
  }, [theme])

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={getSystemTheme()}>
      <Theme name={theme}>
        <BrowserRouter>
          <XStack fullscreen>
            <Drawer name={profileData.name} isOpen={isDrawerOpen} onClose={closeDrawer} />

            <MainContent
              theme={theme}
              onToggleTheme={toggleTheme}
              onToggleDrawer={toggleDrawer}
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
            </MainContent>
          </XStack>
        </BrowserRouter>
      </Theme>
    </TamaguiProvider>
  )
}
