const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Gabriel",
        email: "carmooliveiragabriel@gmail.com"
    }
}

const updatedBook = {
    ...book,
    title: "Criando um fron-end moderno",
    category: "HTML",
    type: "Programming"
}

// Original intácto
console.log(book)

// Modificado
console.log(updatedBook)

// uitilizando operador de desestruturação (rest operator) para remover propriedades
const {category,...updatedBook2} = book
console.log(updatedBook2)