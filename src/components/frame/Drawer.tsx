import { routes } from '../../pages/routes'
import {
  DrawerBackdrop,
  DrawerContainer,
  DrawerTopBar,
  DrawerContent,
  DrawerItem,
} from './drawer-inner'

interface DrawerProps {
  name: string
  isOpen: boolean
  onClose: () => void
}

/**
 * Side navigation drawer component
 * Displays navigation menu with active route highlighting
 * On mobile: collapsible overlay with backdrop
 * On desktop: always visible sidebar
 */
export function Drawer({ name, isOpen, onClose }: DrawerProps) {
  return (
    <>
      <DrawerBackdrop visible={isOpen} onPress={onClose} />
      <DrawerContainer open={isOpen}>
        <DrawerTopBar title={`${name}'s Resume`} />

        <DrawerContent>
          {routes.map((route) => (
            <DrawerItem
              key={route.path}
              path={route.path}
              label={route.label}
              icon={route.icon}
              onClose={onClose}
            />
          ))}
        </DrawerContent>
      </DrawerContainer>
    </>
  )
}
