import { describe, expect, it } from 'vitest'
import { equalityBetwenn } from '../equalityBetwenn'

describe('equalityBetwenn', () => {
  it('equalityBetwenn({},{}) retunr true', () => {
    const result = equalityBetwenn({}, {})
    expect(result).toBe(true)
  })
  it('equalityBetwenn([],[]) retunr true', () => {
    // @ts-expect-error we want to test the undefined case
    const result = equalityBetwenn({}, [])
    expect(result).toBe(true)
  })
  it('equalityBetwenn(10,2) retunr false', () => {
    // @ts-expect-error we want to test the undefined case
    const result = equalityBetwenn(10,2)
    expect(result).toBe(false)
  })
 
})