import { H1, TamaguiProvider, YStack } from 'tamagui'
import tamaguiConfig from './tamagui.config'

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <YStack 
        fullscreen
        alignItems="center"
        justifyContent="center"
      >
        <H1>Hello, Tamagui!</H1>
      </YStack>
    </TamaguiProvider>
  )
}
