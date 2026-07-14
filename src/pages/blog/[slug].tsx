import { allPosts, type Post } from 'contentlayer/generated'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { PostContent } from '@/components/blog/post'

interface PostPageProps {
  post: Post
}

export default function PostPage({ post }: PostPageProps) {
  return <PostContent post={post} />
}

export const getStaticPaths: GetStaticPaths = () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const recentPosts = sortedPosts.slice(0, 5)
  const paths = recentPosts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = (context) => {
  const { slug } = context.params as { slug: string }
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}
