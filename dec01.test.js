const { getValueOf } = require('./dec01')

// 2 numbers
// 1 number
// 0 numbers
// adjacent numbers
// 3+ numbers
describe('testing getValueOf', () => {
    test('string has 2 numbers', () => {
        expect(getValueOf('1abc2')).toEqual(12)
        expect(getValueOf('pqr3stu8vwx')).toEqual(38)
    })

    test('string has 1 number', () => {
        expect(getValueOf('treb7uchet')).toEqual(77)
    })

    test('string has 0 numbers', () => {
        expect(getValueOf('noaiunasflgqkljhdnasf')).toEqual(0)
    })

    test('string has 3+ numbers', () => {
        expect(getValueOf('a1b2c3d4e5f')).toEqual(15)
    })

    test('string has adjacent numbers', () => {
        expect(getValueOf('gnaWSd82afjmas10famsdf')).toEqual(80)
    })
})