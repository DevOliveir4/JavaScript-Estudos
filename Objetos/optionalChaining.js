/*
    OPTIONAL CHAINING (?.) -  Se a propriedade ou o método, a função que a gente está tentando acessar dentro do objeto, ela não existe, ela é nula ou indefinida, ao invé de gerar um erro, ele vai retornar undefined.
*/

const user = { 
    id: 1,
    name: "Gabriel",
    email: "carmoolivieragabriel@gmai.com",
    /*
    adress: {
        street: "Rua praia funda, 21",
        city: "Lauro de Freitas",
        geo: {
            latitude: 11.1111,
            longitude: 11.1111
        }
    },
    */
    message: function() {
        console.log("Olá", this.name)
    }
}

console.log(user?.adress?.street)