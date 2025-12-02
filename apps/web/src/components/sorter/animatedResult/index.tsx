"use client"

type AnimatedResultProps = {
  value: number
  animationKey?: string | number
}

export function AnimatedResult({
  value,
  animationKey,
}: AnimatedResultProps) {
  return (
    <div className="flex flex-col items-center gap-3 py-4">
      {/* esse key força o remount pra reiniciar a animação */}
      <div
        key={animationKey ?? value}
        className="
          result-token
          flex h-12 w-12 items-center justify-center
          rounded-[12px] bg-[#C58DE7]
          text-lg font-semibold text-[#050509]
        "
      >
        {value}
      </div>
    </div>
  )
}
