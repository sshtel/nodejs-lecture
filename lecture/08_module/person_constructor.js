function Person (name) {
    this.name = name
    this.sayhi = () => {
        console.log('Hi ' + this.name)
    }
}

module.exports = Person