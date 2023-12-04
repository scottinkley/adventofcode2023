/*
Trebuchet
*/

function getSumOfCalibrationValues(document) {
    
}

function getCalibrationValueOf(line) {
    let numString = ''

    // get leftmost digit
    let leftmostIndex = 0
    while (leftmostIndex < line.length) {
        const current = line.charAt(leftmostIndex)
        if (!isNaN(current)) {
            numString += current
            break
        }
        leftmostIndex++
    }

    // get rightmost digit
    let rightmostIndex = line.length - 1
    while (rightmostIndex >= leftmostIndex) {
        const current = line.charAt(rightmostIndex)
        if (!isNaN(current)) {
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

module.exports = { getCalibrationValueOf }
