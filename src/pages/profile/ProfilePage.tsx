import { PageLayout } from '../../components/frame/layout'
import { ProfileHeader } from './ProfileHeader'
import profileData from '../../data/profile.json'

/**
 * Profile page - Displays user profile information
 */
export function ProfilePage() {
  return (
    <PageLayout>
      <ProfileHeader
        fullName={profileData.fullName}
        avatarUrl={profileData.avatarUrl}
        size="large"
      />
    </PageLayout>
  )
}
