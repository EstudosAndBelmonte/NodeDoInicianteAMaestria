# NODE DO INICIANTE A MAESTRIA

Node é uma biblioteca que nos possibilita criar softwares em Js no lado do servidor, onde temos um código JS rodando em C++ para garantir **alta performance**.

## Introdução

### NPM explicações

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
> // Entering editor mode (^D to finish, ^C to cancel)
> function welcome(name) {
> return `Hello ${name}!`;
> }

welcome('Node.js User');

// ^D
'Hello Node.js User!'

> COPY
> As seguintes combinações de teclas no REPL têm estes efeitos especiais:

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
**_Throw_**: uma forma de encerrar um programa, gerando um novo erro.
**_try catch_**: uma forma de evidenciar algo que deu errado em um bloco de código e exibir a mensagem de erro.

## Core Modules

Eles são fundamentais para criação de softwares em Node, e são eles:
_HTTP:_ módulo para criar servidores HTTP.
_Path:_ Extrair informações de path ( caminhos ) de arquivos.
_fs:_ file system, leitura e escrita de arquivos;
_url:_ módulo para trabalhar com URL's

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

Para remover o arquivo com o fs utilizamos o metodo **_UNLINK_** e para remover os arquivos precisamos passar o arquivo como parametro.
Nele podemos checar se houve algum erro, a partir da callback retornada.

##### Detalhes dos arquivos

Com FS podemos puxar alguns detalhes de nosso arquivos, como tamanho, data de criação, se é arquivo ou diretorio. Para realizar essa ação utilizamos a função **STATS**.

##### Renomear um arquivo

Para renomear um arquivo com o fs utilizamos o metodo **_RENAME_** para realizar essa modificação precisamos colocar o arquivo como parametro e tambem o novo nome.
Nesse metodo tambem podemos verificar algum eventual erro, pela callbackm, que pode ser ativado quando o arquivo alvo não existe.

#### Rotas com Node.js puro

Podemos criar um sistema de roteamento simples com Node.js e seus core modules, as rotas são basicamente as paginas que acessamos nos sites.
A ideia é identificar os arquivos acessados pela URL e retorná-los, se existirem.

### PATH

O path é um core module, que conseguimos extrair diversas informações sobre caminho e arquivos, algumas infos possíveis são: nome do diretorio, nome do arquivo, extensão do arquivo e etc.

#### Path absoluto e formar path

Com a função **resolve** é possivel saber qual o path completo ate o arquivo alvo, com ele se descobre o endereço completo.
Com a função **_join_** é possivel formar um path dinamico, com variaveis e valores fixos, com ele criamos um caminho.

#### Trabalhando com diretorios

Com o modulo fs também podemos trabalhar com diretorios (pastas);
O metodo **exists** pode evidenciar se um diretorio existe ou não;
E o metodo **mkdir** pode criar um diretorio;

### Módulo OS

Com o core module OS podemos extrair informações do sistema operacional.

## NPM

É o principal gerenciamento de pacotes do Node.js e significa **Node Package Manager**.
Nele podemos não só instalar pacotes, mas também configurar o projeto e rodar scripts por meio do NPM.
Todas as vezes que se cria um projeto gera sempre um arquivo, o _package.json_.

### Criando um projeto

Para criar um projeto começamos com o comando **_npm init_**.
Nele somos questionados para configurar algumas opções iniciais, como o nome do projeto, nome do autor e qual a versão, e após tudo isso é criado o _package.json_.
Podemos criar nosso projeto de uma forma mais rapida, para realizar isso basta `npm init -y`, dessa forma o relatorio irá ser criado em questão de segundos.

#### Instalações dos pacotes

Para instalar um pacote vamos utilizar o comando `npm install <nome>`, onde o <nome> será substituido pelo nome do pacote, quando fazemos desta maneira um node module é criada e nela todos arquivos de modulos de terceiro são armazenados.
Sempre que rodamos o comando npm install, a pasta node_modules é recriada com todos os modulos da package.json.

#### Onde descobrir os modulos

Todos os modulos ficam no site do NPM.
`https://www.npmjs.com/`

#### Como utilizar um pacote como dev

Há uma possibilidade de instalar pacotes apenas para o ambiente de desenvolvimento.
Basta colocar o codigo `--save-dev` no final do codigo, isso vai fazer com que ele seja intalado no package.json dos demais.
Um exemplo: servidor para ambiente local, como o Nodemon.

