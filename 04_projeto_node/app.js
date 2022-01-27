let moment = require('moment')

// Change locale before the instance of moment
moment.locale('pt-BR')

let now = moment()

console.log(now)
console.log(now.format("DD/MM/YY HH:mm:ss - dddd -(MMMM)"))