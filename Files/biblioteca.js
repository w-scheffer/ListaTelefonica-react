/*
  Exercicios sobre Map, Reduce e Filter (estas funções devem ser usadas)
  Baseado no array acima, criar funções para:
  - Retornar todos os livros da China
  - Retornar o nome, e quantidade de paginas dos livros com mais de 500 paginas
  - Retornar a media de quantidade de paginas dos livros com ano maior que 1900
  - Retornar o nome do livro mais recente qual o livro que tenha até 200 paginas (essa aqui usa uma outra função junto além das citadas acima)
*/

const biblioteca = [
    {
      nome: "Dom Quixote",
      paginas: 401,
      ano: 1605,
      pais: "China"
    },
    {
      nome: "Guerra e Paz",
      paginas: 547,
      ano: 1869,
      pais: "Australia"
    },
    {
      nome: "Cem Anos de Solidão",
      paginas: 258,
      ano: 1967,
      pais: "Brasil",
    },
    {
      nome: "Ulisses",
      paginas: 745,
      ano: 1922,
      pais: "China",
    },
    {
      nome: "Busca do Tempo Perdido",
      paginas: 111,
      ano: 1913,
      pais: "Argentina",
    }
]


const isChina = livro => livro.pais === 'China';
const livros_China = biblioteca.filter(isChina);
console.log(livros_China);

const qnt_Pages = livro => livro.paginas > 500;
const get_Name_And_Pages = livro => {return ({nome: livro.nome, paginas: livro.paginas})};
const livros_Grandes = biblioteca.filter(qnt_Pages).map(get_Name_And_Pages);
console.log(livros_Grandes);

const ninteen_Forward = biblioteca.filter(livro => livro.ano > 1900)
const sum_Pages = ninteen_Forward.map(livro => livro.paginas).reduce((soma, atual) => (soma+atual));
const media_Paginas = sum_Pages/ninteen_Forward.length;
console.log(media_Paginas);

const twohund = biblioteca.filter(livro => livro.paginas <= 200).sort((livro_a, livro_b) => {livro_a.ano - livro_b.ano});
const livro_Novo = twohund[twohund.length - 1];
console.log(livro_Novo);