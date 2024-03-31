import { describe, expect, it } from 'vitest'

import { isArrayOfStrings } from '../arry'

describe('isArrayOfStrings', () => {
  it('isArrayOfStrings(["apple", "grape", "banana", "orange"]) should be true', () => {
    const result = isArrayOfStrings(['apple', 'grape', 'banana', 'orange'])
    expect(result).toBe(true)
  })
  it('isArrayOfStrings([]) should be true', () => {
    const result = isArrayOfStrings([])
    expect(result).toBe(true)
  })
  it('isArrayOfStrings(50) should be false', () => {
    // @ts-expect-error we want to test the undefined case
    const result = isArrayOfStrings(50)
    expect(result).toBe(false)
  })
  it('isArrayOfStrings({}) should be false', () => {
    // @ts-expect-error we want to test the undefined case
    const result = isArrayOfStrings({})
    expect(result).toBe(false)
  })
  it('isArrayOfStrings(new date()) should be false', () => {
    // @ts-expect-error we want to test the undefined case
    const result = isArrayOfStrings(new Date())
    expect(result).toBe(false)
  })
})
