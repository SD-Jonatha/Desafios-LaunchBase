//// Calculo IMC //////
const nome = "Jonatha"
const peso = 120
const altura = 1.81

const imc = peso / (altura * altura) 

if (imc >= 30){
  console.log('Jonatha voce esta acima do peso')
} else{
  console.log('Jonatha voce nao esta acima do peso')
}

///////////////////////Calculo Aposentadoria//////////////////////////
const nome1 = 'Karla' 
const sexo = 'F'
const idade = 55
const contribuicao = 30
const TempoTotal = idade + contribuicao

if ( sexo === 'F' && TempoTotal >=85 && contribuicao >=30  ){
  console.log('Karla, voce pode se aposentar')
} else {
  console.log('Karla, voce nao pode se aposentar')
}