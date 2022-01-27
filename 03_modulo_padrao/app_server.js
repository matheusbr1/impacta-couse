let http = require('http')
let fs = require('fs')

let server = http.createServer((req, res) => {
    fs.readFile('index.html', (error, content) => {
        if (error) {
            res.writeHead(404, { "Content-Type": "text/html" })
            res.write("<h1> Página não encontrada </h1>")
        } else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(content)
        }
        res.end()
    })
})

const port = 3000

server.listen(port, () => console.log(`Server Running on port: ${port}`))