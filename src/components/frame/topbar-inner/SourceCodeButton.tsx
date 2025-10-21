import { Button } from 'tamagui'
import { GitBranch } from '@tamagui/lucide-icons'
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
        size="$9"
        circular
        backgroundColor="$surfaceContainerHighest"
        width={48}
        height={48}
        hoverStyle={{
          backgroundColor: '$surfaceContainerHigh',
        }}
        pressStyle={{
          backgroundColor: '$surfaceContainer',
        }}
        icon={GitBranch}
        scaleIcon={1.4}
        aria-label="View source code"
      />
    </a>
  )
}
