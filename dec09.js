/*
Day 9: Mirage Maintenance
*/

function getSumOfExtrapolatedValues(input) {
    const rows = input.trim().split('\n')
    let sum = 0
    for (row of rows) {
        sum += getExtrapolatedValue(row)
    }
    return sum
}

function getExtrapolatedValue(string) {
    const sequences = new Array()
    let last = getNumbers(string)
    sequences.push(last)

    while (!isAllZeros(last)) {
        last = getIntervals(last)
        sequences.push(last)
    }

    const length = sequences.length
    let currLastIndex = sequences[0].length - length
    let extrapolatedValue = 0
    for (let index = length - 1; index >= 0; index--) {
        extrapolatedValue += sequences[index][currLastIndex]
        currLastIndex++
    }
    return extrapolatedValue
}

function isAllZeros(sequence) {
    for (number of sequence) {
        if (number !== 0) {
            return false
        }
    }
    return true
}

function getIntervals(sequence) {
    const intervals = new Array(sequence.length - 1)
    const length = intervals.length
    for (let index = 0; index < length; index++) {
        intervals[index] = sequence[index + 1] - sequence[index]
    }
    return intervals
}

function getNumbers(string) {
    return string.trim().split(' ').map(num => Number(num))
}

module.exports = { getSumOfExtrapolatedValues, getExtrapolatedValue, getIntervals }