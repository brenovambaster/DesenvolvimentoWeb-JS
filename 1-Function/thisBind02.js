function Pessoas() {
    this.idade = 0;
    const self = this;
    setInterval(function() {
            this.idade++;
            console.log(self.idade);
        } /*.bind(this)*/ , 1000)
        // aqui ou usa o bind(this) ou cria uma constante no escopo no obj
}

let a = new Pessoas()



// OU ASSIM  COM ARROW FUNCTION, como usa a arrow o this nao varia
function Pessoas() {
    this.idade = 0;
    setInterval(() => {
            this.idade++;
            console.log(self.idade);
        }, 1000)
        // aqui ou usa o bind(this) ou crias uma constante no escopo no obj
}