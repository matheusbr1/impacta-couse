function showTitle() {
    console.log('Curso de React JS')
}

function executeSum(x, y) {
    return x + y
}

console.log(executeSum(5.6, 5.4))

showTitle()

// Callback

function execute(operation) {
    return operation(3, 2)
}

let result = execute(function (x, y) {
    return x * y
})

console.log(`Callback: ${result}`)
