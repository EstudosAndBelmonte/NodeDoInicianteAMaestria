// Para importa um parâmetro é sempre recomendado colocar uma variável para receber ela.
const fs = require('fs') // file system

// comando para ler o arquivo
// readfile('endereço ate o arquivo','encode do arquivo', função anonima)
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})