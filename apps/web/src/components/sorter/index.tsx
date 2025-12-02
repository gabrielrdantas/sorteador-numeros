"use client"

import { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useRandomNumberDraw } from "@/hooks/random-number-draw"
import { ResultPanel } from "@/components/sorter/resultPanel"

export function RandomNumberForm() {
  const {
    amount,
    setAmount,
    min,
    setMin,
    max,
    setMax,
    noRepeat,
    setNoRepeat,
    results,
    error,
    handleResetResults,
    draw,
  } = useRandomNumberDraw()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    draw()
  }

  return (
   <div className="space-y-6">

    {results.length === 0 ?
    <form
      onSubmit={handleSubmit}
      className="space-y-6 shadow-lg"
    >
      <div className="grid grid-cols-3 gap-3 w-[282px]">
        <div className="space-y-2">
          <Label
            className="
              block
              font-robotoFlex 
              font-bold 
              text-[16px] 
              leading-[150%] 
              text-[#C7C9CC]
              md:mb-[8px]
              text-center
            "
          >
            NÚMEROS
          </Label>
          <Input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="
              font-sora 
              font-bold 
              text-[32px] 
              leading-[150%] 
              text-[#FFF]
              border-0
              h-14
              bg-[#111012]
              text-center
              text-2xl
            "
          />
        </div>

        <div className="space-y-2">
          <Label className="
            block
            font-robotoFlex 
            font-bold 
            text-[16px] 
            leading-[150%] 
            text-[#C7C9CC]
            md:mb-[8px]
            text-center
          "
          >
            DE
          </Label>
          <Input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="
              font-sora 
              font-bold 
              text-[32px] 
              leading-[150%] 
              text-[#FFF]
              border-0
              h-14
              bg-[#111012]
              text-center
              text-2xl
            "
          />
        </div>

        <div className="space-y-2">
           <Label className="
            block
            font-robotoFlex 
            font-bold 
            text-[16px] 
            leading-[150%] 
            text-[#C7C9CC]
            md:mb-[8px]
            text-center
          "
          >
            DE
          </Label>
          <Input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="
              font-sora 
              font-bold 
              text-[32px] 
              leading-[150%] 
              text-[#FFF]
              border-0
              h-14
              bg-[#111012]
              text-center
              text-2xl
            "
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Switch checked={noRepeat} onCheckedChange={setNoRepeat} />
        <span
          className="
            font-robotoFlex 
            font-medium 
            text-[14px] 
            leading-[150%] 
            text-[#FFF]
          ">
          Não repetir número
        </span>
      </div>

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

      <Button
        type="submit"
        className="
          bg-[#24222E]
          font-robotoFlex 
          font-bold 
          text-[16px] 
          leading-[150%] 
          text-[#FFF]
          block
          h-[55px]
          w-[100%]
        "
      >
        SORTEAR&nbsp; →
      </Button>
    </form>
    : null }
    <ResultPanel results={results} onDrawAgain={draw} />
    {results.length > 0 ? <Button
        type="button"
        onClick={handleResetResults}
        className="
          bg-[#24222E]
          font-robotoFlex 
          font-bold 
          text-[16px] 
          leading-[150%] 
          text-[#FFF]
          block
          h-[55px]
          w-[100%]
        "
      >
        &larr;&nbsp; Voltar
      </Button>
    : null}
  </div>
  )
}
