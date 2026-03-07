import { useState, useEffect } from 'react'
import { YStack, XStack, styled, Text, Anchor } from 'tamagui'
import { Star, GitFork, Eye, ExternalLink } from '@tamagui/lucide-icons'
import { Card } from '../../../components/common'

const TitleText = styled(Text, {
  color: '$onSurface',
  fontSize: 18,
  fontWeight: '700',
  lineHeight: 26,
  letterSpacing: 0.1,
})

const DescriptionText = styled(Text, {
  color: '$onSurfaceVariant',
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.25,
})

const StatText = styled(Text, {
  color: '$onSurfaceVariant',
  fontSize: 12,
  lineHeight: 16,
  letterSpacing: 0.4,
  fontWeight: '500',
})

const PrLink = styled(Anchor, {
  color: '$primary',
  fontSize: 13,
  lineHeight: 18,
  letterSpacing: 0.25,
  fontWeight: '600',
  textDecorationLine: 'underline',
  cursor: 'pointer',
})

interface ContributionRepo {
  owner: string
  repo: string
  pr: number[]
  url: string
  description: string[]
}

interface ContributionCardProps {
  repo: ContributionRepo
}

interface RepoStats {
  stars: number | null
  forks: number | null
  watchers: number | null
}

/**
 * Contribution card component - Displays repository info with PR list and GitHub stats
 */
export function ContributionCard({ repo }: ContributionCardProps) {
  const [stats, setStats] = useState<RepoStats>({
    stars: null,
    forks: null,
    watchers: null,
  })

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repo.owner}/${repo.repo}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch repo stats')
        }

        const data = await response.json()
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
          watchers: data.subscribers_count,
        })
      } catch (error) {
        console.error(`Failed to fetch stats for ${repo.owner}/${repo.repo}:`, error)
        setStats({
          stars: null,
          forks: null,
          watchers: null,
        })
      }
    }

    fetchRepoStats()
  }, [repo.owner, repo.repo])

  const formatStat = (value: number | null): string => {
    if (value === null) return '?'
    if (value >= 1000) return `${(value / 1000).toFixed(1)}k`
    return value.toString()
  }

  const buildPrUrl = (prNumber: number) => `${repo.url.replace(/\/$/, '')}/pull/${prNumber}`

  const handleCardPress = () => {
    window.open(repo.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card
      pressStyle={{ scale: 0.98, opacity: 0.9 }}
      cursor="pointer"
      onPress={handleCardPress}
    >
      <YStack gap="$4" width="100%">
        <XStack alignItems="center" justifyContent="space-between" gap="$2">
          <TitleText flex={1} numberOfLines={1} ellipsizeMode="tail">
            {repo.owner}/{repo.repo}
          </TitleText>
          <ExternalLink size={20} color="$onSurfaceVariant" flexShrink={0} />
        </XStack>

        <YStack gap="$2">
          {repo.description.map((line, index) => (
            <DescriptionText key={index}>{line}</DescriptionText>
          ))}
        </YStack>

        <XStack alignItems="center" justifyContent="space-between" flexWrap="wrap" gap="$3">
          <XStack alignItems="center" gap="$2" flexWrap="wrap" flex={1}>
            {repo.pr.map((prNumber) => (
              <PrLink
                key={prNumber}
                href={buildPrUrl(prNumber)}
                target="_blank"
                rel="noopener noreferrer"
                onPress={(event) => event.stopPropagation()}
              >
                #{prNumber}
              </PrLink>
            ))}
          </XStack>

          <XStack alignItems="center" gap="$3" flexWrap="wrap">
            <XStack alignItems="center" gap="$2">
              <Star size={16} color="$onSurfaceVariant" />
              <StatText>{formatStat(stats.stars)}</StatText>
            </XStack>

            <XStack alignItems="center" gap="$2">
              <GitFork size={16} color="$onSurfaceVariant" />
              <StatText>{formatStat(stats.forks)}</StatText>
            </XStack>

            <XStack alignItems="center" gap="$2">
              <Eye size={16} color="$onSurfaceVariant" />
              <StatText>{formatStat(stats.watchers)}</StatText>
            </XStack>
          </XStack>
        </XStack>
      </YStack>
    </Card>
  )
}
