import { AnimatedResult } from "@/components/sorter/animatedResult"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Reload from '@/assets/reload.svg'

type ResultPanelProps = {
  results: number[]
  onDrawAgain: () => void
  drawCount?: number   // opcional, se quiser reiniciar animação até com o mesmo número
}

export function ResultPanel({ results, onDrawAgain, drawCount }: ResultPanelProps) {

  return (
    <section
    className={cn(
        "mt-8 rounded-2xl border border-white/5 bg-[#121118] px-6 py-5",
        results.length === 0 && "invisible"
    )}
    >
      <header className="mb-4 text-center">
        <p className="font-robotoFlex text-xs font-semibold tracking-[0.2em] uppercase text-[#FFFFFFCC]">
          RESULTADO DO SORTEIO
        </p>
      </header>

      {results.length > 0 ? (
        <div className="flex flex-col items-center gap-6">

            <div className="flex items-center gap-6"> 
            {
               results?.map(item => {
                  return ( 
                        <AnimatedResult
                            value={item}
                            animationKey={drawCount ?? item}
                        />
                    )
                })
            }
          </div>

          <button
            type="button"
            onClick={onDrawAgain}
            className="
              mt-2 h-12 w-full rounded-xl bg-[#2A2536]
              text-xs font-semibold tracking-[0.25em] uppercase
              text-white hover:bg-[#352F45]
              flex items-center justify-center gap-2
            "
          >
            SORTEAR NOVAMENTE <Image src={Reload} alt="Sorteador de números" />
          </button>
        </div>
      ) : (
        <p className="text-center text-sm text-zinc-500">
          Nenhum número sorteado ainda.
        </p>
      )}
    </section>
  )
}
