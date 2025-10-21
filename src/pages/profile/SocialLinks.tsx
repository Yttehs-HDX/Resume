import { XStack, YStack, Text } from 'tamagui'
import { Mail, Github, MessageSquare, Globe } from '@tamagui/lucide-icons'
import { Card } from '../../components/common/Card'

interface SocialLinksProps {
  social: {
    email?: string[]
    github?: {
      username: string
      url: string
    }
    coolapk?: {
      username: string
      url: string
    }
    blog?: {
      url: string
    }
  }
}

/**
 * Social links component - Displays user's social media and contact information
 * Following Material Design 3 principles with proper spacing and elevation
 */
export function SocialLinks({ social }: SocialLinksProps) {
  return (
    <Card
      width="100%"
      flexDirection="column"
      gap="$3"
    >
      <Text fontSize={22} fontWeight="500" color="$onSurface" marginBottom="$2">
        联系方式
      </Text>

      <YStack gap="$3" width="100%">
        {/* Email Section */}
        {social.email && social.email.length > 0 && (
          <YStack gap="$2" width="100%">
            {social.email.map((email, index) => (
              <a
                key={`email-${index}`}
                href={`mailto:${email}`}
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <XStack
                  alignItems="center"
                  gap="$4"
                  paddingVertical="$3"
                  paddingHorizontal="$4"
                  backgroundColor="$surfaceContainer"
                  borderRadius="$3"
                  cursor="pointer"
                  hoverStyle={{
                    backgroundColor: '$surfaceContainerHigh',
                  }}
                  pressStyle={{
                    backgroundColor: '$surfaceContainerHighest',
                    scale: 0.98,
                  }}
                  width="100%"
                >
                  <Mail size={24} color="$primary" />
                  <YStack flex={1}>
                    <Text fontSize={14} fontWeight="500" color="$onSurface">
                      邮箱
                    </Text>
                    <Text fontSize={14} color="$onSurfaceVariant">
                      {email}
                    </Text>
                  </YStack>
                </XStack>
              </a>
            ))}
          </YStack>
        )}

        {/* GitHub Section */}
        {social.github && (
          <a
            href={social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <XStack
              alignItems="center"
              gap="$4"
              paddingVertical="$3"
              paddingHorizontal="$4"
              backgroundColor="$surfaceContainer"
              borderRadius="$3"
              cursor="pointer"
              hoverStyle={{
                backgroundColor: '$surfaceContainerHigh',
              }}
              pressStyle={{
                backgroundColor: '$surfaceContainerHighest',
                scale: 0.98,
              }}
              width="100%"
            >
              <Github size={24} color="$primary" />
              <YStack flex={1}>
                <Text fontSize={14} fontWeight="500" color="$onSurface">
                  GitHub
                </Text>
                <Text fontSize={14} color="$onSurfaceVariant">
                  @{social.github.username}
                </Text>
              </YStack>
            </XStack>
          </a>
        )}

        {/* Coolapk Section */}
        {social.coolapk && (
          <a
            href={social.coolapk.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <XStack
              alignItems="center"
              gap="$4"
              paddingVertical="$3"
              paddingHorizontal="$4"
              backgroundColor="$surfaceContainer"
              borderRadius="$3"
              cursor="pointer"
              hoverStyle={{
                backgroundColor: '$surfaceContainerHigh',
              }}
              pressStyle={{
                backgroundColor: '$surfaceContainerHighest',
                scale: 0.98,
              }}
              width="100%"
            >
              <MessageSquare size={24} color="$primary" />
              <YStack flex={1}>
                <Text fontSize={14} fontWeight="500" color="$onSurface">
                  酷安
                </Text>
                <Text fontSize={14} color="$onSurfaceVariant">
                  @{social.coolapk.username}
                </Text>
              </YStack>
            </XStack>
          </a>
        )}

        {/* Blog Section */}
        {social.blog && (
          <a
            href={social.blog.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <XStack
              alignItems="center"
              gap="$4"
              paddingVertical="$3"
              paddingHorizontal="$4"
              backgroundColor="$surfaceContainer"
              borderRadius="$3"
              cursor="pointer"
              hoverStyle={{
                backgroundColor: '$surfaceContainerHigh',
              }}
              pressStyle={{
                backgroundColor: '$surfaceContainerHighest',
                scale: 0.98,
              }}
              width="100%"
            >
              <Globe size={24} color="$primary" />
              <YStack flex={1}>
                <Text fontSize={14} fontWeight="500" color="$onSurface">
                  博客
                </Text>
                <Text fontSize={14} color="$onSurfaceVariant">
                  {social.blog.url}
                </Text>
              </YStack>
            </XStack>
          </a>
        )}
      </YStack>
    </Card>
  )
}
