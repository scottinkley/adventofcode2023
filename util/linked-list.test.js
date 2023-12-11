const { LinkedList, NoSuchElementError } = require('./linked-list')

describe('LinkedList', () => {
    describe('addFirst()', () => {
        test('add to empty list', () => {
            const list = new LinkedList()
            list.addFirst(5)
            expect(list.first).toEqual(5)
            expect(list.last).toEqual(5)
        })

        test('add to list with one node', () => {
            const list = new LinkedList()
            list.addFirst(5)
            list.addFirst(3)
            expect(list.first).toEqual(3)
            expect(list.last).toEqual(5)
        })
    })

    describe('addLast()', () => {
        test('add to empty list', () => {
            const list = new LinkedList()
            list.addLast(7)
            expect(list.first).toEqual(7)
            expect(list.last).toEqual(7)
        })

        test('add to list with one node', () => {
            const list = new LinkedList()
            list.addLast(7)
            list.addLast(4)
            expect(list.last).toEqual(4)
            expect(list.first).toEqual(7)
        })
    })

    describe('first()', () => {
        test('empty list', () => {
            const list = new LinkedList()
            try {
                list.first
            } catch(error) {
                expect(error instanceof NoSuchElementError).toBe(true)
                expect(error.message).toEqual('Cannot get first element of list -- list is empty')
            } 
        })
    })

    describe('last()', () => {
        test('empty list', () => {
            const list = new LinkedList()
            try {
                list.last
            } catch(error) {
                expect(error instanceof NoSuchElementError).toBe(true)
                expect(error.message).toEqual('Cannot get last element of list -- list is empty')
            }
        })
    })

    describe('removeFirst()', () => {
        test('empty list', () => {
            const list = new LinkedList()
            try {
                list.removeFirst()
            } catch(error) {
                expect(error instanceof NoSuchElementError).toBe(true)
                expect(error.message).toEqual('Cannot remove first element -- list is empty')
            }
        })

        test('list has one node', () => {
            const list = new LinkedList()
            list.addFirst(8)
            const removedValue = list.removeFirst()
            expect(removedValue).toEqual(8)
            expect(() => list.first).toThrow(NoSuchElementError)
        })

        test('list has more than one node', () => {
            const list = new LinkedList()
            list.addFirst(9)
            list.addFirst(2)
            const removedValue = list.removeFirst()
            expect(removedValue).toEqual(2)
            expect(list.first).toEqual(9)
        })
    })

    describe('size()', () => {
        test('emtpy list', () => {
            const list = new LinkedList()
            expect(list.size).toEqual(0)
        })

        it('should not go negative when removing from an empty list', () => {
            const list = new LinkedList()
            try {
                list.removeFirst()
            } catch(error) {
                // do nothing
            }
            expect(list.size).toEqual(0)
        })

        describe('list with one node', () => {
            let list
            beforeEach(() => {
                list = new LinkedList()
                list.addFirst(3)
            })

            it('should have a size of 1', () => {
                expect(list.size).toEqual(1)
            })
    
            test('list with many nodes', () => {
                list.addFirst(9)
                list.addFirst(-1)
                expect(list.size).toEqual(3)
            })
    
            test('addLast', () => {
                list.addLast(11)
                expect(list.size).toEqual(2)
            })
    
            test('removeFirst', () => {
                list.removeFirst()
                expect(list.size).toEqual(0)
            })
        })
    })

    test('full workflow', () => {
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