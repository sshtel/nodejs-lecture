function Person () {
    this.name = "anonymous"
    this.sayhi = () => {
        console.log('Hi ' + this.name)
    }
}

module.exports = new Person()