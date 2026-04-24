// o método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constroi um novo array com base nos retornos de cada chamada. E no final, devolve o novo array

const products  = ["Teclado", "Mouse", "Monitor"]

// Percorre os itens do Array
products.map((product) => {
    console.log(product)
})

// Sintaxe reduzida
products.map((products) => console.log(products))

// Utilizando o novo objetio retornado
const formatted = products.map((product) =>{
    return product.toUpperCase()

    return {
        name:procuct,
        price:150
    }
})

console.log(formatted)