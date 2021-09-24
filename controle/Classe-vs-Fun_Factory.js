class Pessoa {

    constructor(name) {
        this.name = name
    }
    falar() {
        console.log(`My name is ${this.name}`);
    }
}

const p1 = new Pessoa("Breno")
p1.falar();

// Factory
const CreatePeople = function(name) {
    obj = { falar: () => console.log("Name is " + name) }

    return obj

}

//OOU

const CriarPessoa = (name) => {
    return { falar: () => console.log('Name is ' + name) }
}

const p2 = CreatePeople("JOAO")
p2.falar()

p3 = CriarPessoa("Alfredo MUrta");
p3.falar();