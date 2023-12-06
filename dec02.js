/*
Day 2: Cube Conundrum
*/

const MAX = { 'red': 12, 'green': 13, 'blue': 14 }

function sumOfPossibleGames(games) {
    let sum = 0
    for (game of games.trim(' ').split('\n')) {
        const gameInfo = game.trim(' ').split(':')
        const gameNumber = Number(gameInfo[0].split(' ')[1])
        const rounds = gameInfo[1]
        if (gameIsPossible(rounds)) {
            console.log(`This game is possible: ${game}`)
            sum += gameNumber
        }
    }
    return sum
}

function gameIsPossible(game) {
    for (round of game.split(';')) {
        if (!roundIsPossible(round)) {
            return false
        }
    }
    return true
}

function roundIsPossible(round) {
    for (pair of round.split(',')) {
        const pairArray = pair.trim().split(' ')
        const count = pairArray[0]
        const color = pairArray[1]
        if (MAX[color] < count) {
            return false
        }
    }
    return true
}

module.exports = { sumOfPossibleGames, gameIsPossible, roundIsPossible }