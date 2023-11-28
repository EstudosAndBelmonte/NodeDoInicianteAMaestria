# NODE DO INICIANTE A MAESTRIA

Node é uma biblioteca que nos possibilita criar softwares em Js no lado do servidor, onde temos um código JS rodando em C++ para garantir **alta performance**.

### NPM
Um gerenciamento de pacotes do Node, que podemos utilizar bibliotecas de terceiros, baixando elas pelo npm. Os modulos externos ficam numa pasta chamada node_modules, que devemos descartar, ou sejam, a cada instalação do projeto baixamos todos os pacotes novamente.
Ele pode executar determinados scripts JS que criamos. 
São raros um software em Node.js não utiliza o NPM.

## REPL
É um ambiente de teste do Node que podemos realizar alguns testes e análise de sistemas.
O módulo fornece uma implementação Read-Eval-Print-Loop (REPL) que está disponível como um programa autônomo ou incluso em outros aplicativos. Ele pode ser acessado usando:node:repl

const repl = require('node:repl'); COPY
Design e características#
O módulo exporta o repl. Classe REPLServer. Durante a execução, instâncias de repl. O REPLServer aceitará linhas individuais de entrada do usuário, avaliá-los de acordo com uma função de avaliação definida pelo usuário e, em seguida, gerar o resultado. A entrada e a saída podem ser de e , respectivamente, ou podem estar conectados a qualquer fluxo .js Node.node:replstdinstdout

Instâncias de repl. REPLServer suporte a conclusão automática de entradas, visualização de conclusão, edição de linha simplista no estilo Emacs, entradas de várias linhas, pesquisa reversa do tipo ZSH, pesquisa de histórico baseada em subcadeia de caracteres semelhante a ZSH, Saída no estilo ANSI, salvando e restaurando o estado atual da sessão REPL, erro recuperação e funções de avaliação personalizáveis. Terminais que não suportam os estilos ANSI e a edição de linha no estilo Emacs retornam automaticamente para um nível limitado conjunto de recursos.

Comandos e teclas especiais#
Os seguintes comandos especiais são suportados por todas as instâncias REPL:

.break: Quando estiver no processo de entrada de uma expressão de várias linhas, digite o comando (ou pressione +) para abortar posterior entrada ou processamento dessa expressão..breakCtrlC
.clear: Redefine o REPL para um objeto vazio e limpa qualquer expressão de várias linhas sendo entrada.context
.exit: Feche o fluxo de E/S, fazendo com que o REPL saia.
.help: Mostrar esta lista de comandos especiais.
.save: Salve a sessão REPL atual em um arquivo: > .save ./file/to/save.js
.load: Carregue um arquivo na sessão REPL atual. > .load ./file/to/load.js
.editor: Entre no modo de editor (+ para terminar, + cancelar).CtrlDCtrlC
> .editor
// Entering editor mode (^D to finish, ^C to cancel)
function welcome(name) {
  return `Hello ${name}!`;
}

welcome('Node.js User');

// ^D
'Hello Node.js User!'
> COPY
As seguintes combinações de teclas no REPL têm estes efeitos especiais:

Ctrl+C: Quando pressionado uma vez, tem o mesmo efeito que o comando. Quando pressionado duas vezes em uma linha em branco, tem o mesmo efeito que o comando..break.exit
Ctrl+D: Tem o mesmo efeito que o comando..exit
Tab: Quando pressionado em uma linha em branco, exibe global e local variáveis (escopo). Quando pressionado ao inserir outra entrada, exibe opções de preenchimento automático.
Para ligações de chave relacionadas à pesquisa reversa i, consulte pesquisa reversa i. Para todas as outras ligações de chave, consulte Ligações de chave TTY.

### MODULOS
Módulos são scripts reaproveitáveis, que utilizamos bastante programando em Node.
Eles são divididos em três módulos:
- Internos: Módulos que nós desenvolvemos;
- Core Modules: Módulos que vem com o Node.js
- Externos: Módulos que instalamos via npm;

### EXPORT E IMPORT
O Node.js pode utilizar o export e import do ES6, mas são funcionalidades mais modernas de importação e exportação com mais recursos do que as que vimos anteriormente.
Para poder realizar isso precisamos modificar os nossos arquivos para a extensão **.mjs**, onde então podemos exportar uma com export e importar com import, uma unica função, caso seja necessário.

### CORE MODULES
No Node temos diversos Core Modules, que são os que vêm pontos para serem utilizados. Nele podemos resolver diversos problemas como: trabalhar com arquivos e diretorios, servir aplicações e etc.
Para utilizar estes modulos no projeto precisamos importar.

### LER ARGUMENTOS
O Node permite o envio de argumentos via linha de comando que nos passamos eles após a instrução de execução do arquivo.
Os argumentos ficam em um array chamado: process.argv, onde podemos fazer um loop e resgatar os valores enviados.

### Módulos externos
Os módulos externos podem ser instalados via NPM que é o comando inicial para se criar um projeto com o Node.js.
Para isso precisamos inicializar o npm no projeto, com " npm init ", a partir daí os módulos ficam mapeados e podemos instalar módulos que são salvos na pasta node_modules com o comando " npm install <nome> ".