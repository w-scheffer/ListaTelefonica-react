const livros_url = 'http://private-ba46ed-softtrainee.apiary-mock.com/books'
const autores_url = 'http://private-ba46ed-softtrainee.apiary-mock.com/authors'

const lista_Autores = (url) => {
  let autor = []
  fetch(url)
  .then((response) =>
    response.json()
  ).then((data) => {
    data.forEach(element => {
      autor.push({nome: element.nome, id: element.id})
    })
  })
  .catch(error => {
    console.log(error);
  })

  return autor
};

const lista_Livros = (url) => {
    let books = []
    fetch(url)
    .then((response) => 
      response.json()
    )
    .then((data) => {
        data.forEach(element => {
          
          books.push({nome: element.nome, autor: element.autor});
        });
      })
    .catch(error => {
        console.error(error);
    })

    return books
};


const autores = lista_Autores(autores_url);
const livros = lista_Livros(livros_url);

