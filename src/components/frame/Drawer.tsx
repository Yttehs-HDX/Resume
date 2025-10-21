import { routes } from '../../pages/routes'
import {
  DrawerBackdrop,
  DrawerContainer,
  DrawerTopBar,
  DrawerContent,
  DrawerItem,
} from './drawer-inner'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

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
        <DrawerTopBar title="Navigation" />

        <DrawerContent>
          {routes.map((route) => (
            <DrawerItem
              key={route.path}
              path={route.path}
              label={route.label}
              onClose={onClose}
            />
          ))}
        </DrawerContent>
      </DrawerContainer>
    </>
  )
}
