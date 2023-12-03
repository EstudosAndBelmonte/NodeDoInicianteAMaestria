// Função A
function a() {
    console.log('Executando a()')
}

// Função B
function b() {
    console.log('Executando b()')
}

// Função C
function c() {
    console.log('Executando c()')
    a()
    b()
}

c()