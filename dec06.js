/*
Day 6: Wait For It
*/

function getProductOfDurationCounts(races) {
    return races.map(race => getNumberOfRecordBreakingDurations(race))
                .reduce((a, b) => a * b, 1)
}

function getNumberOfRecordBreakingDurations(race) {
    const sqrtTerm = Math.sqrt(race.duration ** 2 - 4 * race.recordDistance)
    const lowerLimit = 0.5 * (race.duration - sqrtTerm)
    const upperLimit = 0.5 * (race.duration + sqrtTerm)

    let lowestSolution = Math.ceil(lowerLimit)
    if (lowestSolution === lowerLimit) {
        lowestSolution++
    }

    let highestSolution = Math.floor(upperLimit)
    if (highestSolution === upperLimit) {
        highestSolution--
    }

    return (highestSolution + 1) - lowestSolution
}

module.exports = { getProductOfDurationCounts, getNumberOfRecordBreakingDurations }