import { YStack, H2, Text, Card } from 'tamagui'

/**
 * Page 1 - Demo page with cards
 */
export function Page1() {
  return (
    <YStack
      flex={1}
      padding="$6"
      gap="$5"
      backgroundColor="$background"
    >
      <H2 
        color="$onBackground"
        fontSize={32}
        fontWeight="600"
        letterSpacing={-0.5}
      >
        Page 1
      </H2>
      
      <Card
        elevate
        backgroundColor="$surfaceContainerHigh"
        padding="$5"
        borderRadius="$4"
        shadowColor="$shadowColor"
        shadowOffset={{ width: 0, height: 1 }}
        shadowOpacity={0.1}
        shadowRadius={3}
      >
        <Text 
          color="$onSurface"
          fontSize={16}
          lineHeight={24}
          letterSpacing={0.15}
        >
          This is the content of the first page. You can add any content you want here.
        </Text>
      </Card>
      
      <Card
        elevate
        backgroundColor="$surfaceContainerHigh"
        padding="$5"
        borderRadius="$4"
        shadowColor="$shadowColor"
        shadowOffset={{ width: 0, height: 1 }}
        shadowOpacity={0.1}
        shadowRadius={3}
      >
        <Text 
          color="$onSurfaceVariant"
          fontSize={14}
          lineHeight={20}
          letterSpacing={0.25}
        >
          Use the navigation menu on the left to switch between pages.
        </Text>
      </Card>
    </YStack>
  )
}
