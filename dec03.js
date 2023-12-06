/*
Gear ratios
*/

function getSumOfPartNumbers(input) {
    let sum = 0
    const ROWS = input.trim().split('\n')
    for (let rowIndex = 0; rowIndex < ROWS.length; rowIndex++) {
        const currentRow = ROWS[rowIndex].trim()
        let columnIndex = 0
        while (columnIndex < currentRow.length) {
            if (isDigit(currentRow.charAt(columnIndex))) {
                const firstDigitPosition = columnIndex
                const lastDigitPosition = getLastDigitPosition(currentRow, columnIndex)
                if (numberIsAdjacentToSymbol(ROWS, rowIndex, firstDigitPosition - 1, lastDigitPosition + 1)) {
                    sum += Number(currentRow.substring(firstDigitPosition, lastDigitPosition + 1))
                    columnIndex = lastDigitPosition + 1
                    continue
                }
            }
            columnIndex++
        }
    }
    return sum
}

function numberIsAdjacentToSymbol(ROWS, rowIndex, leftmostIndex, rightmostIndex) {
    function rowSegmentContainsSymbol(row) {
        if (row !== undefined) {
            for (let c = leftmostIndex; c <= rightmostIndex; c++) {
                if (isSymbol(row.charAt(c))) {
                   return true 
                }
            }
        }
        return false
    }

    if (rowSegmentContainsSymbol(ROWS[rowIndex - 1])) {
        return true
    }
    if (isSymbol(ROWS[rowIndex].charAt(leftmostIndex)) ||
        isSymbol(ROWS[rowIndex].charAt(rightmostIndex))) {
        return true
    }
    if (rowSegmentContainsSymbol(ROWS[rowIndex + 1])) {
        return true
    }
    return false
}

function getLastDigitPosition(row, index) {
    let lastDigitPosition = index
    while (index < row.length) {
        if (!isDigit(row.charAt(lastDigitPosition + 1))) {
            break
        }
        lastDigitPosition++
    }
    return lastDigitPosition
}

function isDigit(character) {
    return /[0-9]/.test(character)
}

function isSymbol(character) {
    return /\*|\%|\$|\@|\&|\+|\/|\#|\=|\-/.test(character)
}

module.exports = { getSumOfPartNumbers, getLastDigitPosition }