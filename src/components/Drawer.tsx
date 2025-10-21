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
  padding: '$3',
  gap: '$2',
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
        <Text
          fontSize={14}
          fontWeight="600"
          color="$onSurfaceVariant"
          marginBottom="$2"
          marginTop="$2"
          marginLeft="$4"
          letterSpacing={0.5}
          textTransform="uppercase"
        >
          Navigation
        </Text>

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
      </DrawerContainer>
    </>
  )
}
