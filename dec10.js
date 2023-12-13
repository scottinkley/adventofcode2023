/*
Day 10: Pipe Maze
*/

"use strict";

const { getRows } = require('./util/string-manipulation')
const { Queue } = require('./util/queue')
const { NoSuchElementError, IndexOutOfBoundsError } = require('./util/errors')

const Directions = Object.freeze({
    NORTH: {row: -1, column: 0},
    SOUTH: {row: 1, column: 0},
    EAST: {row: 0, column: 1},
    WEST: {row: 0, column: -1}
})

const PIPES = Object.freeze({
    'S': [Directions.NORTH, Directions.SOUTH, Directions.EAST, Directions.WEST],
    '|': [Directions.NORTH, Directions.SOUTH],
    '-': [Directions.EAST, Directions.WEST],
    'L': [Directions.NORTH, Directions.EAST],
    'J': [Directions.NORTH, Directions.WEST],
    '7': [Directions.SOUTH, Directions.WEST],
    'F': [Directions.SOUTH, Directions.EAST],
    '.': []
})

/*
Idea -- use a breadth-first search, starting at S

if a location in the queue already has a distance, replace that distance if is larger than the current calculated distance

May want to create a locations 2d array
*/
function getFarthestDistanceFromStart(input) {
    function setDistanceTo(distance, position) {
        distances[position[0]][position[1]] = distance
    }

    const tiles = generateTilesArray(input)
    const distances = generateDistancesArray(tiles)
    const startingPosition = getStartingPosition(tiles)
    setDistanceTo(0, startingPosition)
    const queue = new Queue()
    queue.enqueue(startingPosition)
    let farthestDistance = 0
    while (queue.size > 0) {
        const currentPosition = queue.dequeue()
        const currentDistance = getDistance(currentPosition, distances)
        if (currentDistance > farthestDistance) {
            farthestDistance = currentDistance
        }
        const connectingPositions = getPositionsThatConnectTo(currentPosition, tiles)
        for (let position of connectingPositions) {
            const distance = getDistance(position, distances)
            if (distance < 0) {
                setDistanceTo(currentDistance + 1, position)
                queue.enqueue(position)
            }
        }
    }
    return farthestDistance
}

/**
 * @param {2D array} rows
 * @return {Array<number,number>}
 */
function getStartingPosition(rows) {
    const numberOfRows = rows.length
    const numberOfColumns = rows[0].length
    for (let row = 0; row < numberOfRows; row++) {
        const currentRow = rows[row]
        for (let column = 0; column < numberOfColumns; column++) {
            if (currentRow[column] === 'S') {
                return [row, column]
            }
        }
    }
    throw new NoSuchElementError('Did not find starting position character')
}

/**
 * @param {Array<number,number>} position
 * @param {2D array} rows
 * @return {Set<Array<number,number>>}
 */
function getPositionsThatConnectTo(position, rows) {
    const positions = new Set()
    const openings = PIPES[getSymbol(position, rows)]
    for (let opening of openings) {
        const currentPosition = getPositionInDirection(position, opening)
        let currentOpenings
        try {
            const symbol = getSymbol(currentPosition, rows)
            currentOpenings = PIPES[getSymbol(currentPosition, rows)]
        } catch(IndexOutOfBoundsError) {
            continue
        }
        for (let currentOpening of currentOpenings) {
            if (areOpposites(opening, currentOpening)) {
                positions.add(currentPosition)
                break
            }
        }
    }
    return positions
}

/**
 * @param {Array<number,number>} position
 * @param {2D array} rows
 * @return {string}
 */
function getSymbol(position, rows) {
    return getValueAtPosition(position, rows)
}

/**
 * @param {Array<number,number>} position
 * @param {2D array} distances
 * @return {number}
 */
function getDistance(position, distances) {
    return getValueAtPosition(position, distances)
}

/**
 * @param {Array<number,number>} position
 * @param {Directions} direction
 * @return {Array<number,number>}
 */
function getPositionInDirection(position, direction) {
    return [position[0] + direction.row, position[1] + direction.column]
}

/**
 * @param {Directions} a
 * @param {Directions} b
 * @return {boolean}
 */
function areOpposites(a, b) {
    return a.row + b.row === 0 && a.column + b.column === 0
}

/**
 * @param {Array<number,number>} position
 * @param {2D array} array
 * @returns {*}
 */
function getValueAtPosition(position, array) {
    try {
        const result = array[position[0]][position[1]]
        if (result !== undefined) {
            return result
        }
    } catch(error) {
        if (error instanceof TypeError) {
            // do nothing
        } else {
            throw error
        }
    }
    throw new IndexOutOfBoundsError('Position falls outside the bounds of the 2D array')
}

function generateTilesArray(input) {
    const rows = getRows(input)
    const numberOfRows = rows.length
    const tiles = new Array(numberOfRows)
    for (let index = 0; index < numberOfRows; index++) {
        tiles[index] = rows[index].split('')
    }
    return tiles
}

/**
 * @param {2D Array} rows
 * @returns {2D Array}
 */
function generateDistancesArray(rows) {
    const numberOfRows = rows.length
    const numberOfColumns = rows[0].length
    const distances = new Array(numberOfRows)
    for (let index = 0; index < numberOfRows; index++) {
        distances[index] = new Array(numberOfColumns).fill(-1)
    }
    return distances;
}

function printArray(array) {
    for (let row of array) {
        console.log(row)
    }
}

module.exports = { getFarthestDistanceFromStart, getStartingPosition,
    getPositionsThatConnectTo, getSymbol, getPositionInDirection, areOpposites, Directions }