/*
Trebuchet


*/

function getValueOf(line) {
    let numString = ''

    // get leftmost digit
    let leftmostIndex = 0
    while (leftmostIndex < line.length) {
        
        leftmostIndex++
    }

    // get rightmost digit

    if (numString === '') {
        return 0;
    }
    return Number(numString)
}

module.exports = {getValueOf}
