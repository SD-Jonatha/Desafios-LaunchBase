const usuarios = [
  { 
    nome : 'Thiago',
    tecnologias : [ 'css', 'HTML']

  },
  { 
    nome : 'Isaque',
    tecnologias : [ 'BD', 'HTML']
  },
  { 
    nome : 'Karla',
    tecnologias : [ 'Redes', 'css']
  },
  { 
    nome : 'Ciclano',
    tecnologias : [ 'Hardware', 'Malware']
  }

]
for (let i of usuarios) {
  console.log(`${i.nome} trabalha com ${i.tecnologias.join(', ')}`)
}


function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
      if (tecnologia == 'css') return true
  }

  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

  if(usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}