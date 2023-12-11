const { LinkedList } = require('./linked-list')
const { NoSuchElementError } = require('./errors')

describe('LinkedList', () => {
    describe('list is empty', () => {
        let list
        beforeAll(() => {
            list = new LinkedList()
        })

        it('should have a size of 0', () => {
            expect(list.size).toEqual(0)
        })

        it('should throw an error when trying to get first element', () => {
            expect(() => list.first).toThrow(NoSuchElementError)
        })

        it('should throw an error when trying to get last element', () => {
            expect(() => list.last).toThrow(NoSuchElementError)
        })

        it('should throw an error when trying to remove first element', () => {
            expect(() => list.removeFirst()).toThrow(NoSuchElementError)
        })

        it('should not have a negative size when trying to remove first element', () => {
            try {
                list.removeFirst()
            } catch(error) {
                // do nothing
            }
            expect(list.size).toEqual(0)
        })
    })

    describe('one element is added first', () => {
        let list
        const addedValue = 8
        beforeEach(() => {
            list = new LinkedList()
            list.addFirst(addedValue)
        })

        it('should return that element as the first element', () => {
            expect(list.first).toEqual(addedValue)
        })

        it('should return that element as the last element', () => {
            expect(list.last).toEqual(addedValue)
        })

        it('should have a size of 1', () => {
            expect(list.size).toEqual(1)
        })
    })

    describe('one element is added last', () => {
        let list
        const addedValue = 2
        beforeEach(() => {
            list = new LinkedList()
            list.addLast(addedValue)
        })

        it('should return that element as the first element', () => {
            expect(list.first).toEqual(addedValue)
        })

        it('should return that element as the last element', () => {
            expect(list.last).toEqual(addedValue)
        })

        it('should have a size of 1', () => {
            expect(list.size).toEqual(1)
        })
    })

    describe('list has one element', () => {
        let list
        const originalValue = 5
        beforeEach(() => {
            list = new LinkedList()
            list.addFirst(originalValue)
        })

        describe('element is added first', () => {
            const newValueAdded = 23
            beforeEach(() => {
                list.addFirst(newValueAdded)
            })

            it('should return the new value as first', () => {
                expect(list.first).toEqual(newValueAdded)
            })

            it('should return the original value as last', () => {
                expect(list.last).toEqual(originalValue)
            })
        })

        describe('element is added last', () => {
            const newValueAdded = 16
            beforeEach(() => {
                list.addLast(newValueAdded)
            })

            it('should return the new value as last', () => {
                expect(list.last).toEqual(newValueAdded)
            })

            it('should return the original value as first', () => {
                expect(list.first).toEqual(originalValue)
            })
        })

        describe('element is removed', () => {
            let removedValue
            beforeEach(() => {
                removedValue = list.removeFirst()
            })

            it('should return the removed value', () => {
                expect(removedValue).toEqual(originalValue)
            })

            it('should have a size of 0', () => {
                expect(list.size).toEqual(0)
            })

            it('should throw an error when trying to get first element', () => {
                expect(() => list.first).toThrow(NoSuchElementError)
            })
    
            it('should throw an error when trying to get last element', () => {
                expect(() => list.last).toThrow(NoSuchElementError)
            })
        })
    })

    describe('list has three elements', () => {
        let list
        const firstValue = 3
        const secondValue = -4
        const thirdValue = 18
        beforeEach(() => {
            list = new LinkedList()
            list.addFirst(thirdValue)
            list.addFirst(secondValue)
            list.addFirst(firstValue)
        })

        it('should have a size of 3', () => {
            expect(list.size).toEqual(3)
        })

        describe('first value is removed', () => {
            beforeEach(() => {
                list.removeFirst()
            })

            it('should return second value as first', () => {
                expect(list.first).toEqual(secondValue)
            })

            it('should return third value as last', () => {
                expect(list.last).toEqual(thirdValue)
            })
        })
    })

    test('workflow', () => {
        const list = new LinkedList()
        expect(() => list.first).toThrow(NoSuchElementError)
        expect(() => list.last).toThrow(NoSuchElementError)

        list.addFirst(3)
        expect(list.first).toEqual(3)
        expect(list.last).toEqual(3)
        expect(list.size).toEqual(1)

        list.addLast(7)
        expect(list.first).toEqual(3)
        expect(list.last).toEqual(7)
        expect(list.size).toEqual(2)

        list.addFirst(9)
        expect(list.first).toEqual(9)
        expect(list.last).toEqual(7)
        expect(list.size).toEqual(3)

        expect(list.removeFirst()).toEqual(9)
        expect(list.first).toEqual(3)
        expect(list.last).toEqual(7)
        expect(list.size).toEqual(2)

        expect(list.removeFirst()).toEqual(3)
        expect(list.first).toEqual(7)
        expect(list.last).toEqual(7)
        expect(list.size).toEqual(1)

        expect(list.removeFirst()).toEqual(7)
        expect(list.size).toEqual(0)
        expect(() => list.first).toThrow(NoSuchElementError)
        expect(() => list.last).toThrow(NoSuchElementError)
        expect(() => list.removeFirst()).toThrow(NoSuchElementError)
    })
})