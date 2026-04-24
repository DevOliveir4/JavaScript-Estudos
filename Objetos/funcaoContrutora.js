/*
    FUNÇÃO CONTRUTORA
*/

function createProduct(name) {
    const product = {}

    product.name = name 
    product.details = function() {
        console.log("O nome do produto é", this.name)
    }

    return product
}

// O new cria um novo objeto utilizando a estrutura da função construtora.

const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()
        