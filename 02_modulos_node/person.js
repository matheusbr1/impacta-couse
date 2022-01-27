module.exports = () => data = {
    name: 'Pedro',
    age: 25,

    show: function () {
        let text = `Name: ${this.name} \n Age:${this.age}`
        return text
    }
}    