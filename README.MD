# NODE DO INICIANTE A MAESTRIA

Node é uma biblioteca que nos possibilita criar softwares em Js no lado do servidor, onde temos um código JS rodando em C++ para garantir **alta performance**.

## Introdução
### NPM
Um gerenciamento de pacotes do Node, que podemos utilizar bibliotecas de terceiros, baixando elas pelo npm. Os módulos externos ficam numa pasta chamada node_modules, que devemos descartar, ou sejam, a cada instalação do projeto baixamos todos os pacotes novamente.
Ele pode executar determinados scripts JS que criamos. 
São raros um software em Node.js não utiliza o NPM.

### REPL
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
.editor: Entre no modo de editor (+ para terminar, + cancelar).Ctrl+D Ctrl+C
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

## Fundamentos
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
No Node temos diversos Core Modules, que são os que vêm pontos para serem utilizados. Nele podemos resolver diversos problemas como: trabalhar com arquivos e diretórios, servir aplicações e etc.
Para utilizar estes módulos no projeto precisamos importar.

### LER ARGUMENTOS
O Node permite o envio de argumentos via linha de comando que nós os passamos após a instrução de execução do arquivo.
Os argumentos ficam em um array chamado: process.argv, onde podemos fazer um loop e resgatar os valores enviados.

### MÓDULOS EXTERNOS
Os módulos externos podem ser instalados via NPM que é o comando inicial para se criar um projeto com o Node.js.
Para isso precisamos inicializar o npm no projeto, com " npm init ", a partir daí os módulos ficam mapeados e podemos instalar módulos que são salvos na pasta node_modules com o comando " npm install <nome> ".

### Explorando o console
Temos uma grande variedade de métodos no console, como o console.log que podemos imprimir mais de uma variável por vez.
Nele podemos inserir variável entre strings.
Há um método para limpar as mensagens de console.
Nele temos um outro modulo que se chama chalks, onde podemos deixar o console de uma forma mais agradável, realizando um feedback com uma base de cores.
Para usar o Chalk devemos instalar ele em nosso projeto com o comando: `npm install chalk`

### Lendo entrada de dados
Podemos ler dados do usuario com o modulo readline, um Core Module.
Neste caso utilizamos o método question, que faz uma pergunta a ser respondida pelo usuario que depois podemos processar a reposta e entregar um retorno.

### Event Loop
É um recurso da arquitetura node, nele é executado uma linha por vez, de cima pra baixo do código escrito. Isso para nós ajuda a evitar problemas de concorrência, garantindo a execução do código.
O único cuidado que devemos tomar é com loop infinito.

### Event Emitter
Ele se comporta como eventos de navegadores, podemos ativar um código em alguns pontos da aplicação, como o início.
É um Core Module chamado `events`, onde precisamos instanciar a classe `EventEmitter` que vem deste módulo e aí então utilizar os métodos para atingir nosso objetivo.


### Síncrono e assíncrono
No Node.js temos duas opções ao executar métodos:
**Forma síncrona:** é um metodo que espera ser totalmente executado para proceguir;
**Forma assíncrona:** é um metodo que o código continua e um ponto futuro obtém a resposta esperada, ou seja se tem uma função na linha dois não irá impedir na linha três.
Elas são conhecidas como Sync ( metodo síncrona ) e Async ( metodo assíncrona ).

### Erros no Node
Temos duas formas principais para gerar ou evidenciar erros.
***Throw***: uma forma de encerrar um programa, gerando um novo erro.
***try catch***: uma forma de evidenciar algo que deu errado em um bloco de código e exibir a mensagem de erro.

## Core Modules
Eles são fundamentais para criação de softwares em Node, e são eles:
*HTTP:* módulo para criar servidores HTTP.
*Path:* Extrair informações de path ( caminhos ) de arquivos.
*fs:* file system, leitura e escrita de arquivos;
*url:* módulo para trabalhar com URL's

