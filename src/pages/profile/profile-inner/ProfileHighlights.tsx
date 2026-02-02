import { Text } from 'tamagui'
import { Card, Markdown } from '../../../components/common'

interface ProfileHighlightsProps {
  highlightsMd?: string
}

/**
 * Profile highlights section - Markdown-driven key points
 */
export function ProfileHighlights({ highlightsMd }: ProfileHighlightsProps) {
  const content = typeof highlightsMd === 'string' ? highlightsMd.trim() : ''

  return (
    <Card width="100%" flexDirection="column" gap="$3">
      <Text fontSize={22} fontWeight="500" color="$onSurface">
        亮点
      </Text>
      {content.length > 0 ? <Markdown>{content}</Markdown> : null}
    </Card>
  )
}
