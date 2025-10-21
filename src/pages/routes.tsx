import { ReactNode } from 'react'
import { Profile } from './profile'
import { Page2 } from './Page2'
import { Education } from './education'
import { Intership } from './intership'
import { Certificate } from './certificate'
import { User, FileText, GraduationCap, Briefcase, Award } from '@tamagui/lucide-icons'

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
    label: '个人简介',
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
    path: '/certificate',
    element: <Certificate />,
    label: '资格证书',
    icon: <Award size={20} />,
  },
  {
    path: '/page2',
    element: <Page2 />,
    label: 'Page 2',
    icon: <FileText size={20} />,
  },
]
