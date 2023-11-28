const minimist = require("minimist")

const args = minimist(process.args.slice(2))
console.log(args)

const nome = args['nome']
const profissao = args['profissao']
console.log(nome, profissao)
console.log(`O nome ele é ${nome} e a profissão dele é ${profissao}`)

// todos os comando será executado com o envio no CMD como: node index.js --nome=Matheus --profissao=Programador