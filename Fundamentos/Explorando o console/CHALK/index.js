// Graças a uma atualização posterior a versão 4.11.2, o chalk não pode mais ser chamado dessa forma const chalk = require('chalk')
// é preciso utilizar uma importação dinamica como no exemplo posterior.
const chalk = import("chalk").then(m=>m.default);

const nota = 9
if (nota >= 7) {
    console.log(chalk.green('Parabéns! Você está aprovada!'))
} else {
    console.log(chalk.bgRed.black('Você precisa fazer a prova de recuperação.'))
}