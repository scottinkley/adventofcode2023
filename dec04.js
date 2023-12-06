/*
Scratchcards
*/

function getNumberOfScratchcards(input) {
    let totalNumber = 0
    const COPIES = new Map()
    const CARDS = input.trim().split('\n')
    let currIndex = 0
    while (currIndex < CARDS.length) {
        let thisCount = 1
        if (COPIES.has(currIndex)) {
            thisCount += COPIES.get(currIndex)
        }
        totalNumber += thisCount
        const matches = getNumberOfMatches(CARDS[currIndex])
        for (let nextIndex = currIndex + 1; nextIndex <= currIndex + matches; nextIndex++) {
            if (!COPIES.has(nextIndex)) {
                COPIES.set(nextIndex, 0)
            }
            COPIES.set(nextIndex, COPIES.get(nextIndex) + thisCount)
        }
        currIndex++
    }
    return totalNumber
}

function getSumOfCardScores(cards) {
    let sum = 0
    for (card of cards.trim().split('\n')) {
        sum += getScoreOf(card)
    }
    return sum
}

function getScoreOf(card) {
    const matches = getNumberOfMatches(card)
    if (matches === 0) {
        return 0
    }
    return 2 ** (matches - 1)
}

function getNumberOfMatches(card) {
    const segments = card.trim().split(/\:|\|/)
    const WINNING_NUMBERS = segments[1].trim().split(/\s+/)
    const GUESSES = new Set(segments[2].trim().split(/\s+/))
    
    let matches = 0
    for (number of WINNING_NUMBERS) {
        if (GUESSES.has(number)) {
            matches++
        }
    }
    return matches
}

module.exports = { getSumOfCardScores, getScoreOf, getNumberOfScratchcards }