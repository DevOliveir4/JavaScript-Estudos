// O método findeIndex() retorna o índice no array do primeiro elemento que satisfaz a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const values = [2,3,5,12]

// Obtendo o índice do elemento que o valor é maior que 4
const index = values.findIndex((value) => value > 4)
console.log(index)
console.log("O índice", index, "é o elemento",values[index])