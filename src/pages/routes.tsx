import { ReactNode } from 'react'
import { Profile } from './profile'
import { Page2 } from './Page2'
import { User, FileText } from '@tamagui/lucide-icons'

/**
 * Route configuration interface
 */
export interface RouteConfig {
  path: string
  element: ReactNode
  label: string
  icon: ReactNode
}

/**
 * Application routes configuration
 */
export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Profile />,
    label: '简介',
    icon: <User size={20} />,
  },
  {
    path: '/page2',
    element: <Page2 />,
    label: 'Page 2',
    icon: <FileText size={20} />,
  },
]
