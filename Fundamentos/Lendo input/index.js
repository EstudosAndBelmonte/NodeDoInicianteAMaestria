const readline = require("readline").createInterface({
    input: process.input,
    output: process.stdout
})

readline.question('Qual a sua linguagem preferida?', (language) => {
    if (language.toUpperCase() == 'HTML') {
        console.log('Isso nem é linguagem')
    } else {
        console.log(`A minha linguagem preferida é:${laguage}`)
    }
    readline.close()
})