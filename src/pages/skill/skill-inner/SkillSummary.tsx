import { YStack, XStack, styled, Text } from 'tamagui'
import { Lightbulb, Layers, Monitor } from '@tamagui/lucide-icons'
import { PrimaryCard } from '../../../components/common'

const SectionTitle = styled(Text, {
  color: '$onPrimaryContainer',
  fontSize: 14,
  fontWeight: '700',
  lineHeight: 20,
  letterSpacing: 0.1,
  textTransform: 'uppercase',
})

const ItemText = styled(Text, {
  color: '$onPrimaryContainer',
  fontSize: 15,
  lineHeight: 22,
  letterSpacing: 0.15,
})

const DividerLine = styled(XStack, {
  height: 1,
  backgroundColor: '$onPrimaryContainer',
  opacity: 0.12,
  width: '100%',
})

interface SkillSummary {
  core: string[]
  architecture: string[]
  platforms: string[]
}

interface SkillSummaryProps {
  summary: SkillSummary
}

/**
 * Skill summary component - Displays an overview of core competencies
 * Uses PrimaryCard for visual prominence following MD3 design
 */
export function SkillSummary({ summary }: SkillSummaryProps) {
  return (
    <PrimaryCard>
      <YStack gap="$4">
        {/* Core Competencies */}
        <YStack gap="$2.5">
          <XStack gap="$2" alignItems="center">
            <Lightbulb size={16} color="$onPrimaryContainer" />
            <SectionTitle>核心能力</SectionTitle>
          </XStack>
          <YStack gap="$1.5" paddingLeft="$6">
            {summary.core.map((item, index) => (
              <ItemText key={index}>• {item}</ItemText>
            ))}
          </YStack>
        </YStack>

        <DividerLine />

        {/* Architecture Patterns */}
        <YStack gap="$2.5">
          <XStack gap="$2" alignItems="center">
            <Layers size={16} color="$onPrimaryContainer" />
            <SectionTitle>架构模式</SectionTitle>
          </XStack>
          <YStack gap="$1.5" paddingLeft="$6">
            {summary.architecture.map((item, index) => (
              <ItemText key={index}>• {item}</ItemText>
            ))}
          </YStack>
        </YStack>

        <DividerLine />

        {/* Platforms */}
        <YStack gap="$2.5">
          <XStack gap="$2" alignItems="center">
            <Monitor size={16} color="$onPrimaryContainer" />
            <SectionTitle>技术平台</SectionTitle>
          </XStack>
          <YStack gap="$1.5" paddingLeft="$6">
            {summary.platforms.map((item, index) => (
              <ItemText key={index}>• {item}</ItemText>
            ))}
          </YStack>
        </YStack>
      </YStack>
    </PrimaryCard>
  )
}
