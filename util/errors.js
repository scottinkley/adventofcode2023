class IndexOutOfBoundsError extends Error {
    constructor(message) {
        super(message)
        this.name = "IndexOutOfBoundsError"
    }
}

class NoSuchElementError extends Error {
    constructor(message) {
        super(message)
        this.name = "NoSuchElementError"
    }
}

module.exports = { IndexOutOfBoundsError, NoSuchElementError }