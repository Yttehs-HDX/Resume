import { PageLayout } from '../../components/frame/layout'
import { MasonryLayout } from '../../components/common'
import { GithubCard } from './github-inner'
import githubData from '../../data/github.json'

/**
 * Github page - Displays GitHub repositories with statistics and information
 * Uses masonry layout for better visual distribution
 */
export function GithubPage() {
  return (
    <PageLayout>
      <MasonryLayout>
        {githubData.map((repo, index) => (
          <GithubCard key={index} repo={repo} />
        ))}
      </MasonryLayout>
    </PageLayout>
  )
}
