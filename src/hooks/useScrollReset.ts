import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook to reset scroll position when route changes
 * @returns ref to be attached to the scrollable container
 */
export function useScrollReset<T extends HTMLElement>() {
  const scrollRef = useRef<T>(null)
  const location = useLocation()

  useEffect(() => {
    // Reset scroll position to top when route changes
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [location.pathname])

  return scrollRef
}
