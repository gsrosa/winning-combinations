export function removeDuplicates(array: number[]): number[] {
  return [...new Set(array)]
}

export function splitSequenceToValidate(sequence: number[]) {
  const validationSequences: Array<number[]> = []
  for (let index = sequence.length; index >= 3; index--) {
    validationSequences.push(sequence.slice(0, index))
  }

  return validationSequences
}

export const wildSymbol: number = 0
export const payingSymbols: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
