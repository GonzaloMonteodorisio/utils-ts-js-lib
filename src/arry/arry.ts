export function isArrayOfStrings<T extends string[]>(params: T): boolean {
  if (typeof params !== 'object') {
    return false
  }
  if (!Array.isArray(params)) {
    return false
  }
  return params.every((param) => typeof param === 'string')
}
export function orderbyLongitude(words: string[]): string[] {
  let orderWrods: string[] = []
  if (isArrayOfStrings(words)) {
    orderWrods = words.sort()
  } else {
    orderWrods = []
  }
  return orderWrods
}
export function takeOut(words: string[], removed: string): string[] {
  let orderWords: string[] = []
  if (isArrayOfStrings(words) && typeof removed === 'string') {
    const index = words.indexOf(removed)
    if (index !== -1) {
      orderWords = words.filter((_, i) => i !== index)
    } else {
      orderWords = words.slice()
    }
    return orderWords
  } else {
    return (orderWords = [])
  }
}
export function getParams(words: string[], get: string): boolean {
  if (isArrayOfStrings(words) && typeof get === 'string') {
    for (let i = 0; i < words.length; i++) {
      if (words[i] === get) {
        return true
      }
    }
    return false
  } else {
    return false
  }
}
