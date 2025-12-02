export type DrawConfig = {
  amount: number
  min: number
  max: number
  noRepeat: boolean
}

export type DrawErrorCode =
  | "AMOUNT_MUST_BE_POSITIVE"
  | "MIN_GREATER_THAN_MAX"
  | "AMOUNT_EXCEEDS_RANGE"

export type DrawResult =
  | { ok: true; numbers: number[] }
  | { ok: false; error: DrawErrorCode }

export function drawNumbers(config: DrawConfig): DrawResult {
  const { amount, min, max, noRepeat } = config

  if (amount <= 0) {
    return { ok: false, error: "AMOUNT_MUST_BE_POSITIVE" }
  }

  if (min > max) {
    return { ok: false, error: "MIN_GREATER_THAN_MAX" }
  }

  const range = max - min + 1

  if (noRepeat && amount > range) {
    return { ok: false, error: "AMOUNT_EXCEEDS_RANGE" }
  }

  const numbers: number[] = []

  if (noRepeat) {
    const pool = Array.from({ length: range }, (_, i) => min + i)

    for (let i = 0; i < amount; i++) {
      const index = Math.floor(Math.random() * pool.length)
      numbers.push(pool[index])
      pool.splice(index, 1)
    }
  } else {
    for (let i = 0; i < amount; i++) {
      const value = Math.floor(Math.random() * (max - min + 1)) + min
      numbers.push(value)
    }
  }

  return { ok: true, numbers }
}
