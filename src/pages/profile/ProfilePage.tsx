import { YStack } from 'tamagui'
import { PageLayout } from '../../components/frame/layout'
import { ProfileHeader } from './ProfileHeader'
import { SocialLinks } from './SocialLinks'
import profileData from '../../data/profile.json'

/**
 * Profile page - Displays user profile information
 */
export function ProfilePage() {
  return (
    <PageLayout>
      <YStack gap="$6" width="100%">
        <ProfileHeader
          fullName={profileData.fullName}
          avatarUrl={profileData.avatarUrl}
          size="large"
        />
        <SocialLinks social={profileData.social} />
      </YStack>
    </PageLayout>
  )
}
