import { XStack, Text, styled } from 'tamagui'
import { NavLink } from 'react-router-dom'
import { ReactElement, ReactNode, isValidElement } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ThemedIcon } from '../../common'

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
  const iconElement = isValidElement(icon)
    ? icon as ReactElement<{ size?: number }>
    : null

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
              {iconElement && (
                <ThemedIcon
                  icon={iconElement.type as LucideIcon}
                  size={iconElement.props.size}
                  color={isActive ? '$onSecondaryContainer' : '$onSurfaceVariant'}
                />
              )}
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
