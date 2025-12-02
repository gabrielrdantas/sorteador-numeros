import ChatIcon from '@/assets/chat-icon.svg'
import Image from "next/image"


export function QuestionsList() {
  return (
    <ul className="space-y-6 md:space-y-9 w-[386px]">
      <li
        className="
          flex
          font-robotoFlex 
          font-medium 
          text-[12px]
          leading-[150%]
          text-[#C7C9CC]
          items-start
        "
      >
        <Image className="mr-[5px]" src={ChatIcon} alt="Imagem do FAQ" />
        
        <span>
          <span
            className="
              block
              flex
              font-robotoFlex 
              font-medium 
              text-[14px] 
              leading-[150%] 
              text-[#C58DE7]
            "
          >
            Como funciona o sorteador de números?
          </span>
          O sorteador utiliza um algoritmo de geração aleatória para criar
          números dentro do intervalo especificado pelo usuário.
        </span>
      </li>

      <li
        className="
          flex
          font-robotoFlex 
          font-medium 
          text-[12px]
          leading-[150%]
          text-[#C7C9CC]
          items-start
        "
      >
        <Image className="mr-[5px]" src={ChatIcon} alt="Imagem do FAQ" />
        <span>
          <span
            className="
              block
              flex
              font-robotoFlex 
              font-medium 
              text-[14px] 
              leading-[150%] 
              text-[#C58DE7]
            "
          >
            Posso escolher o intervalo dos números?
          </span>
            Sim, você pode definir os valores mínimo e máximo para o intervalo dos
            números sorteados.
        </span>
      </li>
    </ul>
  )
}
