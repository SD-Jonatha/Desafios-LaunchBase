const nome = "Karla"
const peso = 60
const altura = 1.55

const imc = peso / (altura * altura)

if (imc >= 30) {
  console.log(` ${nome} voce esta acima do peso `)
} else {
  console.log(` ${nome} voce nao esta acima do peso `)
}

const nome1 = "Jonatha"
const sexo = "F"
const idade = 60
const contribuicao = 25

if (sexo == "M" && contribuicao >= 35) {
  if (contribuicao + idade == 95) {
    console.log(` ${nome1}, voce pode se aposentar`)
  }

} else if (sexo == "F" && contribuicao >= 30) {
  if (contribuicao + idade == 85) {
    console.log(` ${nome1}, voce pode se aposentar`)
  }

} else {
  console.log(` ${nome1}, voce nao pode se aposentar`)

}
