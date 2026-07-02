import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export function PostCard() {
  return (
    <Link
      href={`/blog`}
      className={clsx(
        'w-full max-w-2xl rounded-3xl border border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300',
        'hover:border-blue-300'
      )}
    >
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1">
            <span className="text-body-xs text-gray-300">20/12/2024</span>
          </div>

          <Image
            src="/primeiro-post.png"
            alt=""
            width={288}
            height={144}
            draggable="false"
            className="w-full h-40 object-cover object-center"
          />
        </div>

        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            Transformando seu negócio em uma loja virtual
          </h2>

          <p className="text-gray-300 text-body-sm line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio, ab a
            tenetur hic dolore consectetur cupiditate eius modi quod possimus et
            asperiores non vero provident ipsum magni reprehenderit culpa?
          </p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative size-5 md:size-6 overflow-hidden rounded-full border border-blue-200">
              <Image
                src="/customer-01.png"
                alt=""
                draggable="false"
                fill
                className="object-cover rounded-md"
              />
            </div>

            <span className="text-body-sm text-gray-300">Aspen Dokids</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
