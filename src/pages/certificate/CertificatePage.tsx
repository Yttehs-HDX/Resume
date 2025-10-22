import { YStack } from 'tamagui'
import { PageLayout } from '../../components/frame/layout'
import { CertificateCard } from './certificate-inner'
import certificateData from '../../data/certificate.json'

/**
 * Certificate page - Displays certificates and awards
 */
export function CertificatePage() {
  return (
    <PageLayout>
      <YStack gap="$5" width="100%">
        {/* Certificates Section */}
        <YStack gap="$4">
          {certificateData.certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </YStack>
      </YStack>
    </PageLayout>
  )
}
