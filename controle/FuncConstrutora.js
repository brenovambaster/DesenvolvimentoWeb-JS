function Pessoa(name) {
    this.name = name;

    this.falar = () => {
        console.log(`My name is ${this.name}`);
    }
}
const p = new Pessoa('breno')
p.falar()