import { useTheme } from 'tamagui'
import type { LucideIcon, LucideProps } from 'lucide-react'

interface ThemedIconProps extends Omit<LucideProps, 'ref'> {
  icon: LucideIcon
}

function resolveThemeColor(
  color: LucideProps['color'],
  theme: ReturnType<typeof useTheme>,
) {
  if (typeof color !== 'string' || !color.startsWith('$')) {
    return color
  }

  const token = theme[color] ?? theme[color.slice(1)]
  return token?.get?.('web') ?? token?.val ?? color
}

export function ThemedIcon({ icon: Icon, color, ...props }: ThemedIconProps) {
  const theme = useTheme()

  return <Icon {...props} color={resolveThemeColor(color, theme)} />
}
