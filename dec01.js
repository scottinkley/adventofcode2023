/*
Trebuchet
*/

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
    const lines = document.split('\n')
    let sum = 0
    for (line of lines) {
        calVal = getCalibrationValueOf(line)
        sum += calVal
    }
    
    return sum
}

function getCalibrationValueOf(line) {
    let numString = ''

    // get leftmost digit
    let leftmostIndex = 0
    while (leftmostIndex < line.length) {
        const current = line.charAt(leftmostIndex)
        if (isDigit(current)) {
            numString += current
            break
        }
        try {
            const digit = englishDigitOf(line.substring(leftmostIndex))
            numString += DIGITS[digit]
            leftmostIndex += digit.length
            break
        } catch (error) {
            // do nothing and move on
        }
        leftmostIndex++
    }

    // get rightmost digit
    let rightmostIndex = line.length - 1
    while (rightmostIndex >= leftmostIndex) {
        const current = line.charAt(rightmostIndex)
        if (isDigit(current)) {
            numString += current
            break
        }
        try {
            const digit = englishDigitOf(line.substring(rightmostIndex))
            numString += DIGITS[digit]
            break
        } catch (error) {
            // do nothing and move on
        }
        rightmostIndex--
    }

    if (numString === '') {
        return 0;
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
