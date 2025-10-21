import { YStack } from 'tamagui'
import { PageLayout } from '../../components/frame/layout'
import { IntershipCard } from './IntershipCard'
import intershipData from '../../data/intership.json'

/**
 * Internship page - Displays internship experience
 */
export function IntershipPage() {
  return (
    <PageLayout>
      <YStack gap="$5" width="100%">
        {/* Internship Experience Section */}
        <YStack gap="$4">
          {intershipData.internships.map((internship, index) => (
            <IntershipCard key={index} internship={internship} />
          ))}
        </YStack>
      </YStack>
    </PageLayout>
  )
}
