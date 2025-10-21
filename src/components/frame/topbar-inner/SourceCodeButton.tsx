import { Button } from 'tamagui'
import { GitBranch } from '@tamagui/lucide-icons'
import basicData from '../../../data/basic.json'

/**
 * Source code button component
 * Links to the source code repository
 */
export function SourceCodeButton() {
  const handlePress = () => {
    window.open(basicData.sourceCodeUrl, '_blank', 'noopener,noreferrer')
  }

  return (
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
      onPress={handlePress}
      icon={GitBranch}
      scaleIcon={1.4}
      aria-label="View source code"
    />
  )
}
