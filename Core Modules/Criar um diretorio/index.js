const fs = require('fs')

// verifica se existe o diretorio
if (!fs.existsSync('./minhapasta')) {
    console.log('não existe!')
    // caso entre nesse if é porque não existe então criamos o novo diretorio
    fs.mkdirSync('minhapasta')
} else if (fs.existsSync('./minhapasta')) {
    // Caso exista irá entrar no else
    console.log('Existe!')
}
