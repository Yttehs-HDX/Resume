import { XStack, Text } from 'tamagui'
import { NavLink } from 'react-router-dom'

interface DrawerItemProps {
  path: string
  label: string
  onClose: () => void
}

/**
 * Individual drawer navigation item
 * Highlights when route is active
 */
export function DrawerItem({ path, label, onClose }: DrawerItemProps) {
  return (
    <NavLink
      to={path}
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
            backgroundColor: isActive
              ? '$secondaryContainer'
              : '$surfaceContainerHighest',
          }}
          pressStyle={{
            opacity: 0.8,
          }}
        >
          <Text
            fontSize={16}
            fontWeight={isActive ? '600' : '400'}
            color={isActive ? '$onSecondaryContainer' : '$onSurface'}
            letterSpacing={0.25}
          >
            {label}
          </Text>
        </XStack>
      )}
    </NavLink>
  )
}
