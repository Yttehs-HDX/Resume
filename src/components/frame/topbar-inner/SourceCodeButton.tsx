import { Button } from 'tamagui'
import { ThemedIcon } from '../../common'
import { GitBranch } from 'lucide-react'
import basicData from '../../../data/basic.json'

/**
 * Source code button component
 * Links to the source code repository
 */
export function SourceCodeButton() {
  return (
    <a
      href={basicData.sourceCodeUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Button
        size={false}
        backgroundColor="surfaceContainerHighest hover:surfaceContainerHigh press:surfaceContainer"
        width={48}
        height={48}
        borderRadius={24}
        padding={0}
        aria-label="View source code"
      >
        <ThemedIcon icon={GitBranch} size={24} color="$onSurface" />
      </Button>
    </a>
  )
}
