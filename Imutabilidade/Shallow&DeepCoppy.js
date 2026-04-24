// Shallow Copy (Cópia superficial): Não pega os itens aninhados    

const htmlCourse = {
    course: "HTML",
    students: [{name: "Gabriel", email: "carmooliveiragabriel@gmail.com"}]
}
/*
const jsCourse = {
    ...htmlCourse,
    course: "JavaScript"
}

// Assim vai modificar o htmlCourse também studentes é uma referência e não uma cópia
jsCourse.students.push({name: "Carlos", email: "carlos@gmail.com"})
*/

// Deep Copy
const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",
    students: [...htmlCourse.students, {name:"Carlos", email: "carlos@gmail.com"}]
}

console.log(htmlCourse)
console.log(jsCourse)