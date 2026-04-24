const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Gabriel",
        email: "carmooliveiragabriel@gmail.com"
    }
}

/*
// O JavaScrpt não impões restrições à modificações dos objetos
book.category = "HTML"

console.log(book)
*/

// Congela o objeto e impede a modificação
Object.freeze(book)

book.category = "CSS" // A modificação nõa é aplicada

book.author.name = "João" // A modoficação é aplicada porque o congelamento é raso(Não se aplica para objetos aninhados)
console.log(book)