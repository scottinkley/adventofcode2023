const { LinkedList } = require("./linked-list")

class Queue {
    #list

    constructor() {
        this.#list = new LinkedList()
    }

    enqueue(value) {
        this.#list.addLast(value)
    }

    dequeue() {
        return this.#list.removeFirst()
    }

    get next() {
        return this.#list.first
    }

    get size() {
        return this.#list.size
    }
}

module.exports  = { Queue }