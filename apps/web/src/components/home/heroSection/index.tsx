import { RandomNumberForm } from "@/components/sorter"
import { QuestionsList } from "@/components/home/questionList"

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pt-[44px] pb-16 md:pt-[76px] md:flex justify-between">
        <div className="flex-1 w-[500px]">
            <p
                className="
                    font-overline 
                    text-[16px]
                    font-bold 
                    leading-[150%] 
                    bg-gradient-to-r from-[#D9D9D9] to-[#3D3D3D]
                    bg-clip-text text-transparent
                    uppercase
                    md:mb-[12px]
                "
            >
                Online - gratuito
            </p>

            <h1
                className="
                    font-sora
                    font-extrabold
                    text-[48px]
                    leading-[120%]
                    tracking-[-0.04em]
                    uppercase
                    md:text-[72px]
                    md:leading-[130%]
                    md:mb-[38px]
                "
        >
            Sorteador de números
            </h1>

            <div className="flex-1 hidden md:block">
                <QuestionsList />
            </div>
        </div>
        <div className="flex-1 md:pt-[40px]">
            <div className="mb-6 md:mb-[40px]">
                <h2
                    className="
                    block
                    font-robotoFlex 
                    font-bold 
                    text-[20px] 
                    leading-[150%] 
                    text-[#FFF]
                    md:mb-[2px]
                    "
                >
                    QUERO SORTEAR:
                </h2>
                <p
                    className="
                    block
                    font-robotoFlex 
                    font-medium 
                    text-[14px] 
                    leading-[150%] 
                    text-[#C7C9CC]
                    "
                >
                    Defina o intervalo e a quantidade de números, clique em
                    &quot;Sortear&quot; e veja os resultados na tela. É rápido e
                    fácil!
                </p>
            </div>

            <RandomNumberForm />
        </div>

        <div className="mt-10 md:hidden">
            <QuestionsList />
        </div>
    </section>
  )
}
