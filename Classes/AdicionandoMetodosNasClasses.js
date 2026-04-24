class User { 
    constructor(name, email) {
        this.name = name,
        this.email = email
    }

    sendEmail() {
        console.log("E-mail enviado para", this.name, "para o endereço", this.email)
    }
}

const user1 = new User("Gariel", "carmooliveiragabriel@gmail.com")

console.log(user1)
user1.sendEmail()