const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Gabriel",
        email: "carmooliveiragabriel@gmail.com"
    }
}


function deepFreeze(object) {
    // Obtem um array com todas as propriedades do objeto
    const props = Reflect.ownKeys(object)
    
    // Itera por todas as propiedades do objeto 
    for(const prop of props) {
        // Obtem o vlaor associado à proprie
        const value = object[prop]

        // Verifica se o valor é um objeto ou uma função
        if(value && typeof value == "object" || typeof value === "function") {
            deepFreeze(value)
        }
    }

    // Retorna o objeto congelado
    return Object.freeze(object)
}

// Chama a função para congelar o objeto de forma profunda
deepFreeze(book)

book.category = "HTML"
book.author.name = "Carlos"

console.log(book)