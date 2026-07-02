import { allPosts } from 'contentlayer/generated'
import { useRouter } from 'next/router'
import { PostCard } from './post-card'
import { PostCardGrid } from './post-card-grid'
import { Search } from './search'

const posts = allPosts

export function BlogList() {
  const router = useRouter()
  const query = (router.query.q ?? '') as string
  const pageTitle =
    query.trim() !== ''
      ? `Resultados de busca para "${query.trim()}"`
      : 'Dicas e estratégias para impulsionar o seu negócio'

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300 uppercase">
              Blog
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </div>
      </header>

      <PostCardGrid>
        {posts.map((post) => (
          <PostCard
            key={post._id}
            slug={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            imageUrl={post.image}
            author={{
              name: post.author.name,
              avatarUrl: post.author.avatar
            }}
          />
        ))}
      </PostCardGrid>
    </div>
  )
}
