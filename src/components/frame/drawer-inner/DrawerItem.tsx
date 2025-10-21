import { XStack, Text, styled } from 'tamagui'
import { NavLink } from 'react-router-dom'
import { ReactNode, cloneElement, isValidElement } from 'react'

interface DrawerItemProps {
  path: string
  label: string
  icon?: ReactNode
  onClose: () => void
}

const IconWrapper = styled(XStack, {
  alignItems: 'center',
  justifyContent: 'center',
})

/**
 * Individual drawer navigation item
 * Highlights when route is active
 */
export function DrawerItem({ path, label, icon, onClose }: DrawerItemProps) {
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
          gap="$3"
          alignItems="center"
          hoverStyle={{
            backgroundColor: isActive
              ? '$secondaryContainer'
              : '$surfaceContainerHighest',
          }}
          pressStyle={{
            opacity: 0.8,
          }}
        >
          {icon && (
            <IconWrapper>
              {isValidElement(icon) && cloneElement(icon, {
                // @ts-ignore - color prop exists on lucide icons
                color: isActive ? '$onSecondaryContainer' : '$onSurfaceVariant',
              })}
            </IconWrapper>
          )}
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
