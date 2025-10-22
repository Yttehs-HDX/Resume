import { YStack, XStack, styled, Text } from 'tamagui'
import { Lightbulb, Layers, Monitor, Search } from '@tamagui/lucide-icons'
import { PrimaryCard } from '../../../components/common'

const SectionTitle = styled(Text, {
  color: '$onPrimaryContainer',
  fontSize: 14,
  fontWeight: '700',
  lineHeight: 20,
  letterSpacing: 0.1,
  textTransform: 'uppercase',
})

const TagChip = styled(XStack, {
  backgroundColor: '$secondaryContainer',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  borderRadius: '$2',
})

const TagText = styled(Text, {
  color: '$onSecondaryContainer',
  fontSize: 13,
  lineHeight: 18,
  letterSpacing: 0.25,
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
  research: string[]
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
        <YStack gap="$3">
          <XStack gap="$2" alignItems="center">
            <Lightbulb size={16} color="$onPrimaryContainer" />
            <SectionTitle>核心能力</SectionTitle>
          </XStack>
          <XStack gap="$2" flexWrap="wrap">
            {summary.core.map((item, index) => (
              <TagChip key={index}>
                <TagText>{item}</TagText>
              </TagChip>
            ))}
          </XStack>
        </YStack>

        <DividerLine />

        {/* Architecture Patterns */}
        <YStack gap="$3">
          <XStack gap="$2" alignItems="center">
            <Layers size={16} color="$onPrimaryContainer" />
            <SectionTitle>架构模式</SectionTitle>
          </XStack>
          <XStack gap="$2" flexWrap="wrap">
            {summary.architecture.map((item, index) => (
              <TagChip key={index}>
                <TagText>{item}</TagText>
              </TagChip>
            ))}
          </XStack>
        </YStack>

        <DividerLine />

        {/* Platforms */}
        <YStack gap="$3">
          <XStack gap="$2" alignItems="center">
            <Monitor size={16} color="$onPrimaryContainer" />
            <SectionTitle>技术平台</SectionTitle>
          </XStack>
          <XStack gap="$2" flexWrap="wrap">
            {summary.platforms.map((item, index) => (
              <TagChip key={index}>
                <TagText>{item}</TagText>
              </TagChip>
            ))}
          </XStack>
        </YStack>

        <DividerLine />

        {/* Research Areas */}
        <YStack gap="$3">
          <XStack gap="$2" alignItems="center">
            <Search size={16} color="$onPrimaryContainer" />
            <SectionTitle>研究方向</SectionTitle>
          </XStack>
          <XStack gap="$2" flexWrap="wrap">
            {summary.research.map((item, index) => (
              <TagChip key={index}>
                <TagText>{item}</TagText>
              </TagChip>
            ))}
          </XStack>
        </YStack>
      </YStack>
    </PrimaryCard>
  )
}
