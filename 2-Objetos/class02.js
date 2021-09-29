class avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class pai extends avo {
    constructor(sobrenome, profissao = 'prof') {
        super(sobrenome);
        this.profissao = profissao;
    }

}

class Filho extends pai {
    constructor() {
        super('Silva', 'TI');
    }

}

const filh = new Filho()
console.log(filh)