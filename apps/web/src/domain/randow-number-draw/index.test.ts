import { describe, it, expect } from "vitest"
import { drawNumbers, type DrawResult } from "./"

function unwrapOk(result: DrawResult) {
  if (!result.ok) {
    throw new Error(`Esperado ok=true, mas veio erro: ${result.error}`)
  }
  return result.numbers
}

describe("drawNumbers (domínio)", () => {
  it("retorna a quantidade correta de números quando a config é válida (sem noRepeat)", () => {
    const result = drawNumbers({
      amount: 5,
      min: 1,
      max: 10,
      noRepeat: false,
    })

    const numbers = unwrapOk(result)

    expect(numbers).toHaveLength(5)
    for (const n of numbers) {
      expect(n).toBeGreaterThanOrEqual(1)
      expect(n).toBeLessThanOrEqual(10)
    }
  })

  it("retorna números únicos quando noRepeat = true", () => {
    const result = drawNumbers({
      amount: 5,
      min: 1,
      max: 10,
      noRepeat: true,
    })

    const numbers = unwrapOk(result)

    expect(numbers).toHaveLength(5)
    const uniqueCount = new Set(numbers).size
    expect(uniqueCount).toBe(5)
  })

  it("falha quando amount <= 0", () => {
    const result = drawNumbers({
      amount: 0,
      min: 1,
      max: 10,
      noRepeat: false,
    })

    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toBe("AMOUNT_MUST_BE_POSITIVE")
    }
  })

  it("falha quando min > max", () => {
    const result = drawNumbers({
      amount: 3,
      min: 10,
      max: 1,
      noRepeat: false,
    })

    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toBe("MIN_GREATER_THAN_MAX")
    }
  })

  it("falha quando noRepeat = true e amount > range disponível", () => {
    const result = drawNumbers({
      amount: 5,
      min: 1,
      max: 3, // range = 3
      noRepeat: true,
    })

    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toBe("AMOUNT_EXCEEDS_RANGE")
    }
  })
})
