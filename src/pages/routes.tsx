import { ReactNode } from 'react'
import {
  User,
  GraduationCap,
  Briefcase,
  Award,
  Github as GithubIcon,
  BookOpen,
  Code2,
  GitPullRequest,
} from '@tamagui/lucide-icons'
import { Profile } from './profile'
import { Education } from './education'
import { Intership } from './intership'
import { Certificate } from './certificate'
import { Github } from './github'
import { Contribution } from './contribution'
import { Blog } from './blog'
import { Skill } from './skill'

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
    label: '个人定位',
    icon: <User size={20} />,
  },
  {
    path: '/github',
    element: <Github />,
    label: '代表项目',
    icon: <GithubIcon size={20} />,
  },
  {
    path: '/intership',
    element: <Intership />,
    label: '工程经历',
    icon: <Briefcase size={20} />,
  },
  {
    path: '/skill',
    element: <Skill />,
    label: '能力画像',
    icon: <Code2 size={20} />,
  },
  {
    path: '/contribution',
    element: <Contribution />,
    label: '开源协作',
    icon: <GitPullRequest size={20} />,
  },
  {
    path: '/blog',
    element: <Blog />,
    label: '技术文章',
    icon: <BookOpen size={20} />,
  },
  {
    path: '/education',
    element: <Education />,
    label: '学习经历',
    icon: <GraduationCap size={20} />,
  },
  {
    path: '/certificate',
    element: <Certificate />,
    label: '资格证书',
    icon: <Award size={20} />,
  },
]
