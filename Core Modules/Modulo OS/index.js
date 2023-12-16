const os = require('os')

// Quantas CPUs tem o nosso computador
console.log(os.cpus())
// Quanto de memoria livre tem na maquina
console.log(os.freemem())
// Descobrir qual o diretorio da home
console.log(os.homedir())
// qual o sistema operacional da maquina
console.log(os.type())