#### Atualização de pacotes

Constantemente os pacotes do npm são atualizados por seus desenvolvedores, para atualizar todos os pacotes de uma unica vez podmeos utilizar o comando `npm update`, e vai trazer todas as atualizações e implantar no 'package.json'.
Mas se quiser atualizar um especifico utilizamos `npm update <nome>`
Muitas vezes com o simples comando do `npm update` pode acontecer de não atualizar, então devemos utilizar o comando `npx npm-check-updates -u`.

#### Criando um script

É possivel criar rotinas com o npm também, ou seja, executamos uma série de comandos com apenas um `npm run <script>` onde script é o nome da sequência de comando que criamos.
Quando criado um script e adicionado ao package, somente o comando run não é preciso colocar run na frente do NPM, os demais é preciso.

#### Instalando pacote global

Um pacote global não fica salvo na pasta node_modules do projeto, fica no computador do usuário. Porem ele tem uma vantagem que podemos utilizar em qualquer local pelo terminal.
Para determinar que é uma variavel local utilizamos uma flag -g em node install.

#### NPX

Alguns pacotes são scripts executaveis, que resultam em alguma ação no nosso computador, como por exemplo a instalação do react, que é feita pelo npx, desta maneira uma serie de processos são simplificados por este executor.

#### Remover pacote com NPM

Para removerk um pacote utilizamos o comando: `npm unistall <nome>`
Isso faz com que o pacote seja removido do package.json.

## Express

É um framework Web onde podemos criar aplicações em Node, e diversos outros recursos como banco de dados relacionais e não relacionais, MVC e diversos outros. Com o express podemos tornar a criação de aplicativos muito mais simplificada, do que com o Core Module.
Nele podemos criar rotas, renderizar HTML, conectar a um banco de dados.

- primeiro criamos um init
- depois basta instalar o Express com o comando `npm install express`

### Rotas

Rota é um conceito super importante e presente em aplicações web. Basicamente são URL's que acesssamos.
Rotas são uma ponte entre o usuario e a logica da aplicação.

### HTML com Express

Para enviar HTML como resposta utilizamos o método `senfile`, isso faz com que o arquivo seja renderizado no navegador e precisamos acessar o arquivo por meio do direito base, isso requer o modulo path.

### Problema de atualização

Precisamos toda vez reiniciar o servidor para receber as atualizações isso é muito custoso, para acabar com isso vamos instalar o `nodemon`, que todas as vez que salvamos nosso projeto ele reinicia o servidor.

### Middlewares

Middlewares, são codigos que podem ser executados no meio/entre de alguma ação e outra. Para utilizar o metodo nos dá acesso a utilizar middlwares é o use no Express.
Por exemplo: Verificar se usuário está logado, podemos ter um para esta verificação.
Essa função pode mandar para qualquer pagina mas tem que estar logado para proceguir.

### Parâmetros por URL

Podemos resgatar os parametros da URL por meio do REQ, basta acessar req.params.<nome>, onde o nome deve ser o que está definido na URL do express que fica dessa forma: /users/:id, que nesse caso estariamos buscando o usuario no banco de dados pelo ID.

### Enviar dados

#### POST

Para enviar os dados vamos precisar criar um form e mandar os dados via POST para alguma URL, no expess precisamos colocar alguns middlewares como o express.json para ler os dados do body e também uma roda que vai receber estes dados, utilizando o metodo post do express.

#### Módulo de rotas

Podemos unir varias rotas em um modulo, isso vai deixar nosso codigo mais organizado.
Normalmente criamos uma pasta ou arquivo que contém estas rotas que representa uma entidade em comum, como users.
Vamos utilizar um novo objeto chamado router e nele colocar as rotas, depois exportámos e importanmos no arquivo principal.

#### Colocando CSS

Para inserir CSS nas paginas e arquivos estáticos vamos precisar de um middleware, que é o express.static. Colocamos um diretorio base, que normalmente é o public e criar os estaticos a partir desta pasta.

#### Criando uma página 404

Para criar uma pagina 404, ou seja, quando o usuario acessar uma pagina que não existe, basta criar um novo middleware abaixo de todas as rotas, que responde com este status e enviar um arquivo de templates referente a esta pagina.
