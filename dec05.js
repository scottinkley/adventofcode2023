/*
Seeds
*/

function getLowestLocationFromSeedRanges(input) {
    const rows = input.trim().split('\n')
    const seedRanges = getSeedRanges(rows[0].trim().split(':')[1])
    const locationRanges = getLocationRanges(seedRanges, rows)
    let minLocation = Number.MAX_SAFE_INTEGER
    for (range of locationRanges) {
        if (range.start < minLocation) {
            minLocation = range.start
        }
    }
    return minLocation
    
    // return [...locationRanges].reduce((a, b) => Math.min(a.start, b.start), { start: Number.MAX_SAFE_INTEGER, end: Number.MAX_SAFE_INTEGER }).start
}

function getLocationRanges(seedRanges, rows) {
    let index = 1
    let currentRanges = seedRanges
    while (index < rows.length) {
        if (rows[index].includes('map')) {
            index++
            let ranges = {
                before: currentRanges,
                after: new Set()
            }
            while (index < rows.length && rows[index].length > 1) {
                const mapping = getMapping(rows[index])
                ranges = transformRanges(mapping, ranges)
                index++
            }
            for (range of ranges.before) {
                ranges.after.add(range)
            }
            currentRanges = ranges.after
        }
        index++
    }
    return currentRanges
}

function transformRanges(mapping, ranges) {
    for (range of ranges.before) {
        const maxStart = Math.max(mapping.start, range.start)
        const minEnd = Math.min(mapping.end, range.end)
        if (maxStart - minEnd < 0) {
            ranges.after.add({
                start: maxStart + mapping.transform,
                end: minEnd + mapping.transform
            })
            if (maxStart > range.start) {
                ranges.before.add({
                    start: range.start,
                    end: maxStart - 1
                })
            }
            if (minEnd < range.end) {
                ranges.before.add({
                    start: minEnd + 1,
                    end: range.end
                })
            }
            ranges.before.delete(range)
        }
    }
    return ranges
}

function getSeedRanges(string) {
    const numbers = getNumbers(string)
    const ranges = new Set()
    for (let index = 0; index < numbers.length; index = index + 2) {
        ranges.add({
            start: numbers[index],
            end: numbers[index] + numbers[index + 1] - 1
        })
    }
    return ranges
}

function getMapping(string) {
    const numbers = getNumbers(string)
    return {
        start: numbers[1],
        end: numbers[1] + numbers[2] - 1,
        transform: numbers[0] - numbers[1]
    }
}

function getNumbers(string) {
    return string.trim().split(' ').map(str => Number(str))
}

module.exports = { getLowestLocationFromSeedRanges, transformRanges, getSeedRanges, getMapping, getNumbers }