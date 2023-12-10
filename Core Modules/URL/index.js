const url = require('url')
const address = "https://www.meusite.com.br/catalog?produtos=cadeira";
const parseUrl = new url.URL(address)


// mostra o host (endereço do site)
console.log(parseUrl.host)
// mostra a pagina que ele está acessando
console.log(parseUrl.pathname)
// oq esta sendo pesquisa do na pagina
console.log(parseUrl.search)
// como está sendo pesquisado esse parametro
console.log(parseUrl.searchParams)
// o parametro que está sendo enviado.
console.log(parseUrl.searchParams.get('produtos'))