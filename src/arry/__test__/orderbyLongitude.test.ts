/* eslint-disable @typescript-eslint/quotes */
import { describe, expect, it } from 'vitest'

import { orderbyLongitude } from './../arry'
describe('orderbyLongitude', () => {
  it('orderbyLongitude(["apple", "banana"]) should be ["apple", "grape", "banana", "orange"]', () => {
    const result = orderbyLongitude(['banana', 'apple'])
    expect(result).toBe(['apple', 'banana'])
  })
  it('isArrayOfStrings([]) should be true', () => {
    const result = orderbyLongitude([])
    expect(result).toBe([])
  })
})
