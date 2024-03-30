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
// export function takeOut(words: string[], removed: string) {
//   const newWords: string[] = words.filter((word) => word !== removed)
// }
