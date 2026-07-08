import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

export default function PostPage() {
  const router = useRouter()
  const slug = router.query.slug as string
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    return <div>Post não encontrado</div>
  }

  return (
    <main className="mt-32 text-gray-100">
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
        <article className="max-w-screen-md bg-gray-600 rounded-lg overflow-hidden border border-gray-400">
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
        </article>
      </div>
    </main>
  )
}
