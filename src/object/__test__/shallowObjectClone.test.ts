import { describe, expect, it } from 'vitest'
import { shallowObjectClone } from '../shallowObjectClone'

describe('shallowClone', () => {
  it('should return an empty object if input is null', () => {
    const input = null
    const result = shallowObjectClone(input)
    expect(result).toEqual({})
  })

  it('should return an empty object if input is a number', () => {
    const input = 10
    const result = shallowObjectClone(input)
    expect(result).toEqual({})
  })

  it('should return an empty object if input is a string', () => {
    const input = 'Hello'
    const result = shallowObjectClone(input)
    expect(result).toEqual({})
  })

  it('should return an empty object if input is an array', () => {
    const input = ['Hello', 'lucky']
    const result = shallowObjectClone(input)
    expect(result).toEqual({})
  })

  it('should return an empty object if input is a Date', () => {
    const input = new Date()
    const result = shallowObjectClone(input)
    expect(result).toEqual({})
  })

  it('should return a shallow clone of the object', () => {
    const input = { name: 'John', age: 30 }
    const result = shallowObjectClone(input)
    expect(result).toEqual(input)
    expect(result).not.toBe(input) // 
    // Verify that the cloned object is not the same reference object
  })
})