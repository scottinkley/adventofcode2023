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
            sum += gameNumber
        }
    }
    return sum
}

function sumOfPowers(games) {
    let sum = 0
    for (game of games.trim(' ').split('\n')) {
        const gameInfo = game.trim(' ').split(':')
        const rounds = gameInfo[1]
        sum += powerOfGame(rounds)
    }
    return sum
}

function powerOfGame(game) {
    let MAX_BLUE = 0
    let MAX_RED = 0
    let MAX_GREEN = 0

    for (round of game.trim(' ').split(';')) {
        for (pair of round.trim(' ').split(',')) {
            const pairArray = pair.trim().split(' ')
            const count = Number(pairArray[0])
            const color = pairArray[1]
            if (color === 'blue' && count > MAX_BLUE) {
                MAX_BLUE = count
            } else if (color === 'red' && count > MAX_RED) {
                MAX_RED = count
            } else if (color === 'green' && count > MAX_GREEN) {
                MAX_GREEN = count
            }
        }
    }

    return MAX_BLUE * MAX_RED * MAX_GREEN
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

module.exports = { sumOfPossibleGames, sumOfPowers, gameIsPossible, roundIsPossible, powerOfGame }