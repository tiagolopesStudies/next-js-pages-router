import clsx from 'clsx'
import { CircleX, SearchIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export function Search() {
  const router = useRouter()
  const query = (router.query.q ?? '') as string

  const handleSearch = useCallback(
    (event: React.SubmitEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (query.trim() !== '') {
        router.push(`/blog?q=${encodeURIComponent(query.trim())}`)
      }
    },
    [query, router]
  )

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value.trim()

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false
    })
  }

  function resetSearch() {
    router.push('/blog', undefined, {
      shallow: true,
      scroll: false
    })
  }

  return (
    <form className="relative group w-full md:w-60" onSubmit={handleSearch}>
      <SearchIcon
        className={clsx(
          'absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 size-4 transition-colors duration-200',
          'pointer-events-none group-focus-within:text-blue-300',
          query.trim() !== '' && 'text-blue-300'
        )}
      />

      <input
        type="text"
        placeholder="Buscar"
        onChange={handleQueryChange}
        className={clsx(
          'w-full md:w-60 h-10 pl-9 bg-transparent border border-gray-400 text-gray-100 rounded-md text-body-sm',
          'outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300',
          'placeholder:text-gray-300 placeholder:text-body-sm'
        )}
      />

      {query && (
        <CircleX
          className="absolute right-3 size-4 top-1/2 -translate-y-1/2 text-gray-300"
          onClick={resetSearch}
        />
      )}
    </form>
  )
}
