import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { RandomNumberForm } from "./"

describe("RandomNumberForm", () => {
  it("renderiza o botão SORTEAR e permite clicar", () => {
    render(<RandomNumberForm />)

    const button = screen.getByRole("button", { name: /sortear/i })
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
  })
})
