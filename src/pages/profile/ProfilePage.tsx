import { YStack } from 'tamagui'
import { PageLayout } from '../../components/frame/layout'
import { Avatar, SocialLinks } from './profile-inner'
import profileData from '../../data/profile.json'

/**
 * Profile page - Displays user profile information
 */
export function ProfilePage() {
  return (
    <PageLayout>
      <YStack gap="$6" width="100%">
        <Avatar
          fullName={profileData.fullName}
          avatarUrl={profileData.avatarUrl}
          size="large"
        />
        <SocialLinks social={profileData.social} />
      </YStack>
    </PageLayout>
  )
}
