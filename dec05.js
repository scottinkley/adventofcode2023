/*
Seeds
*/

function getLowestLocationFromSeedRanges(input) {
    const rows = input.trim().split('\n')
    const seedRanges = getSeedRanges(rows[0].trim().split(':')[1])
    const locationRanges = getLocationRanges(seedRanges, rows)
    return [...locationRanges].reduce((a, b) => Math.min(a.start, b.start), Number.MAX_VALUE)
}

function getLocationRanges(seedRanges, rows) {
    let index = 1
    let ranges = {
        before: seedRanges,
        after: new Set()
    }
    while (index < rows.length) {
        if (rows[index].includes('map')) {
            index++
            while (index < rows.length && rows[index].length > 1) {
                const mapping = getMapping(rows[index])
                ranges = transformRanges(mapping, ranges)
                index++
            }
        }
        index++
    }
    for (range of ranges.before) {
        ranges.after.add(range)
    }
    return ranges.after
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