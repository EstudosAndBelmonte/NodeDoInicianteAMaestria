// nome
console.log(process.argv)

const nome = args[0].split('=')[1]

console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`)