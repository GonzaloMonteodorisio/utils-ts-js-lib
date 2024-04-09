export function equalityBetwenn<
  T extends Record<string, unknown>,
  V extends Record<string, unknown>
>(obj1: T, obj2: V): boolean {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}

// export function combine<T extends object, U extends object>(
//   obj1: T,
//   obj2: U
// ): T & U {
//   let combined= []

//   if (typeof obj1 === 'object' && typeof obj2 === 'object') {
//     return (combined = [...obj1, ...obj2])
//   } else {
//     return combined
//   }
// }
