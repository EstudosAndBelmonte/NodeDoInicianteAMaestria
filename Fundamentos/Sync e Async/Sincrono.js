// importando FileServer
const fs = require('fs')
console.log('ínicio')
// irá executar uma função sincrona.
fs.writeFileSync('arquivo.txt', 'oi')
console.log('Fim')