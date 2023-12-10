// requisita um HTTP
const http = require('http')
const fs = require('fs')
// mostra a porta que será exibido o codigo
const port = 3000

// Cria um servidor
const server = http.createServer((req, res) => {
    // le um arquivo já existente
    fs.readFile('mensagem.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
})

// mostra uma mensagem caso o servidor dê certo
server.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})
