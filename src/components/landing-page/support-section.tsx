import { HeartHandshakeIcon, PaintbrushVerticalIcon, StoreIcon } from 'lucide-react'

export function SupportSection() {
  return (
    <section className="relative pb-8 md:py-10 bg-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container relative flex flex-col items-center gap-12">
        <h2 className="font-sans text-balance text-center text-heading-lg text-gray-100">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Primeiro card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <PaintbrushVerticalIcon className="h-6 w-4 text-white" />
            </div>

            <strong className="text-heading-sm text-gray-100">
              Personalize seu site
            </strong>
            <p className="text-body-sm text-gray-200">
              Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua
              cara.
            </p>
          </div>

          {/* Segundo card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex size-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
              <StoreIcon className="h-6 w-4 text-white" />
            </div>

            <strong className="text-heading-sm text-gray-100">
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Não importa a loja, o Site.Set permite que você insira qualquer link de
              afiliado
            </p>
          </div>

          {/* Terceiro card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <HeartHandshakeIcon className="h-6 w-4 text-white" />
            </div>

            <strong className="text-heading-sm text-gray-100">
              Receba suporte amigável
            </strong>
            <p className="text-body-sm text-gray-200">
              Nossa equipe estará sempre pronta para te atender e ajudar no que for
              preciso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
