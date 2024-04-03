import { payingSymbols, removeDuplicates, wildSymbol } from './utils'

export function sequenceValidation(sequence: number[]) {
  //check the minimum to match a line
  if (sequence.length < 3) return false

  //remove the wild symbol from the sequence
  const sequenceWithoutWildSymbol = sequence.filter(
    (number) => number !== wildSymbol,
  )

  //if sequence have a no paying symbols, the sequence is invalid
  if (
    sequenceWithoutWildSymbol.length > 1 &&
    !sequenceWithoutWildSymbol.some((number) => payingSymbols.includes(number))
  )
    return false

  //if the sequence have 2 paying symbols, the sequence is invalid
  if (removeDuplicates(sequenceWithoutWildSymbol).length > 1) return false

  //check if the number is equal than previous or equal wild symbol
  return sequence.every((element, index) => {
    if (element === wildSymbol) return true

    if (!payingSymbols.includes(element)) return false

    return (
      element === sequence[index - 1] ||
      sequence[index - 1] === wildSymbol ||
      index === 0
    )
  })
}
