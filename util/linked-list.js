const { NoSuchElementError } = require('./errors')

class LinkedList {
    #first = null
    #last = null
    #size = 0

    prepend(value) {
        this.#first = new Node(this.#first, value)
        if (this.#last === null) {
            this.#last = this.#first
        }
        this.#size++
    }

    append(value) {
        const temp = this.#last
        this.#last = new Node(null, value)
        if (temp !== null) {
            temp.next = this.#last
        }
        if (this.#first === null) {
            this.#first = this.#last
        }
        this.#size++
    }

    get first() {
        if (this.#first === null) {
            throw new NoSuchElementError('Cannot get first element of list -- list is empty')
        }
        return this.#first.value
    }

    get last() {
        if (this.#last === null) {
            throw new NoSuchElementError('Cannot get last element of list -- list is empty')
        }
        return this.#last.value
    }

    removeFirst() {
        if (this.#first === null) {
            throw new NoSuchElementError('Cannot remove first element -- list is empty')
        }
        const temp = this.#first
        this.#first = temp.next
        if (this.#first === null) {
            this.#last = null
        }
        this.#size--
        return temp.value
    }

    get size() {
        return this.#size
    }
}

class Node {
    constructor(next, value) {
        this.next = next
        this.value = value
    }
}

module.exports = { LinkedList }