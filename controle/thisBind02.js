function Pessoas() {
    this.idade = 0;
    const self = this;
    setInterval(function() {
            self.idade++;
            console.log(self.idade);
        } /*bind(this)*/ , 1000)
        // aqui ou usa o bin(this) ou crias uma constante no escoopo no obf
}

let a = new Pessoas()