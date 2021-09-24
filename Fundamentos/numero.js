const peso1 = 1.0;
const peso2 = Number("2.0")

console.log(typeof peso1, typeof peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const aval1 = 9.1
const aval2 = 9.0
const total = aval1 * peso1 + aval2 * peso2;
const media = total / (peso1 + peso2)
console.log(total)
console.log(media.toFixed(2))
console.log(typeof total, typeof media);