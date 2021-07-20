function area(larg, alt) {
    const area = larg * alt
    if (area > 20)
        console.log(`Valor maior que o permitido: ${area}`);
    else
        return area

}
console.log(area(2, 3))
console.log(area(5, 3))
    // retorna undefined, pois nao há retorno explicito
console.log(area(5, 5))