/*
Day 10: Pipe Maze
*/

/*
Idea -- use a breadth-first search, starting at S

if a location in the queue already has a distance, replace that distance if is larger than the current calculated distance

May want to create a locations 2d array
*/

const { NoSuchElementError } = require('./util/errors')

function getFarthestDistanceFromStart(input) {
    // find the starting point
    // from the starting point, conduct a breadth-first search
}

function getStartingPosition(rows) {
    const numberOfRows = rows.length
    const numberOfColumns = rows[0].length
    for (let row = 0; row < numberOfRows; row++) {
        const currentRow = rows[row]
        for (let column = 0; column < numberOfColumns; column++) {
            if (currentRow.charAt(column) === 'S') {
                return [row, column]
            }
        }
    }
    throw new NoSuchElementError('Did not find starting position character')
}

function getRows(input) {
    return input.trim().split('\n')
}

module.exports = { getFarthestDistanceFromStart, getStartingPosition, getRows }