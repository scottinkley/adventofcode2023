/*
Scratchcards
*/

function getSumOfCardScores(cards) {
    let sum = 0
    for (card of cards.trim().split('\n')) {
        sum += getScoreOf(card)
    }
    return sum
}

function getScoreOf(card) {
    const segments = card.trim().split(/\:|\|/)
    const WINNING_NUMBERS = segments[1].trim().split(/\s+/)
    const GUESSES = new Set(segments[2].trim().split(/\s+/))
    
    let matches = 0
    for (number of WINNING_NUMBERS) {
        if (GUESSES.has(number)) {
            matches++
        }
    }
    if (matches === 0) {
        return 0
    }
    return 2 ** (matches - 1)
}

module.exports = { getSumOfCardScores, getScoreOf }