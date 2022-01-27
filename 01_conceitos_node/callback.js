let operation = function (x, y) {
    return x + y
}

let sum = operation(7, 3)

console.log(sum)

function execute(operation) {
    return operation(2, 3)
}

let value1 = execute((x, y) => x + y)
let value2 = execute((x, y) => x - y)
let value3 = execute((x, y) => x * y)
let value4 = execute((x, y) => x / y)

console.log(value1, value2, value3, value4)