/*
Day 8: Haunted Wasteland
*/
const { getRows } = require('./util/string-manipulation')

function getNumberOfSteps(input) {
    const rows = getRows(input)
    const instructions = rows[0]
    let nodes = new Map()
    const keys = []
    for (row of rows.slice(2)) {
        const nameAndElements = row.trim().split('=')
        const name = nameAndElements[0].trim()
        if (name.charAt(2) === 'A') {
            keys.push(name)
        }
        const leftAndRight = nameAndElements[1].split('(')[1].split(')')[0].split(',')
        nodes.set(name, { L: leftAndRight[0].trim(), R: leftAndRight[1].trim() })
    }

    const numberOfSteps = new Set()
    for (key of keys) {
        numberOfSteps.add(getNumberOfStepsForKey(key, instructions, nodes))
    }
    const gcf = greatestCommonFactorOfSet(numberOfSteps)
    let totalNumberOfSteps = 1
    for (num of numberOfSteps) {
        console.log(num / gcf)
        totalNumberOfSteps *= num / gcf
    }
    return totalNumberOfSteps * gcf
}

function getNumberOfStepsForKey(key, instructions, nodes) {
    let current = key
    const instrLength = instructions.length
    let steps = 0
    while (current.charAt(2) != 'Z') {
        current = nodes.get(current)[instructions[steps % instrLength]]
        steps++
    }
    return steps
}

function greatestCommonFactorOfSet(set) {
    const numbers = [...set]
    return numbers.reduce(greatestCommonFactor, numbers[0])
}

function greatestCommonFactor(a, b) {
    let larger, smaller, remainder
    if (a > b) {
        larger = a
        smaller = b
    } else {
        larger = b
        smaller = a
    }
    while (remainder !== 0) {
        remainder = larger % smaller
        larger = smaller
        smaller = remainder
    }
    return larger
}

module.exports = { getNumberOfSteps, greatestCommonFactor }