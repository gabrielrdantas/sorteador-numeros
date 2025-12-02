import LogoPNG from '@/assets/logo.png'
import Image from "next/image"

export function Header() {
    return (
        <div className="mx-auto max-w-[1100px] mt-[44px] md:mt-[76px]">
            <div className="gap-3">
                <Image src={LogoPNG} alt="Sorteador de números" />
            </div>
        </div>
    )
}