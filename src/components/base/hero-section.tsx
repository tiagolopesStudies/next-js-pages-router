import { ArrowRightIcon, ClockIcon, StoreIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export function HeroSection() {
  return (
    <section className="container relative flex items-center justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-80 md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-center">
          <h1 className="text-gray-100 text-heading-hg">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <ClockIcon className="text-cyan-100 size-4" />
                <span className="text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <StoreIcon className="text-cyan-100 size-4" />
                <span className="text-gray-200">
                  Acompanhe e otimize o seu negócio online
                </span>
              </div>
            </div>

            <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start">
              <Button className="rounded-full w-fit" asChild>
                <Link href="/">
                  Criar loja grátis <ArrowRightIcon />
                </Link>
              </Button>

              <p className="text-gray-300 text-body-xs">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-80 hidden md:h-full order-first md:order-last items-center justify-center md:flex">
          <Image
            unoptimized
            src="/hero-section.png"
            width={200}
            height={400}
            alt="Ilustração com ícones de tag, sacola e loja"
            className="h-full w-auto object-contain"
            draggable="false"
          />
        </div>
      </div>
    </section>
  )
}
