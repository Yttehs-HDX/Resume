import { PageLayout } from '../../components/frame/layout'
import { MasonryLayout } from '../../components/common'
import { ContributionCard } from './contribution-inner'
import contributionData from '../../data/contribution.json'

/**
 * Open source contribution page - Displays repositories and submitted PRs
 */
export function ContributionPage() {
  return (
    <PageLayout>
      <MasonryLayout>
        {contributionData.map((repo, index) => (
          <ContributionCard key={index} repo={repo} />
        ))}
      </MasonryLayout>
    </PageLayout>
  )
}
