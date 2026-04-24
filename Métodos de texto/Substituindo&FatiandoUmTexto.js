let message = "Estou estudando os fundamentos do JavaScript."

// Substituindo parte de um texto

console.log(message.replace("JavaScript", "HTML"))

// O conteúdo não é alterado
console.log(message)

// Extraindo uma parte da String(start, end) 

console.log(message.slice(0, 5))

// Extraindo uma parte de trás para frente
console.log(message.slice(-11))


// Removendo espaço em branco no iníco e no final

let textWithSpace = "       Texto de exemplo    "
console.log(textWithSpace.length)
console.log(textWithSpace.trim().length)

