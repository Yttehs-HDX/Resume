import { Text } from 'tamagui'
import { Markdown, PrimaryCard } from '../../../components/common'

interface LookingForCardProps {
  lookingForMd?: string
}

/**
 * Profile looking-for section - Markdown-driven opportunity statement
 */
export function LookingForCard({ lookingForMd }: LookingForCardProps) {
  const content = typeof lookingForMd === 'string' ? lookingForMd.trim() : ''

  return (
    <PrimaryCard width="100%" flexDirection="column" gap="$3">
      <Text fontSize={22} fontWeight="500" color="$onPrimaryContainer">
        正在寻找
      </Text>
      {content.length > 0 ? <Markdown tone="primary">{content}</Markdown> : null}
    </PrimaryCard>
  )
}
