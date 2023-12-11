const { Queue } = require('./queue')
const { NoSuchElementError } = require('./errors')

describe('Queue', () => {
    describe('queue is empty', () => {
        let queue
        beforeAll(() => {
            queue = new Queue()
        })

        it('should raise an error if dequeue() is called', () => {
            expect(() => queue.dequeue()).toThrow(NoSuchElementError)
        })

        it('should raise an error if next is called', () => {
            expect(() => queue.next).toThrow(NoSuchElementError)
        })

        it('should have a size of 0', () => {
            expect(queue.size).toEqual(0)
        })
    })

    describe('one value is added', () => {
        let queue
        beforeEach(() => {
            queue = new Queue()
            queue.enqueue(6)
        })

        it('should be returned by next', () => {
            expect(queue.next).toEqual(6)
        })

        it('should have a size of one', () => {
            expect(queue.size).toEqual(1)
        })
    })

    describe('removing the only value', () => {
        let queue
        let removedValue
        beforeAll(() => {
            queue = new Queue()
            queue.enqueue(6)
            removedValue = queue.dequeue()
        })

        it('should return the removed value', () => {
            expect(removedValue).toEqual(6)
        })

        it('should have a size of 0', () => {
            expect(queue.size).toEqual(0)
        })
    })

    describe('multiple values added', () =>{
        let queue
        let firstValueAdded = 6
        let secondValueAdded = 3
        beforeEach(() => {
            queue = new Queue()
            queue.enqueue(firstValueAdded)
            queue.enqueue(secondValueAdded)
        })

        it('should return the first value with next', () => {
            expect(queue.next).toEqual(firstValueAdded)
        })

        it('should return the second value with next after removing first', () => {
            queue.dequeue()
            expect(queue.next).toEqual(secondValueAdded)
        })
    })
})