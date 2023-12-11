class NoSuchElementError extends Error {
    constructor(message) {
        super(message)
        this.name = "NoSuchElementError"
    }
}

module.exports = { NoSuchElementError }