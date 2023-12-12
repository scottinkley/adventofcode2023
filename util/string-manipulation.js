function getNumbers(string) {
    return string.trim().split(' ').map(str => Number(str))
}

function getRows(input) {
    return input.trim().split('\n')
}

module.exports = { getNumbers, getRows }