import { XStack, Text, styled } from 'tamagui'

const StyledDrawerTopBar = styled(XStack, {
  backgroundColor: '$surfaceContainerHigh',
  paddingHorizontal: '$8',
  paddingVertical: '$4',
  alignItems: 'center',
  justifyContent: 'center',
})

interface DrawerTopBarProps {
  title?: string
}

/**
 * Drawer top bar component
 * Displays the drawer header with navigation title
 */
export function DrawerTopBar({ title = 'Navigation' }: DrawerTopBarProps) {
  return (
    <StyledDrawerTopBar>
      <Text fontSize={22} fontWeight="600" color="$onSurfaceVariant">
        {title}
      </Text>
    </StyledDrawerTopBar>
  )
}
