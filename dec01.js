/*
Trebuchet
*/
const { getRows } = require('./util/string-manipulation')

const DIGITS = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'zero': 0
}

function getSumOfCalibrationValues(document) {
    let sum = 0
    const lines = getRows(document)
    for (line of lines) {
        calVal = getCalibrationValueOf(line)
        sum += calVal
    }
    return sum
}

function getCalibrationValueOf(line) {
    function foundNumberAtIndex(line, index) {
        const current = line.charAt(index)
        if (isDigit(current)) {
            numString += current
            return true
        }
        try {
            const digit = englishDigitOf(line.substring(index))
            numString += DIGITS[digit]
            index += digit.length
            return true
        } catch (error) {
            return false
        }
    }

    let numString = ''

    // get leftmost digit
    let leftmostIndex = 0
    while (leftmostIndex < line.length) {
        if (foundNumberAtIndex(line, leftmostIndex)) {
            break
        }
        leftmostIndex++
    }

    // get rightmost digit
    let rightmostIndex = line.length - 1
    while (rightmostIndex >= leftmostIndex) {
        if (foundNumberAtIndex(line, rightmostIndex)) {
            break
        }
        rightmostIndex--
    }

    return Number(numString)
}

function isDigit(character) {
    return /[0-9]/.test(character)
}

function englishDigitOf(string) {
    for (word of Object.keys(DIGITS)) {
        const current = string.substring(0, word.length)
        if (current === word) {
            return word
        }
    }
    throw Error('No english digit substring starts here')
}

module.exports = { getCalibrationValueOf, getSumOfCalibrationValues, isDigit, englishDigitOf }
