import { YStack } from 'tamagui'
import { PageLayout } from '../../components/frame/layout'
import { BlogCard } from './BlogCard'
import blogData from '../../data/blog.json'

/**
 * Blog page - Displays blog posts with title, description, and publish date
 */
export function BlogPage() {
  return (
    <PageLayout>
      <YStack gap="$4" width="100%">
        {blogData.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </YStack>
    </PageLayout>
  )
}
