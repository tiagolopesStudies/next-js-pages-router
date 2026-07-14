import { allPosts, type Post } from 'contentlayer/generated'
import type { GetStaticProps } from 'next'
import { BlogList } from '@/components/blog/blog-list'

interface BlogPageProps {
  posts: Post[]
}

export default function BlogPage({ posts }: BlogPageProps) {
  return <BlogList posts={posts} />
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return {
    props: {
      posts: sortedPosts
    }
  }
}
