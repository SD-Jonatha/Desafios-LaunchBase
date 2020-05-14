//Construção e impressão de objetos
const empresa = {
  nome: 'Rocketseat',
  cor: 'Roxo',
  Foco: 'Programacao',
  Endereco: {
    rua: 'Rua Guilherme Gembala',
    Numero: 260
  }
}

console.log(`A empresa ${empresa.nome} esta localizada em 
${empresa.Endereco.rua}, ${empresa.Endereco.Numero} `)

//Vetores e objetos
/* Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' } */

const Programador = {
  nome : 'Thiago',
  idade : 28,
  tecnologias : [
    {
      nome : 'Javascript',
      especialidade : 'Web/Mobile'
    }
  ]  
}

console.log(`O usuario ${Programador.nome} tem ${Programador.idade} e usa
 a tecnologia ${Programador.tecnologias[0].nome} com especialidade em ${Programador.tecnologias[0].especialidade}`)