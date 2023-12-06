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
                let number
                const firstDigitPosition = columnIndex
                const lastDigitPosition = getLastDigitPosition(currentRow, columnIndex)
                if (ROWS[rowIndex - 1] !== undefined) {
                    const current = ROWS[rowIndex - 1]
                    for (let c = firstDigitPosition - 1; c <= lastDigitPosition + 1; c++) {
                        if (isSymbol(current.charAt(c))) {
                            number = currentRow.substring(firstDigitPosition, lastDigitPosition + 1)
                            break
                        }
                    }
                    if (number > 0) {
                        sum += Number(number)
                        columnIndex = lastDigitPosition + 1
                        continue
                    }
                }
                if (isSymbol(currentRow.charAt(firstDigitPosition - 1)) ||
                    isSymbol(currentRow.charAt(lastDigitPosition + 1))) {
                    number = currentRow.substring(firstDigitPosition, lastDigitPosition + 1)
                    sum += Number(number)
                    columnIndex = lastDigitPosition + 1
                    continue
                }
                if (ROWS[rowIndex + 1] !== undefined) {
                    const current = ROWS[rowIndex + 1]
                    for (let c = firstDigitPosition - 1; c <= lastDigitPosition + 1; c++) {
                        if (isSymbol(current.charAt(c))) {
                            number = currentRow.substring(firstDigitPosition, lastDigitPosition + 1)
                            break
                        }
                    }
                    if (number > 0) {
                        sum += Number(number)
                        columnIndex = lastDigitPosition + 1
                        continue
                    }
                }
            }
            columnIndex++ // may want this in an else
        }
    }
    return sum
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