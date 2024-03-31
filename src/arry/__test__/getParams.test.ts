import { describe, expect, it } from 'vitest'
import { getParams } from '../arry'

describe('getParams', () => {
  it('get([`papa`,`banana`],`papa`)', () => {
    const result = getParams([`papa`, `banana`], `papa`)
    expect(result).toBe(true)
  })
  it('get([`papa`,`banana`],`papa`)', () => {
    // @ts-expect-error we want to test the undefined case
    const result = getParams([`papa`, `banana`], false)
    expect(result).toBe(false)
  })
  it('get(new date(),false)', () => {
    // @ts-expect-error we want to test the undefined case
    const result = getParams(new Date(), false)
    expect(result).toBe(false)
  })
})
