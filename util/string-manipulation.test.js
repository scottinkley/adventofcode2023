const { getNumbers } = require('./string-manipulation')

describe('getNumbers', () => {
    test('79 14 55 13', () => {
        expect(getNumbers('79 14 55 13')).toEqual([79, 14, 55, 13])
    })
})