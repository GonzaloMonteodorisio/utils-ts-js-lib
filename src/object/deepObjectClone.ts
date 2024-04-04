/*
export function deepObjectClone<T>(obj: T): T {
  // Si obj no es estrictamente un objeto o es null, retornamos un objeto vacío cast como T.
  // Aquí asumimos que el uso de "object" se refiere a tipos de objeto no primitivos excluyendo null.
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return {} as unknown as T
  }

  // Creamos un contenedor para el objeto clonado. Necesitamos utilizar Partial<T> y luego castear a T porque
  // durante la construcción, no podemos garantizar que se cumplan todas las propiedades de T.
  const clonedObj: Partial<T> = {}

  // Usamos keyof T para asegurar que solo iteramos sobre las propiedades que existen en T.
  // Esto evita la necesidad de usar "any" y mantiene la seguridad de tipos.
  Object.keys(obj).forEach((key) => {
    const typedKey = key as keyof T
    const value = obj[typedKey]

    if (typeof value === 'object' && value !== null) {
      // Llamada recursiva para clonar objetos dentro del objeto principal.
      // Aquí usamos un cast forzado para manejar el caso de arrays y objetos.
      clonedObj[typedKey] = deepObjectClone(value as unknown as T[keyof T])
    } else {
      // Si no es un objeto, simplemente copiamos el valor.
      clonedObj[typedKey] = value
    }
  })

  return clonedObj as T
}
*/

type Primitive = string | number | boolean | bigint | symbol | undefined | null
type Clonable = object | Primitive

function isPrimitive(value: unknown): value is Primitive {
  return Object(value) !== value
}

function isDate(value: unknown): value is Date {
  return value instanceof Date
}

function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

function isObject(value: unknown): value is Record<string, unknown> {
  return !isPrimitive(value) && !isArray(value) && !isDate(value)
}

export function deepObjectClone<T extends Clonable>(obj: T): T {
  if (isPrimitive(obj) || obj === null) {
    return obj
  }

  if (isDate(obj)) {
    return new Date(obj.getTime()) as T
  }

  if (isArray(obj)) {
    // Aserción de tipo para cada elemento como Clonable antes de pasar a deepObjectClone
    return obj.map((item) => deepObjectClone(item as Clonable)) as T
  }

  if (isObject(obj)) {
    const objCopy = Object.keys(obj).reduce<Record<string, unknown>>((acc, key) => {
      const value = obj[key]
      // Asegura que la clave y el valor sean tratados como Clonable
      acc[key] = deepObjectClone(value as Clonable)
      return acc
    }, {})
    return objCopy as T
  }

  // Fallback para tipos no manejados, aunque en la práctica, todos los casos deberían estar cubiertos.
  return obj
}
