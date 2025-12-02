"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    className={cn(
      // trilho
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent " +
        // estado default (desligado) – cinza
        "bg-[#E4E4E7] data-[state=unchecked]:bg-[#E4E4E7] " +
        // estado ligado – roxo em degradê
        "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#C58DE7] data-[state=checked]:to-[#A855F7] " +
        // transições / disabled
        "transition-colors disabled:cursor-not-allowed disabled:opacity-60",
      className
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        // bolinha branca
        "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-sm ring-0 transition-transform",
        // posição esquerda / direita
        "data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-4"
      )}
    />
  </SwitchPrimitives.Root>
))

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
