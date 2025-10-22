import { YStack, XStack, styled, Text } from 'tamagui'
import { Users } from '@tamagui/lucide-icons'
import { Card } from '../../../components/common'

const TitleText = styled(Text, {
  color: '$onSurface',
  fontSize: 18,
  fontWeight: '600',
  lineHeight: 24,
  letterSpacing: 0.15,
})

const SubtitleText = styled(Text, {
  color: '$onSurfaceVariant',
  fontSize: 15,
  lineHeight: 22,
  letterSpacing: 0.15,
})

const CaptionText = styled(Text, {
  color: '$onSurfaceVariant',
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.4,
})

const BodyText = styled(Text, {
  color: '$onSurface',
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.25,
})

interface Extracurricular {
  organization: string
  role: string
  startDate: string
  endDate: string
  description: string[]
}

interface ExtracurricularCardProps {
  activity: Extracurricular
}

/**
 * Extracurricular card component - Displays extracurricular activity information
 * Following Material Design 3 guidelines with proper hierarchy and spacing
 */
export function ExtracurricularCard({ activity }: ExtracurricularCardProps) {
  const formatDate = (startDate: string, endDate: string) => {
    return `${startDate} - ${endDate}`
  }

  return (
    <Card>
      <YStack gap="$3">
        {/* Header with Icon and Title */}
        <XStack gap="$3" alignItems="center">
          <XStack
            width={40}
            height={40}
            backgroundColor="$tertiaryContainer"
            borderRadius={20}
            alignItems="center"
            justifyContent="center"
          >
            <Users size={20} color="$onTertiaryContainer" />
          </XStack>
          <YStack flex={1}>
            <TitleText>{activity.organization}</TitleText>
          </YStack>
        </XStack>

        {/* Role and Date */}
        <YStack gap="$1">
          <SubtitleText>{activity.role}</SubtitleText>
          <CaptionText>{formatDate(activity.startDate, activity.endDate)}</CaptionText>
        </YStack>

        {/* Description */}
        {activity.description && activity.description.length > 0 && (
          <YStack gap="$2">
            {activity.description.map((desc, index) => (
              <BodyText key={index}>{desc}</BodyText>
            ))}
          </YStack>
        )}
      </YStack>
    </Card>
  )
}
