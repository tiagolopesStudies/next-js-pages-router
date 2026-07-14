import type { Post } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Avatar } from '@/components/blog/avatar'
import { Markdown } from '@/components/blog/markdown'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { env } from '@/env'
import { useShare } from '@/hooks/use-share'

interface PostContentProps {
  post: Post
}

export function PostContent({ post }: PostContentProps) {
  const router = useRouter()
  const slug = router.query.slug as string
  const { shareButtons } = useShare({
    url: `${env.APP_URL}/blog/${slug}`,
    title: post?.title,
    text: post?.description
  })

  if (!post) {
    return <div>Post não encontrado</div>
  }

  return (
    <main className="pt-20 text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-blue-200">{post.title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border border-gray-400">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                unoptimized
                draggable="false"
              />
            </figure>

            <header className="p-4 pb-0 mt-8 md:pt-6 md:px-6 md:mt-12 lg:pt-12 lg:px-12">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-lg lg:text-heading-xl">
                {post.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image src={post.author.avatar} alt={post.author.name} size="sm" />
                <Avatar.Content>
                  <Avatar.Title>{post.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em:
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
              <Markdown content={post.body.raw} />
            </div>
          </article>

          <aside className="space-y-6">
            <div>
              <h2 className="hidden md:block mb-4 text-heading-xs">Compartilhar</h2>

              <div className="flex justify-center md:justify-between md:flex-col gap-2">
                {shareButtons.map((shareButton) => (
                  <Button
                    key={shareButton.name}
                    type="button"
                    variant="outline"
                    className="w-fit md:w-full justify-start gap-2"
                    onClick={() => shareButton.action()}
                  >
                    {shareButton.icon}
                    <span className="hidden md:block">{shareButton.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
