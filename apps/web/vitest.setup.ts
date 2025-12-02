import "@testing-library/jest-dom"
import { vi } from "vitest"
import React from "react"

// mock de ResizeObserver que já combinamos
class ResizeObserver {
  callback: ResizeObserverCallback

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback
  }

  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal("ResizeObserver", ResizeObserver)


vi.mock("next/image", () => {
  return {
    default: (props: any) => {
      return React.createElement("img", props)
    },
  }
})
