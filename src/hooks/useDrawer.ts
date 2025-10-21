import { useState } from 'react'

/**
 * Custom hook to manage drawer state
 * Provides open/close/toggle functionality
 */
export function useDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((prev) => !prev)

  return { isOpen, open, close, toggle }
}
