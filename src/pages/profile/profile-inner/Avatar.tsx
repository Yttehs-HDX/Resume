import { YStack, Image, styled } from 'tamagui'
import { BodyText, SecondaryText } from '../../../components/common/Text'

/**
 * Circular avatar container
 * Material You design with elevation and smooth animations
 */
const AvatarContainer = styled(YStack, {
  width: 120,
  height: 120,
  borderRadius: 60,
  overflow: 'hidden',
  backgroundColor: "surfaceContainerHighest",
  borderWidth: 4,
  borderColor: "primaryContainer hover:primary",
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15) hover:0px 4px 8px rgba(0, 0, 0, 0.25)',
  scale: '1 hover:1.05 press:0.98',
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
  }
})

/**
 * Profile header container
 * Provides spacing and alignment for profile content
 */
const ProfileContainer = styled(YStack, {
  alignItems: 'center',
  gap: "4",
  padding: "6",
  backgroundColor: "surfaceContainerHigh",
  borderRadius: "6",
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
})

/**
 * Name display text
 * Uses Material You typography with appropriate contrast
 */
const NameText = styled(BodyText, {
  fontSize: 28,
  fontWeight: '600',
  color: "onSurface",
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
  }
})

/**
 * Tagline text
 * Subtle positioning statement below the name
 */
const TaglineText = styled(SecondaryText, {
  fontSize: 15,
  lineHeight: "22px",
  textAlign: 'center',
  maxWidth: 520,
  paddingHorizontal: "4"
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
   * One-line positioning statement
   */
  tagline?: string
  
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
  tagline,
  nameVariant = 'display',
}: AvatarProps) {
  return (
    <ProfileContainer>
      <AvatarContainer size={size}>
        <Image
          src={avatarUrl}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </AvatarContainer>
      
      <NameText variant={nameVariant}>
        {fullName}
      </NameText>

      {tagline ? (
        <TaglineText>
          {tagline}
        </TaglineText>
      ) : null}
    </ProfileContainer>
  )
}
