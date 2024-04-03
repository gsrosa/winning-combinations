export function matchPositionBetweenArrays(
  baseArray: number[],
  searchArray: number[],
): number {
  return baseArray.findIndex((_, index) =>
    baseArray
      .slice(index, index + searchArray.length)
      .every((num, i) => num === searchArray[i]),
  )
}

export function allElementsEqual(arr: number[]): boolean {
  return arr.every((num) => num === arr[0])
}
