const creditCard = "1234567812344928"
console.log(creditCard.length)

// Pega os 4 últimos digitos
const lastDigits = creditCard.slice(-4)
console.log(lastDigits)

// Preenche a String do inicio
const maskedNumber = lastDigits.padStart(creditCard.length, "X")
console.log(maskedNumber)