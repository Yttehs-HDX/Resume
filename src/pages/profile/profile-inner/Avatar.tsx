import { YStack, Image, styled } from 'tamagui'
import { BodyText } from '../../../components/common/Text'

/**
 * Circular avatar container
 * Material You design with elevation and smooth animations
 */
const AvatarContainer = styled(YStack, {
  width: 120,
  height: 120,
  borderRadius: 60,
  overflow: 'hidden',
  backgroundColor: '$surfaceContainerHighest',
  borderWidth: 4,
  borderColor: '$primaryContainer',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.15,
  shadowRadius: 8,
  elevation: 4,
  
  variants: {
    size: {
      small: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
      },
      medium: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
      },
      large: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 5,
      },
    },
  } as const,
  
  defaultVariants: {
    size: 'medium',
  },
  
  hoverStyle: {
    scale: 1.05,
    borderColor: '$primary',
    shadowOpacity: 0.25,
  },
  
  pressStyle: {
    scale: 0.98,
  },
})

/**
 * Profile header container
 * Provides spacing and alignment for profile content
 */
const ProfileContainer = styled(YStack, {
  alignItems: 'center',
  gap: '$4',
  padding: '$6',
  backgroundColor: '$surfaceContainerHigh',
  borderRadius: '$6',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
})

/**
 * Name display text
 * Uses Material You typography with appropriate contrast
 */
const NameText = styled(BodyText, {
  fontSize: 28,
  fontWeight: '600',
  color: '$onSurface',
  textAlign: 'center',
  letterSpacing: -0.5,
  
  variants: {
    variant: {
      display: {
        fontSize: 28,
        fontWeight: '600',
      },
      title: {
        fontSize: 24,
        fontWeight: '500',
      },
      subtitle: {
        fontSize: 20,
        fontWeight: '500',
      },
    },
  } as const,
  
  defaultVariants: {
    variant: 'display',
  },
})

/**
 * Avatar component props
 */
export interface AvatarProps {
  /**
   * Full name (primary display)
   */
  fullName: string
  
  /**
   * Avatar image URL
   */
  avatarUrl: string
  
  /**
   * Avatar size variant
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
  
  /**
   * Name display variant
   * @default 'display'
   */
  nameVariant?: 'display' | 'title' | 'subtitle'
}

/**
 * Avatar - Material You compliant profile display component
 * 
 * Features:
 * - Circular avatar with elevation and border
 * - Smooth hover animations
 * - Responsive sizing variants
 * - MD3 color scheme integration
 * - Proper typography hierarchy
 * 
 */
export function Avatar({
  fullName,
  avatarUrl,
  size = 'medium',
  nameVariant = 'display',
}: AvatarProps) {
  return (
    <ProfileContainer>
      <AvatarContainer size={size}>
        <Image
          source={{ uri: avatarUrl }}
          width="100%"
          height="100%"
        />
      </AvatarContainer>
      
      <NameText variant={nameVariant}>
        {fullName}
      </NameText>
    </ProfileContainer>
  )
}
