// Funcao que retorna uma promise

function asyncFunction() {
    return new Promise((resolve, reject) =>{
        // Simula uma operação assincrona
        setTimeout(() => {
            const isSuccess = true

            if (isSuccess) {
                resolve("A operação foi concluida com sucesso!")
            } else {
                reject("Algo deu errado!")
            }
        }, 3000)
    })
}

// Visualizando que o retorno é uma promise
// console.log(asyncFunction())

asyncFunction().then((response) => {
    console.log("Sucesso:", response)
}).catch((error) => {
    console.log("Erros:", Error)
}).finally(() => {
    console.log("Fim da execução")
})
