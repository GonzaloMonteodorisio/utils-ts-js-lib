import { describe, expect, it } from 'vitest'
import { shallowObjectClone } from '../shallowObjectClone'

describe('shallowClone', () => {
  it('should return an empty object if input is null', () => {
    const input = null
    const result = shallowObjectClone(input)
    expect(result).toEqual({})
  })

  it('should return an empty object if input is not an object', () => {
    const input = 10
    const result = shallowObjectClone(input)
    expect(result).toEqual({})
  })

  it('should return a shallow clone of the object', () => {
    const input = { name: 'John', age: 30 }
    const result = shallowObjectClone(input)
    expect(result).toEqual(input)
    expect(result).not.toBe(input) // Verifica que el objeto clonado no sea el mismo objeto de referencia
  })
})