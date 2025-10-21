import { YStack } from 'tamagui'
import { PageLayout } from '../../components/frame/layout'
import { UniversityCard } from './UniversityCard'
import { ExtracurricularCard } from './ExtracurricularCard'
import educationData from '../../data/education.json'

/**
 * Education page - Displays education experience including universities and extracurriculars
 */
export function EducationPage() {
  return (
    <PageLayout>
      <YStack gap="$5" width="100%">
        {/* University Education Section */}
        <YStack gap="$4">
          {educationData.universities.map((university, index) => (
            <UniversityCard key={index} university={university} />
          ))}
        </YStack>

        {/* Extracurricular Activities Section */}
        <YStack gap="$4">
          {educationData.extracurriculars.map((activity, index) => (
            <ExtracurricularCard key={index} activity={activity} />
          ))}
        </YStack>
      </YStack>
    </PageLayout>
  )
}
