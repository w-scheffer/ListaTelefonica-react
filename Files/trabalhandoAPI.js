const livros_url = 'http://private-ba46ed-softtrainee.apiary-mock.com/books'
const autores_url = 'http://private-ba46ed-softtrainee.apiary-mock.com/authors'


const lista_Autores = (url) => {
    return fetch(url)
    .then((response) =>
      response.json()
    ).then((data) => {
      return data;
    })
    .catch(error => {
      console.error('error autores: ', error);
    })
};
 

const lista_Livros = (url) => {
  return fetch(url)
    .then((response) => 
      response.json()
    )
    .then((data) => {
        return data;
      })
    .catch(error => {
        console.error('error livros: ', error);
    })
};


const execta = async () => {
  try {

    const autores = await lista_Autores(autores_url);
  
    const livros = await lista_Livros(livros_url);
    
    const livros_Corretos = livros.map(livro => {
      const autor = autores.find(autores => autores.id === livro.autor);
      return ({nome: livro.nome, autor: autor.nome});
    })

    console.log('fim: ', livros_Corretos)
  } catch (e) {
    console.error('error executa:' , e)
  }

}; 

execta();