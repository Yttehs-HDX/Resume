import { YStack, XStack, styled, Text } from 'tamagui'
import { Code2 } from '@tamagui/lucide-icons'
import { Card } from '../../../components/common'

const TitleText = styled(Text, {
  color: '$onSurface',
  fontSize: 18,
  fontWeight: '700',
  lineHeight: 26,
  letterSpacing: 0.1,
})

const DescriptionText = styled(Text, {
  color: '$onSurfaceVariant',
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.25,
})

const LevelBadge = styled(XStack, {
  backgroundColor: '$tertiary',
  paddingHorizontal: '$2',
  paddingVertical: '$2.5',
  borderRadius: '$3',
  alignSelf: 'flex-start',
})

const LevelText = styled(Text, {
  color: '$onTertiary',
  fontSize: 14,
  fontWeight: '700',
  lineHeight: 20,
  letterSpacing: 0.1,
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

interface Skill {
  languages: string[]
  level: string
  description: string
  tags: string[]
}

interface SkillCardProps {
  skill: Skill
}

/**
 * Skill card component - Displays programming language skill information
 * Following Material Design 3 principles with elevated card and color tokens
 */
export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card>
      <YStack gap="$4">
        {/* Header with Icon and Language Name */}
        <XStack gap="$3" alignItems="center">
          <XStack
            width={40}
            height={40}
            backgroundColor="$primaryContainer"
            borderRadius={20}
            alignItems="center"
            justifyContent="center"
          >
            <Code2 size={20} color="$onPrimaryContainer" />
          </XStack>
          <TitleText flex={1}>{skill.languages.join(' / ')}</TitleText>
        </XStack>

        {/* Level Badge */}
        <LevelBadge>
          <LevelText>{skill.level}</LevelText>
        </LevelBadge>

        {/* Description */}
        <DescriptionText>{skill.description}</DescriptionText>

        {/* Tags */}
        {skill.tags && skill.tags.length > 0 && (
          <XStack gap="$2" flexWrap="wrap">
            {skill.tags.map((tag, index) => (
              <TagChip key={index}>
                <TagText>{tag}</TagText>
              </TagChip>
            ))}
          </XStack>
        )}
      </YStack>
    </Card>
  )
}
