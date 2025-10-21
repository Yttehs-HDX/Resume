import { YStack } from 'tamagui'
import { PageLayout } from '../../components/frame/layout'
import { GithubCard } from './GithubCard'
import githubData from '../../data/github.json'

/**
 * Github page - Displays GitHub repositories with statistics and information
 */
export function GithubPage() {
  return (
    <PageLayout>
      <YStack gap="$4" width="100%">
        {githubData.map((repo, index) => (
          <GithubCard key={index} repo={repo} />
        ))}
      </YStack>
    </PageLayout>
  )
}
