/*
If You Give A Seed A Fertilizer
*/

function getLowestLocationOfSeeds(input) {
    const rows = input.trim().split('\n')
    const seeds = getNumbers(rows[0].trim().split(':')[1])
    // const locations = seeds.map(seed => getLocationOfSeed(seed, rows))
    const locations = getLocationsOfSeeds(seeds, rows)
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

function getLocationsOfSeeds(seeds, rows) {
    function mapNumbers(current) {
        const result = new Map()
        while (index < rows.length && rows[index].length > 1) {
            const row = getNumbers(rows[index])
            for (let [key, number] of current) {
                if (number >= row[1] && number <= row[1] + row[2] - 1) {
                    result.set(key, number += row[0] - row[1])
                    current.delete(key)
                }
            }
            index++
        }
        for (let [key, number] of current) {
            result.set(key, number)
        }
        return result
    }

    let currentNums = new Map()
    for (let i = 0; i < seeds.length; i++) {
        currentNums.set(i, seeds[i])
    }
    let index = 1
    while (index < rows.length) {
        if (rows[index].includes('map')) {
            index++
            currentNums = mapNumbers(currentNums)
        }
        index++
    }
    return Array.from(currentNums.values())
}

function getNumbers(string) {
    return string.trim().split(' ').map(num => Number(num))
}

module.exports = { getLowestLocationOfSeeds, getNumbers }