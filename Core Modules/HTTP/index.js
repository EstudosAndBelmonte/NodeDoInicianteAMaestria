// requisita um HTTP
const http = require('http')
// mostra a porta que será exibido o codigo
const port = 3000

// Cria um servidor
const server = http.createServer((req, res) => {
    res.write('Oi HTTP')
    res.end()
})

// mostra uma mensagem caso o servidor dê certo
server.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})
