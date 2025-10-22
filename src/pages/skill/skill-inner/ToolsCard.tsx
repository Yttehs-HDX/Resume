import { YStack, XStack, styled, Text } from 'tamagui'
import { 
  Terminal, 
  Code, 
  Smartphone, 
  Package, 
  Globe, 
  Database
} from '@tamagui/lucide-icons'
import { Card } from '../../../components/common'

const TitleText = styled(Text, {
  color: '$onSurface',
  fontSize: 18,
  fontWeight: '700',
  lineHeight: 26,
  letterSpacing: 0.1,
})

const CategoryTitle = styled(Text, {
  color: '$onSurfaceVariant',
  fontSize: 14,
  fontWeight: '600',
  lineHeight: 20,
  letterSpacing: 0.1,
})

const ToolChip = styled(XStack, {
  backgroundColor: '$tertiaryContainer',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  borderRadius: '$2',
})

const ToolText = styled(Text, {
  color: '$onTertiaryContainer',
  fontSize: 13,
  lineHeight: 18,
  letterSpacing: 0.25,
})

const DividerLine = styled(XStack, {
  height: 1,
  backgroundColor: '$outlineVariant',
  width: '100%',
})

interface Tools {
  os: string[]
  editors: string[]
  mobile: string[]
  frontend: string[]
  backend: string[]
  devops: string[]
}

interface ToolsCardProps {
  tools: Tools
}

interface CategoryConfig {
  key: keyof Tools
  label: string
  icon: any
}

const categories: CategoryConfig[] = [
  { key: 'os', label: '操作系统', icon: Terminal },
  { key: 'editors', label: '编辑器', icon: Code },
  { key: 'mobile', label: '移动开发', icon: Smartphone },
  { key: 'frontend', label: '前端框架', icon: Globe },
  { key: 'backend', label: '后端技术', icon: Database },
  { key: 'devops', label: 'DevOps', icon: Package },
]

/**
 * Tools card component - Displays development tools and tech stack
 * Following Material Design 3 principles with chip-based layout
 */
export function ToolsCard({ tools }: ToolsCardProps) {
  return (
    <Card>
      <YStack gap="$4">
        {/* Header */}
        <XStack gap="$2" alignItems="center">
          <XStack
            width={40}
            height={40}
            backgroundColor="$tertiaryContainer"
            borderRadius={20}
            alignItems="center"
            justifyContent="center"
          >
            <Package size={20} color="$onTertiaryContainer" />
          </XStack>
          <TitleText>技术工具栈</TitleText>
        </XStack>

        {/* Tool Categories */}
        {categories.map((category, index) => {
          const toolsList = tools[category.key]
          const IconComponent = category.icon
          
          return (
            <YStack key={category.key} gap="$3">
              {index > 0 && <DividerLine />}
              
              <XStack gap="$2" alignItems="center">
                <IconComponent size={16} color="$onSurfaceVariant" />
                <CategoryTitle>{category.label}</CategoryTitle>
              </XStack>
              
              <XStack gap="$2" flexWrap="wrap">
                {toolsList.map((tool, toolIndex) => (
                  <ToolChip key={toolIndex}>
                    <ToolText>{tool}</ToolText>
                  </ToolChip>
                ))}
              </XStack>
            </YStack>
          )
        })}
      </YStack>
    </Card>
  )
}
