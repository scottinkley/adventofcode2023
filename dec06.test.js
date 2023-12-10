/*
Day 6: Wait For It
*/

const { getProductOfDurationCounts, getNumberOfRecordBreakingDurations } = require('./dec06')

const EXAMPLE_RACES = [
    { duration: 7, recordDistance: 9 },
    { duration: 15, recordDistance: 40 },
    { duration: 30, recordDistance: 200 }
]

const EXAMPLE_RACE = { duration: 71530, recordDistance: 940200 }

describe('getProductOfDurationCounts', () => {
    test('provided example', () => {
        expect(getProductOfDurationCounts(EXAMPLE_RACES)).toEqual(288)
    })
})

describe('getNumberOfRecordBreakingDurations', () => {
    test('7 and 9', () => {
        expect(getNumberOfRecordBreakingDurations(EXAMPLE_RACES[0])).toEqual(4)
    })

    test('15 and 40', () => {
        expect(getNumberOfRecordBreakingDurations(EXAMPLE_RACES[1])).toEqual(8)
    })

    test('30 and 200', () => {
        expect(getNumberOfRecordBreakingDurations(EXAMPLE_RACES[2])).toEqual(9)
    })

    test('provided long example', () => {
        expect(getNumberOfRecordBreakingDurations(EXAMPLE_RACE)).toEqual(71503)
    })
})

/*
Solutions
*/

const RACES = [
    { duration: 45, recordDistance: 295 },
    { duration: 98, recordDistance: 1734 },
    { duration: 83, recordDistance: 1278 },
    { duration: 73, recordDistance: 1210 }
]

const RACE = { duration: 45988373, recordDistance: 295173412781210 }

test('solutions', () => {
    console.log('Part 1 answer: ' + getProductOfDurationCounts(RACES))
    console.log('Part 2 answer: ' + getNumberOfRecordBreakingDurations(RACE))
})