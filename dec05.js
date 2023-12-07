/*
If You Give A Seed A Fertilizer
*/

function getLowestLocationOfSeeds(input) {
    const rows = input.trim().split('\n')
    const seeds = getNumbers(rows[0].trim().split(':')[1])
    const locations = seeds.map(seed => getLocationOfSeed(seed, rows))
    return locations.reduce((a, b) => Math.min(a, b), Number.MAX_SAFE_INTEGER)
}

function getLocationOfSeed(seed, rows) {
    let number = seed
    let index = 1
    while (index < rows.length) {
        if (rows[index].includes('map')) {
            index++
            while (index < rows.length && rows[index].length > 1) {
                const numbers = getNumbers(rows[index])
                if (number >= numbers[1] && number <= numbers[1] + numbers[2] - 1) {
                    number += numbers[0] - numbers[1]
                    break
                }
                index++
            }
        }
        index++
    }
    return number
}

function getNumbers(string) {
    return string.trim().split(' ').map(num => Number(num))
}

module.exports = { getLowestLocationOfSeeds, getNumbers }