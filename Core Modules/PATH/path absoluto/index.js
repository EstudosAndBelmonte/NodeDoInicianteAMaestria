const path = require('path')

// path absoluto
console.log(path.resolve('teste.txt'))

// formar path
const midFolder = "relatorios"
const filename = 'Josh.txt'

const finalPath = path.join("/", "arquivo", midFolder, filename)
console.log(finalPath)