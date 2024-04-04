import { describe, expect, it } from 'vitest'
import { deepObjectClone } from '../deepObjectClone'

describe('deepClone', () => {
  it('should return an empty array if input is null', () => {
    const input = null
    const result = deepObjectClone(input)
    expect(result).toEqual(null)
  })

  it('should return an empty array if input is a number', () => {
    const input = 10
    const result = deepObjectClone(input)
    expect(result).toEqual(input)
  })

  it('should return an empty array if input is a string', () => {
    const input = 'Hello'
    const result = deepObjectClone(input)
    expect(result).toEqual(input)
  })

  it('should return an empty array if input is an array', () => {
    const input = ['Hello', 'world']
    const result = deepObjectClone(input)
    expect(result).toEqual(input)
  })

  it('should clone deeply nested objects', () => {
    const input = { level1: { level2: { name: 'John' } } }
    const result = deepObjectClone(input)
    expect(result).toEqual(input)
    expect(result).not.toBe(input)
    expect(result.level1).not.toBe(input.level1)
    expect(result.level1.level2).not.toBe(input.level1.level2)
  })

  it('should clone arrays within objects', () => {
    const input = { names: ['John', 'Jane'], ages: [30, 25] }
    const result = deepObjectClone(input)
    expect(result).toEqual(input)
    expect(result.names).not.toBe(input.names)
    expect(result.ages).not.toBe(input.ages)
  })

  it('should handle Date objects within cloned objects', () => {
    const date = new Date()
    const input = { event: { date } }
    const result = deepObjectClone(input)
    expect(result).toEqual(input)
    expect(result.event.date).toEqual(date)
    expect(result.event.date).not.toBe(date)
  })
})
