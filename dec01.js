/*
Trebuchet
*/

const DIGITS = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'
]

function getSumOfCalibrationValues(document) {
    const lines = document.split('\n')
    console.log(lines)
    let sum = 0
    for (line of lines) {
        calVal = getCalibrationValueOf(line)
        console.log(`${line}: ${calVal}`)
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
        if (isNumber(current)) {
            numString += current
            break
        }
        leftmostIndex++
    }

    // get rightmost digit
    let rightmostIndex = line.length - 1
    while (rightmostIndex >= leftmostIndex) {
        const current = line.charAt(rightmostIndex)
        if (isNumber(current)) {
            numString += current
            break
        }
        rightmostIndex--
    }

    if (numString === '') {
        return 0;
    }
    return Number(numString)
}

function isNumber(character) {
    return /[0-9]/.test(character)
}

module.exports = { getCalibrationValueOf, getSumOfCalibrationValues, isNumber }
