import { describe, expect, it, test } from 'vitest'
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
  test('should sum every single number by the given accesor', () => {
    const dataObj = [
      { value: 2 },
      { value: 3 }
    ]
    // @ts-expect-error we want to test the undefined case
    const actual = equalityBetwenn(dataObj, {})
    expect(actual).toBe(false)
  })
  it('equalityBetwenn(10,2) retunr false', () => {
    // @ts-expect-error we want to test the undefined case
    const result = equalityBetwenn({},2)
    expect(result).toBe(false)
  })
  it('equalityBetwenn(10,2) retunr false', () => {
    // @ts-expect-error we want to test the undefined case
    const result = equalityBetwenn(true,2)
    expect(result).toBe(false)
  })
  test('should sum every single number by the given accesor', () => {
    const dataObj = [
      { value: 2 },
      { value: 3 }
    ]
    // @ts-expect-error we want to test the undefined case
    const actual = equalityBetwenn(dataObj, dataObj)
    expect(actual).toBe(true)
  })
  it('equalityBetwenn(10,2) retunr false', () => {
    // @ts-expect-error we want to test the undefined case
    const result = equalityBetwenn(2,{})
    expect(result).toBe(false)
  })
  test('should sum every single number by the given accesor', () => {
    const dataObj = [
      { value: 2 },
      { value: 3 }
    ]
    const dataObj2 = [
      { value: 2 },

    ]
    // @ts-expect-error we want to test the undefined case
    const actual = equalityBetwenn(dataObj, dataObj2)
    expect(actual).toBe(false)
  })
  test('should sum every single number by the given accesor', () => {
    const dataObj = [
      { value: 2 },
      { value: 3 }
    ]
    const dataObj2 = [
      { value: 2 },

    ]
    // @ts-expect-error we want to test the undefined case
    const actual = equalityBetwenn(dataObj2, dataObj)
    expect(actual).toBe(false)
  })
})
