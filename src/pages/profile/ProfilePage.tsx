import { YStack } from 'tamagui'
import { PageLayout } from '../../components/frame/layout'
import { Avatar, ProfileHighlights, LookingForCard, SocialLinks } from './profile-inner'
import profileData from '../../data/profile.json'

/**
 * Profile page - Displays user profile information
 */
export function ProfilePage() {
  const highlightsMd = Array.isArray(profileData.highlightsMd)
    ? profileData.highlightsMd.join('\n')
    : profileData.highlightsMd
  const lookingForMd = Array.isArray(profileData.lookingForMd)
    ? profileData.lookingForMd.join('\n')
    : profileData.lookingForMd

  return (
    <PageLayout>
      <YStack gap="$6" width="100%">
        <Avatar
          fullName={profileData.fullName}
          avatarUrl={profileData.avatarUrl}
          tagline={profileData.tagline}
          size="large"
        />
        <ProfileHighlights highlightsMd={highlightsMd} />
        <LookingForCard lookingForMd={lookingForMd} />
        <SocialLinks social={profileData.social} />
      </YStack>
    </PageLayout>
  )
}
