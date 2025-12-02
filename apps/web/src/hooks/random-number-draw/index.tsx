import { useCallback, useState } from "react"
import { drawNumbers } from "@/domain/randow-number-draw"

export function useRandomNumberDraw() {
  const [amount, setAmount] = useState("2")
  const [min, setMin] = useState("1")
  const [max, setMax] = useState("100")
  const [noRepeat, setNoRepeat] = useState(true)
  const [results, setResults] = useState<number[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleResetResults = () => {
    setResults([])
  }

  const draw = useCallback(() => {
    setError(null)

    const amountNum = parseInt(amount, 10)
    const minNum = parseInt(min, 10)
    const maxNum = parseInt(max, 10)

    if (
      Number.isNaN(amountNum) ||
      Number.isNaN(minNum) ||
      Number.isNaN(maxNum)
    ) {
      setError("Preencha todos os campos com números válidos.")
      setResults([])
      return
    }

    const result = drawNumbers({
      amount: amountNum,
      min: minNum,
      max: maxNum,
      noRepeat,
    })

    if (!result.ok) {
      switch (result.error) {
        case "AMOUNT_MUST_BE_POSITIVE":
          setError("A quantidade de números deve ser maior que zero.")
          break
        case "MIN_GREATER_THAN_MAX":
          setError("O valor mínimo não pode ser maior que o máximo.")
          break
        case "AMOUNT_EXCEEDS_RANGE":
          setError(
            "Não é possível sortear tantos números únicos nesse intervalo.",
          )
          break
      }
      setResults([])
      return
    }

    setResults(result.numbers)
  }, [amount, min, max, noRepeat])

  return {
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
    draw,
    handleResetResults
  }
}
