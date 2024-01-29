const chalk = import("chalk").then(m => m.default);
const inquirer = require('inquirer')

inquirer.prompt([
    { name: 'nome', message: 'Qual a sua idade?' },
    { name: 'idade', message: 'Qual o seu nome?' }
]).then((answers) => {
    if (!answers.nome || !answers.idade) {
        throw new Error('O nome e a idade são obrigatório!')
    } else {
        console.clear();
        const resposta = `O seu nome é ${answers.p2} e sua idade é ${answers.p1}`
        console.log(chalk.bgYellow(resposta))
    }
}).catch(err => console.log(err))
