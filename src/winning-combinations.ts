import { matchPositionBetweenArrays } from './match-position-between-arrays'
import { splitSequenceToValidate, wildSymbol } from './utils'
import { sequenceValidation } from './sequence-validation'

type WinningCombinationsResult = [number, number[]][]

function call(symbols: number[]): WinningCombinationsResult {
  const winningCombinations: WinningCombinationsResult = []
  const symbolsSize = symbols.length
  const sizeOfLooping = symbolsSize === 5 ? 2 : 3

  for (let i = 0; i <= sizeOfLooping; i++) {
    //split sequence in a line of max 6 and minimum 3
    const validationSequences = splitSequenceToValidate(
      symbols.slice(i, symbolsSize),
    )

    //validate all arrays
    const validations = validationSequences.map((item) =>
      sequenceValidation(item),
    )

    //the validations are in a desc order, the first element true is the match
    const firstValid = validations.indexOf(true)

    if (firstValid >= 0) {
      const validSequence = validationSequences[firstValid]
      const mainNumber = validSequence.find((el) => el !== wildSymbol) || 0

      const arrayMatchIndex = matchPositionBetweenArrays(symbols, validSequence)

      const numberHasBeenAdded = winningCombinations.some(
        ([checked]) => checked === mainNumber,
      )

      //check if the number haven't been added before
      if (!numberHasBeenAdded) {
        winningCombinations.push([
          mainNumber,
          Array.from(
            { length: validSequence.length },
            (_, index) => index + arrayMatchIndex,
          ),
        ])
      }

      //if the winning array has more than 2 combinations and one of them is the wild symbol
      if (
        winningCombinations.length > 1 &&
        winningCombinations.some(([checked]) => checked === wildSymbol)
      ) {
        const index = winningCombinations.findIndex(
          ([checked]) => checked === wildSymbol,
        )
        winningCombinations.splice(index, 1)
      }
    }
  }

  return winningCombinations
}

export const WinningCombinations = { call }
