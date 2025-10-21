import { Text } from 'tamagui'

interface AppTitleProps {
  title?: string
}

/**
 * Application title component
 * Displays the main application name in the top bar
 */
export function AppTitle({ title = 'My Application' }: AppTitleProps) {
  return (
    <Text
      fontSize={22}
      fontWeight="600"
      color="$onSurface"
      letterSpacing={0.5}
      padding="$3"
    >
      {title}
    </Text>
  )
}
