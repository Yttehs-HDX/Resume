import { YStack, Text, XStack, styled } from 'tamagui'
import { NavLink } from 'react-router-dom'
import { routes } from '../pages/routes'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

const DrawerBackdrop = styled(YStack, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  display: 'none',
  '$gtSm': {
    display: 'none',
  },
  variants: {
    visible: {
      true: {
        display: 'flex',
      },
    },
  } as const,
})

const DrawerContainer = styled(YStack, {
  width: 280,
  height: '100%',
  backgroundColor: '$surfaceContainerHigh',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 1000,
  transform: 'translateX(-100%)',
  transition: 'transform 0.3s ease-in-out',
  '$gtSm': {
    position: 'relative',
    transform: 'translateX(0)',
    transition: 'none',
  },
  variants: {
    open: {
      true: {
        transform: 'translateX(0)',
      },
    },
  } as const,
})

const DrawerTopBar = styled(XStack, {
  backgroundColor: '$surfaceContainerHigh',
  paddingHorizontal: '$8',
  paddingVertical: '$4',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const DrawerContent = styled(YStack, {
  flex: 1,
  paddingHorizontal: '$4',
  gap: '$3',
  style: { overflowY: 'auto' },
})

/**
 * Side navigation drawer component
 * Displays navigation menu with active route highlighting
 * On mobile: collapsible overlay with backdrop
 * On desktop: always visible sidebar
 */
export function Drawer({ isOpen, onClose }: DrawerProps) {
  return (
    <>
      <DrawerBackdrop visible={isOpen} onPress={onClose} />
      <DrawerContainer open={isOpen}>
        <DrawerTopBar>
          <Text
            fontSize={22}
            fontWeight="600"
            color="$onSurfaceVariant"
          >
            Navigation
          </Text>
        </DrawerTopBar>

        <DrawerContent>
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              style={{ textDecoration: 'none' }}
              onClick={onClose}
            >
              {({ isActive }) => (
                <XStack
                  paddingVertical="$3"
                  paddingHorizontal="$4"
                  borderRadius="$6"
                  backgroundColor={isActive ? '$secondaryContainer' : 'transparent'}
                  cursor="pointer"
                  hoverStyle={{
                    backgroundColor: isActive ? '$secondaryContainer' : '$surfaceContainerHighest',
                  }}
                  pressStyle={{
                    opacity: 0.8,
                  }}
                >
                  <Text
                    fontSize={16}
                    fontWeight={isActive ? "600" : "400"}
                    color={isActive ? "$onSecondaryContainer" : "$onSurface"}
                    letterSpacing={0.25}
                  >
                    {route.label}
                  </Text>
                </XStack>
              )}
            </NavLink>
          ))}
        </DrawerContent>
      </DrawerContainer>
    </>
  )
}
