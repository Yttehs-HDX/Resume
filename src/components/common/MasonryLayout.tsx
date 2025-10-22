import { ReactNode, useMemo } from 'react'
import { XStack, YStack, useMedia } from 'tamagui'

interface MasonryLayoutProps {
  children: ReactNode[]
  columns?: number
  gap?: string
}

/**
 * Masonry layout component - Creates a waterfall/masonry layout
 * Distributes children evenly across columns by count (not height)
 * Responsive: uses specified columns on desktop, single column on mobile
 * 
 * @param children - Array of child elements to display
 * @param columns - Number of columns for desktop (default: 3)
 * @param gap - Gap between items (default: '$4')
 */
export function MasonryLayout({ 
  children, 
  columns = 3, 
  gap = '$4' 
}: MasonryLayoutProps) {
  const media = useMedia()
  
  // Use single column on mobile/tablet, specified columns on desktop
  const actualColumns = media.sm ? 1 : columns

  // Distribute children across columns evenly
  const columnChildren = useMemo(() => {
    const cols: ReactNode[][] = Array.from({ length: actualColumns }, () => [])
    
    children.forEach((child, index) => {
      const columnIndex = index % actualColumns
      cols[columnIndex].push(child)
    })
    
    return cols
  }, [children, actualColumns])

  return (
    <XStack gap={gap} width="100%" alignItems="flex-start">
      {columnChildren.map((columnItems, columnIndex) => (
        <YStack 
          key={columnIndex} 
          gap={gap} 
          flex={1}
          width={actualColumns === 1 ? '100%' : undefined}
        >
          {columnItems}
        </YStack>
      ))}
    </XStack>
  )
}
