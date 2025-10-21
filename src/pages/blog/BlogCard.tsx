import { YStack, XStack, styled, Text } from 'tamagui'
import { ExternalLink, Calendar } from '@tamagui/lucide-icons'
import { Card } from '../../components/common'

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

const DateText = styled(Text, {
  color: '$onSurfaceVariant',
  fontSize: 13,
  lineHeight: 18,
  letterSpacing: 0.25,
  fontWeight: '500',
})

interface BlogPost {
  url: string
  title: string
  description: string
  date: string
}

interface BlogCardProps {
  post: BlogPost
}

/**
 * Blog card component - Displays blog post information
 * Features: title, description, publish date, and external link
 */
export function BlogCard({ post }: BlogCardProps) {
  const handleCardPress = () => {
    window.open(post.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card
      pressStyle={{ scale: 0.98, opacity: 0.9 }}
      cursor="pointer"
      onPress={handleCardPress}
    >
      <YStack gap="$4" width="100%">
        {/* Header: Blog Title & Link Icon */}
        <XStack alignItems="center" justifyContent="space-between" gap="$2">
          <TitleText flex={1} numberOfLines={2} ellipsizeMode="tail">
            {post.title}
          </TitleText>
          <ExternalLink size={20} color="$onSurfaceVariant" flexShrink={0} />
        </XStack>

        {/* Description */}
        <DescriptionText>{post.description}</DescriptionText>

        {/* Date */}
        <XStack alignItems="center" gap="$2">
          <Calendar size={16} color="$onSurfaceVariant" />
          <DateText>{post.date}</DateText>
        </XStack>
      </YStack>
    </Card>
  )
}
