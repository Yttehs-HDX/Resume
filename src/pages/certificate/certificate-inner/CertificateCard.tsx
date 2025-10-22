import { YStack, XStack, styled, Text } from 'tamagui'
import { Award, Trophy } from '@tamagui/lucide-icons'
import { Card } from '../../../components/common'

const TitleText = styled(Text, {
  color: '$onSurface',
  fontSize: 18,
  fontWeight: '700',
  lineHeight: 26,
  letterSpacing: 0.1,
})

const DateText = styled(Text, {
  color: '$onSurfaceVariant',
  fontSize: 12,
  lineHeight: 16,
  letterSpacing: 0.5,
  fontWeight: '500',
  textTransform: 'uppercase',
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
  lineHeight: 20,
  letterSpacing: 0.1,
  fontWeight: '700',
})

interface Certificate {
  name: string
  level: string | null
  date: string
}

interface CertificateCardProps {
  certificate: Certificate
}

/**
 * Certificate card component - Displays certificate/award information
 * Using a distinctive horizontal layout with prominent iconography
 */
export function CertificateCard({ certificate }: CertificateCardProps) {
  // Unified design - all certificates use the same card style
  const hasAward = !!certificate.level

  return (
    <Card>
      <XStack gap="$4" alignItems="center" width="100%">
        {/* Icon Section - Different colors based on award status */}
        <XStack
          width={56}
          height={56}
          backgroundColor={hasAward ? '$tertiaryContainer' : '$secondaryContainer'}
          borderRadius={28}
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          {hasAward ? (
            <Trophy size={24} color="$onTertiaryContainer" />
          ) : (
            <Award size={24} color="$onSecondaryContainer" />
          )}
        </XStack>

        {/* Content Section */}
        <YStack flex={1} gap="$2">
          {/* Certificate Name */}
          <TitleText>{certificate.name}</TitleText>
          
          {/* Level Badge */}
          {certificate.level && (
            <LevelBadge>
              <LevelText>{certificate.level}</LevelText>
            </LevelBadge>
          )}

          {/* Date */}
          <DateText>{certificate.date}</DateText>
        </YStack>
      </XStack>
    </Card>
  )
}
