// requisita um HTTP
const http = require('http')
const fs = require('fs')
const url = require('url')
// mostra a porta que será exibido o codigo
const port = 3000

// Cria um servidor
const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name
    // le um arquivo já existente
    if (!name) {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile('arquivo.txt', name, function (err, data) {
            res.writeHead(302, {
                Location: '/',
            })
        })
        return res.end()
    }
})

// mostra uma mensagem caso o servidor dê certo
server.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})
