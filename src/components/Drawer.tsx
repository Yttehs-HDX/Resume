import { YStack, Text, XStack } from 'tamagui'
import { NavLink } from 'react-router-dom'
import { routes } from '../pages/routes'

/**
 * Side navigation drawer component
 * Displays navigation menu with active route highlighting
 */
export function Drawer() {
  return (
    <YStack
      width={280}
      height="100%"
      backgroundColor="$surfaceContainerHigh"
      padding="$3"
      gap="$2"
    >
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
    </YStack>
  )
}
