import { ArrowRightIcon, StoreIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90 pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-300 rounded-full w-fit">
        <StoreIcon className="text-cyan-100" />
      </div>
      <div className="relative container">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-sans text-gray-100 text-balance text-heading-xl">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button variant="primary" className="mt-4" asChild>
            <Link href="/">
              Criar loja grátis <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
