import { YStack, XStack, styled, Text } from 'tamagui'
import { Briefcase } from '@tamagui/lucide-icons'
import { Card } from '../../components/common'

const TitleText = styled(Text, {
  color: '$onSurface',
  fontSize: 20,
  fontWeight: '600',
  lineHeight: 28,
  letterSpacing: 0.15,
})

const SubtitleText = styled(Text, {
  color: '$onSurfaceVariant',
  fontSize: 16,
  lineHeight: 24,
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

const RoleChip = styled(XStack, {
  backgroundColor: '$primaryContainer',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  borderRadius: '$2',
  alignSelf: 'flex-start',
})

const RoleText = styled(Text, {
  color: '$onPrimaryContainer',
  fontSize: 13,
  lineHeight: 18,
  letterSpacing: 0.25,
  fontWeight: '500',
})

interface Internship {
  company: string
  department: string
  role: string
  startDate: string
  endDate: string
  description: string[]
}

interface IntershipCardProps {
  internship: Internship
}

/**
 * Internship card component - Displays internship experience information
 * Following Material Design 3 card layout with elevation and proper typography hierarchy
 */
export function IntershipCard({ internship }: IntershipCardProps) {
  const formatDate = (startDate: string, endDate: string) => {
    return `${startDate} - ${endDate}`
  }

  return (
    <Card>
      <YStack gap="$3">
        {/* Header with Icon and Company Name */}
        <XStack gap="$3" alignItems="center">
          <XStack
            width={40}
            height={40}
            backgroundColor="$primaryContainer"
            borderRadius={20}
            alignItems="center"
            justifyContent="center"
          >
            <Briefcase size={20} color="$onPrimaryContainer" />
          </XStack>
          <YStack flex={1}>
            <TitleText>{internship.company}</TitleText>
          </YStack>
        </XStack>

        {/* Department and Date */}
        <YStack gap="$1">
          <SubtitleText>{internship.department}</SubtitleText>
          <CaptionText>{formatDate(internship.startDate, internship.endDate)}</CaptionText>
        </YStack>

        {/* Role Badge */}
        <RoleChip>
          <RoleText>{internship.role}</RoleText>
        </RoleChip>

        {/* Description/Responsibilities */}
        {internship.description && internship.description.length > 0 && (
          <YStack gap="$2" paddingTop="$1">
            <CaptionText fontWeight="600">工作内容</CaptionText>
            <YStack gap="$2">
              {internship.description.map((desc, index) => (
                <XStack key={index} gap="$2" alignItems="flex-start">
                  <Text color="$onSurfaceVariant" fontSize={14}>•</Text>
                  <BodyText flex={1}>{desc}</BodyText>
                </XStack>
              ))}
            </YStack>
          </YStack>
        )}
      </YStack>
    </Card>
  )
}
