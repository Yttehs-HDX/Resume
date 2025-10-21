import { ReactNode } from 'react'
import { Profile } from './profile'
import { Page2 } from './Page2'
import { Education } from './education'
import { Intership } from './intership'
import { User, FileText, GraduationCap, Briefcase } from '@tamagui/lucide-icons'

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
    path: '/education',
    element: <Education />,
    label: '教育经历',
    icon: <GraduationCap size={20} />,
  },
  {
    path: '/intership',
    element: <Intership />,
    label: '实习经历',
    icon: <Briefcase size={20} />,
  },
  {
    path: '/page2',
    element: <Page2 />,
    label: 'Page 2',
    icon: <FileText size={20} />,
  },
]
