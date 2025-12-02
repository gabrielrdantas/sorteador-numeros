import { describe, it, expect } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useRandomNumberDraw } from "./"

describe("useRandomNumberDraw", () => {
  it("com valores padrão, draw() gera pelo menos um resultado", () => {
    const { result } = renderHook(() => useRandomNumberDraw())

    act(() => {
      result.current.draw()
    })

    expect(result.current.error).toBeNull()
    expect(result.current.results.length).toBeGreaterThan(0)
  })

  it("mostra erro quando campos não são números válidos", () => {
    const { result } = renderHook(() => useRandomNumberDraw())

    act(() => {
      result.current.setAmount("abc")
      result.current.setMin("1")
      result.current.setMax("10")
    })

    act(() => {
      result.current.draw()
    })

    expect(result.current.error).toBe(
      "Preencha todos os campos com números válidos.",
    )
    expect(result.current.results).toHaveLength(0)
  })

  it("mostra erro quando amount <= 0", () => {
    const { result } = renderHook(() => useRandomNumberDraw())

    act(() => {
      result.current.setAmount("0")
    })

    act(() => {
      result.current.draw()
    })

    expect(result.current.error).toBe(
      "A quantidade de números deve ser maior que zero.",
    )
    expect(result.current.results).toHaveLength(0)
  })

  it("mostra erro quando min > max", () => {
    const { result } = renderHook(() => useRandomNumberDraw())

    act(() => {
      result.current.setAmount("3")
      result.current.setMin("10")
      result.current.setMax("1")
    })

    act(() => {
      result.current.draw()
    })

    expect(result.current.error).toBe(
      "O valor mínimo não pode ser maior que o máximo.",
    )
    expect(result.current.results).toHaveLength(0)
  })
})
