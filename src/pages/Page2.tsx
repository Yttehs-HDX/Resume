import { YStack, H2, Text, Card, Button } from 'tamagui'

/**
 * Page 2 - Demo page with primary color container
 */
export function Page2() {
  return (
    <YStack
      flex={1}
      padding="$6"
      gap="$5"
      backgroundColor="$background"
      borderTopLeftRadius="$6"
    >
      <H2 
        color="$onBackground"
        fontSize={32}
        fontWeight="600"
        letterSpacing={-0.5}
      >
        Page 2
      </H2>
      
      <Card
        elevate
        backgroundColor="$primaryContainer"
        padding="$5"
        borderRadius="$4"
        shadowColor="$shadowColor"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.12}
        shadowRadius={4}
      >
        <Text 
          color="$onPrimaryContainer"
          fontSize={16}
          lineHeight={24}
          letterSpacing={0.15}
          marginBottom="$3"
        >
          This is the content of the second page. This card uses Material You primary container background.
        </Text>
        
        <Button
          backgroundColor="$primary"
          color="$onPrimary"
          borderRadius="$5"
          paddingHorizontal="$5"
          paddingVertical="$3"
          fontSize={14}
          fontWeight="600"
          letterSpacing={0.5}
          alignSelf="flex-start"
          hoverStyle={{
            backgroundColor: "$primary",
            opacity: 0.9,
          }}
          pressStyle={{
            backgroundColor: "$primary",
            opacity: 0.8,
          }}
        >
          Action Button
        </Button>
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
          You can customize the content and style of each page as needed. Material You theme provides a rich color system and rounded design.
        </Text>
      </Card>
    </YStack>
  )
}
