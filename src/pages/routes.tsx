import { ReactNode } from 'react'
import { Profile } from './profile'
import { Education } from './education'
import { Intership } from './intership'
import { Certificate } from './certificate'
import { Github } from './github'
import { Blog } from './blog'
import { User, GraduationCap, Briefcase, Award, Github as GithubIcon, BookOpen } from '@tamagui/lucide-icons'

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
    path: '/github',
    element: <Github />,
    label: '作品展示',
    icon: <GithubIcon size={20} />,
  },
  {
    path: '/blog',
    element: <Blog />,
    label: '博客推荐',
    icon: <BookOpen size={20} />,
  },
]
