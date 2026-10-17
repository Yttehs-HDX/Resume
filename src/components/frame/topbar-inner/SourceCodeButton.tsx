import { Button } from 'tamagui'
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
        size="lg"
        backgroundColor="surfaceContainerHighest hover:surfaceContainerHigh press:surfaceContainer"
        width={48}
        height={48}
        circular
        icon={GitBranch}
        scaleIcon={1.4}
        aria-label="View source code"
      />
    </a>
  )
}
