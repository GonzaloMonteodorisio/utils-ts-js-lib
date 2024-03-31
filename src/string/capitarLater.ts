export function capitalLater(word: string): string {
  if (typeof word === 'string') {
    const splittedString = word.split(' ')
    return splittedString
      .map((str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
      })
      .join(' ')
  } else {
    return ''
  }
}
