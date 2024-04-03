export function shallowObjectClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return {} as unknown as T
  }

  const clonedObj: Partial<T> = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = obj[key]
    }
  }
  return clonedObj as T
}
