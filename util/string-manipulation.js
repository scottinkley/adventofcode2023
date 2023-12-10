function getNumbers(string) {
    return string.trim().split(' ').map(str => Number(str))
}

module.exports = { getNumbers }