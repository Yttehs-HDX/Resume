import { H2 } from 'tamagui'
import { Card, BodyText, SecondaryText } from '../components/common'
import { PageLayout } from '../components/frame/layout'

/**
 * Page 1 - Demo page with cards
 */
export function Page1() {
  return (
    <PageLayout>
      <H2
        color="$onBackground"
        fontSize={32}
        fontWeight="600"
        letterSpacing={-0.5}
      >
        Page 1
      </H2>

      <Card>
        <BodyText>
          This is the content of the first page. You can add any content you
          want here.
        </BodyText>
      </Card>

      <Card>
        <SecondaryText>
          Use the navigation menu on the left to switch between pages.
        </SecondaryText>
      </Card>
    </PageLayout>
  )
}
