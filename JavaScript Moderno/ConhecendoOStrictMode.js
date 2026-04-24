// O Strict mode(modo estrito): ativando esse modo, os erros que eram silenciados passa a gerar exceções no JavaScript.
   
"use strict"

function showMessage() {

    let personName = "Gabriel Oliveira"

    console.log(personName)
}

showMessage()

class Student {
    get points() {
        return 7
    }
}

let student = new Student()

student.points = 7