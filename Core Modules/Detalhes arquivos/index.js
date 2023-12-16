const fs = require('fs')

// para rodar a função precisamos que exista o arquivo
fs.stat('novoarquivo.txt', (err, stats) => {
    if (err) {
        console.log(err)
        return
    }

    // verifica se é arquivo
    console.log(stats.isFile())
    // verifica se é diretorio
    console.log(stats.isDirectory())
    // verifica se é uma tag
    console.log(stats.isSymbolicLink())
    // dia e a hora que foi criado
    console.log(stats.ctime)
    // tamanho do arquivo
    console.log(stats.size)
})