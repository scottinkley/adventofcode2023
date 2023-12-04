const { getCalibrationValueOf, getSumOfCalibrationValues, isNumber } = require('./dec01')

describe('testing isNumber', () => {
    test('a number', () => {
        expect(isNumber('3')).toBe(true)
    })

    test('a letter', () => {
        expect(isNumber('a')).toBe(false)
    })

    test('whitespace', () => {
        expect(isNumber(' ')).toBe(false)
    })
})

describe('testing getValueOf', () => {
    test('string has 2 numbers', () => {
        expect(getCalibrationValueOf('1abc2')).toEqual(12)
        expect(getCalibrationValueOf('pqr3stu8vwx')).toEqual(38)
    })

    test('string has 1 number', () => {
        expect(getCalibrationValueOf('treb7uchet')).toEqual(77)
    })

    test('string has 0 numbers', () => {
        expect(getCalibrationValueOf('noaiunasflgqkljhdnasf')).toEqual(0)
    })

    test('string has 3+ numbers', () => {
        expect(getCalibrationValueOf('a1b2c3d4e5f')).toEqual(15)
    })

    test('string has adjacent numbers', () => {
        expect(getCalibrationValueOf('gnaWSd82afjmas10famsdf')).toEqual(80)
    })

    test('string has leading whitespace', () => {
        expect(getCalibrationValueOf('        pqr3stu8vwx')).toEqual(38)
    })

    test('string has trailing whitespace', () => {
        expect(getCalibrationValueOf('pqr3stu8vwx        ')).toEqual(38)
    })
})

describe('testing getSumOfCalibrationValues', () => {
    test('the provided example', () => {
        const exampleDocument = 
        `1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet`
        expect(getSumOfCalibrationValues(exampleDocument)).toEqual(142)
    })

    test('empty document', () => {
        expect(getSumOfCalibrationValues('')).toEqual(0)
    })
})