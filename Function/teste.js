var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

const func = (endereco) => {
    const { rua, numero, bairro, cidade, uf } = endereco
    //console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com
    //nº ${endereco.numero}.`)
    console.log(`O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua "${rua}" com nº ${numero}.`)
}

func(endereco)

function interval_num_par(a, b) {
    for (a; a <= b; a++) {
        if (a % 2 == 0)
            console.log(a)
    }
}

interval_num_par(2, 6)