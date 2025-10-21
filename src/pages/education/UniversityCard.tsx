import { YStack, XStack, styled, Text } from 'tamagui'
import { GraduationCap } from '@tamagui/lucide-icons'
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

const CourseChip = styled(XStack, {
  backgroundColor: '$secondaryContainer',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  borderRadius: '$2',
})

const CourseText = styled(Text, {
  color: '$onSecondaryContainer',
  fontSize: 13,
  lineHeight: 18,
  letterSpacing: 0.25,
})

interface University {
  name: string
  major: string
  degree: string
  startDate: string
  endDate: string
  mainCourses: string[]
}

interface UniversityCardProps {
  university: University
}

/**
 * University card component - Displays university education information
 * Following Material Design 3 card layout with elevation and spacing
 */
export function UniversityCard({ university }: UniversityCardProps) {
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
            backgroundColor="$primaryContainer"
            borderRadius={20}
            alignItems="center"
            justifyContent="center"
          >
            <GraduationCap size={20} color="$onPrimaryContainer" />
          </XStack>
          <YStack flex={1}>
            <TitleText>{university.name}</TitleText>
          </YStack>
        </XStack>

        {/* Major and Degree */}
        <YStack gap="$1">
          <SubtitleText>{university.major}</SubtitleText>
          <CaptionText>{university.degree} • {formatDate(university.startDate, university.endDate)}</CaptionText>
        </YStack>

        {/* Main Courses */}
        {university.mainCourses && university.mainCourses.length > 0 && (
          <YStack gap="$2">
            <CaptionText fontWeight="600">主修课程</CaptionText>
            <XStack gap="$2" flexWrap="wrap">
              {university.mainCourses.map((course, index) => (
                <CourseChip key={index}>
                  <CourseText>{course}</CourseText>
                </CourseChip>
              ))}
            </XStack>
          </YStack>
        )}
      </YStack>
    </Card>
  )
}
