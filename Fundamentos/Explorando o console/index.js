// mais de um valor
const x = 10;
const y = "algum texto"
const z = [1, 2]

console.log(x, y, z)

//contagem de impressões
console.count(`O valor de x é:${x}`)
console.count(`O valor de y é:${y}`)
console.count(`O valor de z é:${z}`)

// variavel entre string
// quando colocamos um texto com %s, após encerrar o texto devemos colocar uma virgula e a variável.
console.log("O nome é %s, ele é programador", y)

setTimeout(() => {
    console.clear()
}, 2000);