class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log("Algum som genérico do animal")
    }
}

class Dog extends Animal {
     
}

const dog = new Dog("Tob")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {

}

const cat = new Cat("Me")
console.log(cat.name)
cat.makeNoise()