const avo = {
    atr1: 1
}

const pai = {
    __proto__: avo,
    atr2: 2

}

const filho = {
    __proto__: pai,
    atr3: 3

}


console.log(filho.atr1)