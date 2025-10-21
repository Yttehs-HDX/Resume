import { YStack, styled } from 'tamagui'
import { Spacer } from '../../common'

/**
 * Page layout container
 * Standard padding and spacing for all pages
 */
const PageContainer = styled(YStack, {
  flex: 1,
  padding: '$6',
  gap: '$5',
  backgroundColor: '$background',
})

/**
 * PageLayout wrapper that includes bottom spacer
 */
export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer>
      {children}
      <Spacer size="large" />
    </PageContainer>
  )
}
