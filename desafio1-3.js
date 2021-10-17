// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem 
// um nome e suas tecnologias (novo array), por exemplo:



const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

/*
Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js
*/

for (i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

/*
Busca por tecnologia
Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

Por exemplo:

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
}
*/

function checaSeusuarioUsaCSS(usuario) {

  for (i = 0; i < usuario.tecnologias.length; i++) {
    if (usuario.tecnologias[i] == 'CSS') {
      return true
    }

  }
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeusuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}

/*
Soma de despesas e receitas
Crie um programa que calcula a soma de receitas e despesas de usuários e 
no fim retorna o saldo (receitas - despesas).

Utilize o array de usuários abaixo:
*/

const usuarios1 = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];
let soma = 0

function somanumeros(numeros) {
  const total = numeros.reduce((total, ind) => total + ind)
  return total

}
function calculaSaldo(receitas, despesas) {
  let somaReceitas = somanumeros(receitas)
  let somaDespesas = somanumeros(despesas)

  let totalDespesas = somaReceitas - somaDespesas



  return totalDespesas
}



for (i = 0; i < usuarios1.length; i++) {
  const total = calculaSaldo(usuarios1[i].receitas, usuarios1[i].despesas)

  if (total < 0) {
    console.log(`${usuarios1[i].nome} possui saldo NEGATIVO de ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
  } else {
    console.log(`${usuarios1[i].nome} possui saldo POSITIVO de ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

  }

  //console.log(total, usuarios1[i].nome)
}
