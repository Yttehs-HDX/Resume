import { H2 } from 'tamagui'
import {
  Card,
  PrimaryCard,
  PrimaryContainerText,
  SecondaryText,
  PrimaryButton,
} from '../components/common'
import { PageLayout } from '../components/frame/layout'

/**
 * Page 2 - Demo page with primary color container
 */
export function Page2() {
  return (
    <PageLayout borderTopLeftRadius="$6">
      <H2
        color="$onBackground"
        fontSize={32}
        fontWeight="600"
        letterSpacing={-0.5}
      >
        Page 2
      </H2>

      <PrimaryCard>
        <PrimaryContainerText marginBottom="$3">
          This is the content of the second page. This card uses Material You
          primary container background.
        </PrimaryContainerText>

        <PrimaryButton alignSelf="flex-start">Action Button</PrimaryButton>
      </PrimaryCard>

      <Card>
        <SecondaryText>
          You can customize the content and style of each page as needed.
          Material You theme provides a rich color system and rounded design.
        </SecondaryText>
      </Card>
    </PageLayout>
  )
}
