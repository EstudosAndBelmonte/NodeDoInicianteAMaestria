const path = require('path')
const customPath = "/relatorios/matheus/relatorio1.pdf"

// caminho ate chegar no arquivo
console.log(path.dirname(customPath))
//nome do arquivo
console.log(path.basename(customPath))
//extensão do arquivo
console.log(path.extname(customPath))