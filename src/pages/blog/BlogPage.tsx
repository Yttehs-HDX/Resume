import { PageLayout } from '../../components/frame/layout'
import { MasonryLayout } from '../../components/common'
import { BlogCard } from './BlogCard'
import blogData from '../../data/blog.json'

/**
 * Blog page - Displays blog posts with title, description, and publish date
 * Uses masonry layout for better visual distribution
 */
export function BlogPage() {
  return (
    <PageLayout>
      <MasonryLayout>
        {blogData.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </MasonryLayout>
    </PageLayout>
  )
}
