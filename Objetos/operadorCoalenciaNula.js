/*
    OPERADOR DE COALASCÊNCIA NULA (??) -  É um operador lógico que retorna o seu operando que está do lado direito quando o seu operador do lado esquerdo é nulo ou undefined caso contrário ele vai retornar o seu operando do lado esquerdo.
*/

const profile = {
    name: "Gabriel"
}

console.log(profile.avatar ?? "default.png")