// O método filter() cria um novo Array com todos os elementos que passaram na condicao


// Retorna um Array com palavras com mais de 3 letras
const words = ["JavaScript", "HTML", "CSS", "Web"]

const results = words.filter((word) => word.length > 3)

console.log(results)


//Retorna um Array com odjetos com o parametro promotion = true
const products = [
    {description:"Teclado", price: 150, promotion: true},
    {description:"Mouse", price: 70, promotion: false},
    {description:"Monitor", price: 400, promotion: true}
]

const promotions = products.filter((product) => product.promotion === true)
console.log(promotions)