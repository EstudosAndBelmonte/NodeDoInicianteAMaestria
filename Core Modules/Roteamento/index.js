// requisita um HTTP
const http = require('http')
const fs = require('fs')
const url = require('url')
// mostra a porta que será exibido o codigo
const port = 3000

// Cria um servidor
const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)
    // le um arquivo já existente
    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {
            fs.readFile(filename, function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        } else {
            fs.readFile('404.html', function (err, data) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        }
    }
})

// mostra uma mensagem caso o servidor dê certo
server.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})
