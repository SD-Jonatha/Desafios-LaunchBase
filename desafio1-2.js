// Desafios para fortalecer alguns conceitos, entre eles:

// Objetos;
// Vetores.
// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

// Nome: Rocketseat

// Cor: Roxo

// Foco: Programação

// Endereço:

// Rua: Rua Guilherme Gembala
// Número: 260
// Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:

// const usuario = {
//   nome: "Diego",
//   empresa: {
//     nome: "Rocketseat"
//   }
// };

const usuario = {
  nome: "Thiago",
  empresa : {
    nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programação",
    Endereco: {
      Rua: "Rua Guilherme Gembala",
      Numero: 260
    }
  }
}

console.log(`A empresa ${usuario.empresa.nome} 
está localizada em ${usuario.empresa.Endereco.Rua}, 
${usuario.empresa.Endereco.Numero}`)

/*
Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
*/
const usuario2 = {
  nome: "Thiago",
  idade: 30,
  tecnologias: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${usuario2.nome} tem ${usuario2.idade} anos e usa a tecnologia ${usuario2.tecnologias[0].nome} com especialidade em ${usuario2.tecnologias[0].especialidade}`)
