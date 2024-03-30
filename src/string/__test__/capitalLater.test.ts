import { describe, expect, it } from 'vitest'

import { capitalLater } from '../capitarLater'

describe('isArrayOfStrings', () => {
  it('isArrayOfStrings("coca cola") should be Coca Cola', () => {
    const result = capitalLater('coca cola')
    expect(result).toBe('Coca Cola')
  })
  it('isArrayOfStrings(1) should ""', () => {
    // @ts-expect-error we want to test the undefined case
    const result = capitalLater(1)
    expect(result).toBe('')
  })
})
