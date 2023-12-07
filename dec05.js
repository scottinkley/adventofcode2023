/*
If You Give A Seed A Fertilizer
*/

function getLowestLocationOfSeeds(input) {
    const rows = input.trim().split('\n')
    const seeds = getNumbers(rows[0].trim().split(':')[1])
}

function getNumbers(string) {
    return string.trim().split(' ').map(num => Number(num))
}

module.exports = { getLowestLocationOfSeeds, getNumbers }