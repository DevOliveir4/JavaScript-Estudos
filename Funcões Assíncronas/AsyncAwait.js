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


async function fetch() {
    const response = await asyncFunction()
    console.log(response)
}

fetch()