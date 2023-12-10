/*
Day 7: Camel Cards -- part 2
*/

function calculateTotalWinnings(setOfHands) {
    const convertToObject = (string) => {
        const arr = string.trim().split(' ')
        return {
            strength: getHandStrength(arr[0]),
            bid: Number(arr[1])
        }
    }
    const hands = setOfHands.trim().split('\n')
    .map(convertToObject)
    .sort((a, b) => a.strength - b.strength)

    let totalWinnings = 0
    const numberOfHands = hands.length
    for (let index = 0; index < numberOfHands; index++) {
        totalWinnings += (hands[index].bid * (index + 1))
    }
    return totalWinnings
}

function getHandStrength(hand) {
    const numberOf = {
        'A': '14',
        'K': '13',
        'Q': '12',
        'T': '10',
        '9': '09',
        '8': '08',
        '7': '07',
        '6': '06',
        '5': '05',
        '4': '04',
        '3': '03',
        '2': '02',
        'J': '01'
    }
    let string = ''
    const cards = new Map()
    for (const card of hand) {
        string += numberOf[card]
        let count = cards.get(card)
        if (count === undefined) {
            count = 0
        }
        cards.set(card, count + 1)
    }
    return Number(`${getHandType(cards)}` + string)
}

function getHandType(cards) {
    const jokerCount = cards.get('J')
    if (jokerCount !== undefined) {
        cards.delete('J')
        // add jokerCount to highest map value
        let highestCountKey
        let highestCount = 0
        for (let [key, value] of cards) {
            if (value > highestCount) {
                highestCount = value
                highestCountKey = key
            }
        }
        cards.set(highestCountKey, highestCount + jokerCount)
    }
    const size = cards.size
    if (size === 1) {
        return 6                                // 5 of a kind
    } else if (size === 2) {
        let productOfCounts = 1
        for (let [key, value] of cards) {
            productOfCounts *= value
        }
        if (productOfCounts === 4) {
            return 5                            // 4 of a kind
        }
        return 4                                // full house
    } else if (size === 3) {
        let productOfCounts = 1
        for (let [key, value] of cards) {
            productOfCounts *= value
        }
        if (productOfCounts === 3) {
            return 3                            // 3 of a kind
        }
        return 2                                // 2 pair
    } else if (size === 4) {
        return 1                                // 1 pair
    }
    return 0                                    // high card
}

module.exports = { calculateTotalWinnings, getHandStrength }