### HTTP
Podemos criar um servidor HTTP com este módulo, ou seja, receber uma requisição e enviar código HTML como resposta.
`createServer`: utilizamos para criação do servidor.
`liste`: utilizado para determinar as portas.

#### Parando o serviço
Há alguns serviços do Node que ocupam a aba do terminal para continuar rodando e um deles é o modulo HTTP.
Para parar o serviço basta utilizar: ctrl + C. 
Isso é util quando há um problema no codigo também.

#### Retornando o HTML com o HTTP
Para retornar um HTML precisamos implementar mais recursos.
Podemos adicionar um status code no retorno, com a propriedade statusCode.
Temos que mudar os headers para text/html e retornar o HTML pelo método end do http.

#### Atualizações de projeto
Para emitir atualizações do projeto precisamos sempre reiniciar o servidor, ou seja: salvar, encerrar e reiniciar, este é o processo.
Para atualizar o projeto de uma forma tradicional tem que encerrar o projeto e rodar novamente.

#### URL
O módulo url serve para decompor uma URL que passamos para o método parse.
Nele resgatamos: host, path, search, query e etc.

#### Unindo o URL e HTTP
Podemos trabalhar com estes módulos juntos e ter um resultado interessante, com o http criamos nosso server e alteramos a resposta baseado na URL acessando e com a URL processamos os parametros que vem pela query string, para alterar a lógica do http.

#### Modulo fs na URL
O modulo fs serve para trabalhar com arquivos e diretorios e nele podemos inserir HTML, uma otima maneira é para logs do sistema.

##### Atualizando o arquivo
O writeFile substitui tudo que está em um arquivo, e para atualizar precisamos utilizar o appendFile que adiciona algo novo ao nosso arquivo.

##### Removendo o arquivo
Para remover o arquivo com o fs utilizamos o metodo ***UNLINK*** e para remover os arquivos precisamos passar o arquivo como parametro. 
Nele podemos checar se houve algum erro, a partir da callback retornada. 

##### Detalhes dos arquivos
Com FS podemos puxar alguns detalhes de nosso arquivos, como tamanho, data de criação, se é arquivo ou diretorio. Para realizar essa ação utilizamos a função **STATS**.

##### Renomear um arquivo
Para renomear um arquivo com o fs utilizamos o metodo ***RENAME*** para realizar essa modificação precisamos colocar o arquivo como parametro e tambem o novo nome.
Nesse metodo tambem podemos verificar algum eventual erro, pela callbackm, que pode ser ativado quando o arquivo alvo não existe.

#### Rotas com Node.js puro
Podemos criar um sistema de roteamento simples com Node.js e seus core modules, as rotas são basicamente as paginas que acessamos nos sites.
A ideia é identificar os arquivos acessados pela URL e retorná-los, se existirem.



### PATH
O path é um core module, que conseguimos extrair diversas informações sobre caminho e arquivos, algumas infos possíveis são: nome do diretorio, nome do arquivo, extensão do arquivo e etc.

#### Path absoluto e formar path
Com a função **resolve** é possivel saber qual o path completo ate o arquivo alvo, com ele se descobre o endereço completo.
Com a função ***join*** é possivel formar um path dinamico, com variaveis e valores fixos, com ele criamos um caminho.

#### Trabalhando com diretorios
Com o modulo fs também podemos trabalhar com diretorios (pastas);
O metodo **exists** pode evidenciar se um diretorio existe ou não;
E o metodo **mkdir** pode criar um diretorio;

### Módulo OS
Com o core module OS podemos extrair informações do sistema operacional.

## NPM
É o principal gerenciamento de pacotes do Node.js e significa **Node Package Manager**.
Nele podemos não só instalar pacotes, mas também configurar o projeto e rodar scripts por meio do NPM.
Todas as vezes que se cria um projeto gera sempre um arquivo, o *package.json*.

### Criando um projeto
Para criar um projeto começamos com o comando ***npm init***.
Nele somos questionados para configurar algumas opções iniciais, como o nome do projeto, nome do autor e qual a versão, e após tudo isso é criado o *package.json*.