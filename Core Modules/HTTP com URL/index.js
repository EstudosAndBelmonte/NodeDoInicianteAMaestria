// requisita um HTTP
const http = require('http')
// mostra a porta que será exibido o codigo
const port = 3000

// Cria um servidor
const server = http.createServer((req, res) => {
    // busca nossa requisição e envia um parametro.
    // o metodo true é para enviar de uma forma correta.
    const urlInfo = require('url').parse(req.url, true)
    // estamos pegando a query que está vindo da UrlInfo e retornando o nome
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')

    if (!name) {
        res.end('<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"/></form>')
    } else {
        res.end(`<h1>Sejam bem-vindo ${name}</h1>`)
    }
    res.end()
})

// mostra uma mensagem caso o servidor dê certo
server.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})
