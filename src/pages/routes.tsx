import { ReactNode } from 'react'
import { Page1 } from './Page1'
import { Page2 } from './Page2'

/**
 * Route configuration interface
 */
export interface RouteConfig {
  path: string
  element: ReactNode
  label: string
}

/**
 * Application routes configuration
 */
export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Page1 />,
    label: 'Page 1',
  },
  {
    path: '/page2',
    element: <Page2 />,
    label: 'Page 2',
  },
]
