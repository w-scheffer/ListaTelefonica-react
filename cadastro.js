const pessoaJoao = {
	"nome" : "joao",
	"idade" : 20,
	"tipo" : "fisica",
	"cpf": "12"
}

const pessoaAna = {
	"nome" : "ana",
	"idade" : 17,
	"tipo": "fisica",
	"cpf" : "13"
}

const pessoaTres = {
	"nome" : "jo8ao",
	"idade" : 20,
	"tipo" : "fisica",
	"cpf": "12"
}

lista = [pessoaJoao, pessoaAna, pessoaTres]
listaAprovados = []

const validaNome = function(pessoa){
  if(pessoa.nome.length >= 3){
    return true;
  } else {
    return false;
  }
}
	
const validaIdade = function(pessoa){
  if(pessoa.idade >= 18){
    return true;
  } else {
    return false;
  }
}

const validaTipo = function(pessoa){
		if(pessoa.tipo === "fisica"){
      return true;
		} else {
			return false;
		}
}


const validaCPF = function(pessoa){
  for (let index in listaAprovados){
    const person = listaAprovados[index];
    if(pessoa.cpf == person.cpf && pessoa !== person){
          return false;
    }
  }

  return true;
}

for (let index in lista){
  const pessoa = lista[index];
  let testeNome = validaNome(pessoa);
  let testeIdade = validaIdade(pessoa);
  let testeTipo = validaTipo(pessoa);
  let testeCPF = validaCPF(pessoa);
  if(testeCPF && testeIdade && testeNome && testeTipo){
    console.log("cadastro valido");
    listaAprovados.push(pessoa);
  } else{
    console.log("cadastro invalido");
  }
}
