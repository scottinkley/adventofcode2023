/*
Day 8: Haunted Wasteland
*/

function getNumberOfSteps(input) {
    const rows = input.trim().split('\n')
    const instructions = rows[0]
    const instrLength = instructions.length
    let nodes = new Map()
    for (row of rows.slice(2)) {
        const nameAndElements = row.trim().split('=')
        const name = nameAndElements[0].trim()
        const leftAndRight = nameAndElements[1].split('(')[1].split(')')[0].split(',')
        nodes.set(name, { L: leftAndRight[0].trim(), R: leftAndRight[1].trim() })
    }

    let steps = 0
    let key = 'AAA'
    while (key !== 'ZZZ') {
        key = nodes.get(key)[instructions[steps % instrLength]]
        steps++
    }
    return steps
}

module.exports = { getNumberOfSteps }