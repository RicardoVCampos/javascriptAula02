// let var1 = "cachorro"
// var1 = "chiuaua"
// console.log(var1)

// const constante1 = "chuchu"


////////////////////////////////////////////////////////////////////////////////////////////////

// let array4 = [
//     [1, 2, 3],    
//     [false, null, "Texto", ["Oi som", 2, true]], 
//     [42, "JavaScript"],     
//     [true, 7.5, "Final"]   
// ]    
// // Preciso que seja renderizado no console null do array 
// //Preciso que seja renderizado no console Oi som
// //Preciso que seja renderizado Final no console

// console.log(array4[1][1])

// console.log(array4[1][3][0])

// console.log(array4[3][2])

////////////////////////////////////////////////////////////////////////////////////////////////

// let carro = {
//     id:1,
//     modelo:"Fusca",
//     ano:1979,
//     cor:"Amarela"
// }

// console.log(carro.modelo,carro.ano)

// console.log(`O carro ${carro.modelo} do ano ${carro.ano} já não paga mais IPVA.`)

// console.log(`Temos ${carro.id} carro modelo ${carro.modelo} disponível, ele é do ano ${carro.ano} e da cor ${carro.cor}.`)

///////////////////////////////////////////////////////////////////////////////////////////////////


// let carros = [
//     { 
//         id: 1,
//         modelo: "Fusca",
//         ano: 1979,
//         cor: "Amarela"
//     },
//     { 
//         id: 2,
//         modelo: "Gol",
//         ano: 1990,
//         cor: "Azul"
//     },
//     { 
//         id: 3,
//         modelo: "Civic",
//         ano: 2005,
//         cor: "Preta"
//     },
//     { 
//         id: 4,
//         modelo: "Palio",
//         ano: 2002,
//         cor: "Vermelha"
//     },
//     { 
//         id: 5,
//         modelo: "Fiesta",
//         ano: 2010,
//         cor: "Branca"
//     },
//     { 
//         id: 6,
//         modelo: "Kangoo",
//         ano: 2015,
//         cor: "Prata"
//     },
//     { 
//         id: 7,
//         modelo: "Uno",
//         ano: 1995,
//         cor: "Verde"
//     },
//     { 
//         id: 8,
//         modelo: "Saveiro",
//         ano: 2012,
//         cor: "Preta"
//     },
//     { 
//         id: 9,
//         modelo: "Strada",
//         ano: 2017,
//         cor: "Branca"
//     },
//     { 
//         id: 10,
//         modelo: "Siena",
//         ano: 2008,
//         cor: "Cinza"
//     }
// ];

// ////////////////////////////////////////////////////////////////////////////////////

// // let carro = `O carro que eu tenho intenção de comprar é o ${carros[1].modelo}.`

// // console.log(carro)

// ////////////////////////////////////////////////////////////////////////////////////

// Exercício de fixação da tarefa acima.

// // Acesse o modelo do carro que tem o id 3 e exiba uma frase com seu nome.
// console.log(`O ${carros[2].modelo} é um carro tão bom como os Corolla da Toyota.`)

// // Acesse a cor do carro com o modelo "Fiesta" e crie uma frase informando a cor do carro.
// console.log(`Tem um carro modelo ${carros[4].modelo} de cor ${carros[4].cor} disponível para troca.`)

// // Crie uma frase dizendo o ano do carro que tem o id 7
// console.log(`O carro ${carros[6].modelo} é de ano ${carros[6].ano}.`)

// // Exiba o modelo e a cor do carro que foi fabricado em 2005.
// console.log(`O Honda ${carros[2].modelo} tem na cor ${carros[2].cor} e é do ano ${carros[2].ano}.`)

// // Crie uma frase que diga o modelo e o ano do carro com id 10.
// console.log(`Achei o ${carros[9].modelo} ${carros[9].ano} do jeito que eu queria.`)

// // Crie uma frase dizendo que o carro com o id 5 é branco e foi fabricado em 2010.
// console.log(`O Ford ${carros[4].modelo} é de cor ${carros[4].cor} e fabricado do ano ${carros[4].ano}.`)

///////////////////////////////////////////////////////////////////////////////////////////////////

// alert("A turma FS20 é a melhor turma da Digital College.")

// prompt("Digite seu nome")

// aqui aprendemos a criar pop-up no browser

////////////////////////////////////////////////////////////////////////////////////////////////////

// let nome = prompt("Digite seu nome")
// alert(`Bem vindo ${nome}`)

// aqui vai aparecer no browser o prompit para digitar e depois a mensagem somada ao prompit

////////////////////////////////////////////////////////////////////////////////////////////////////

// let numero1 = Number(prompt("Digite número 1"))
// let numero2 = Number(prompt("Digite número 2"))
// let soma = numero1 + numero2

// alert(`O resultado a soma é: ${soma}.`)

// aqui vai aparecer a soma das duas variaveis

///////////////////////////////////////////////////////////////////////////////////////////////////

// let numero1 = Number(prompt("Digite número 1"))
// let numero2 = Number(prompt("Digite número 2"))
// let soma = numero1 + numero2

// alert(`O resultado a soma é: ${soma}.`)

/////////////////////////////////////////////////////////////////////////////////////////////////////

// let filmes = [
//     { 
//         id: 1,
//         titulo: "O Senhor dos Anéis: A Sociedade do Anel",
//         ano: 2001,
//         genero: "Fantasia"
//     },
//     { 
//         id: 2,
//         titulo: "O Poderoso Chefão",
//         ano: 1972,
//         genero: "Crime"
//     },
//     { 
//         id: 3,
//         titulo: "Forrest Gump: O Contador de Histórias",
//         ano: 1994,
//         genero: "Drama"
//     },
//     { 
//         id: 4,
//         titulo: "Star Wars: O Império Contra-Ataca",
//         ano: 1980,
//         genero: "Ficção científica"
//     },
//     { 
//         id: 5,
//         titulo: "A Origem",
//         ano: 2010,
//         genero: "Ficção científica"
//     },
//     { 
//         id: 6,
//         titulo: "O Rei Leão",
//         ano: 1994,
//         genero: "Animação"
//     },
//     { 
//         id: 7,
//         titulo: "Titanic",
//         ano: 1997,
//         genero: "Romance"
//     },
//     { 
//         id: 8,
//         titulo: "Vingadores: Ultimato",
//         ano: 2019,
//         genero: "Ação"
//     },
//     { 
//         id: 9,
//         titulo: "O Exorcista",
//         ano: 1973,
//         genero: "Terror"
//     },
//     { 
//         id: 10,
//         titulo: "Jurassic Park",
//         ano: 1993,
//         genero: "Aventura"
//     }	
// ]; 

// // Acesse o título do filme com o id 4 e exiba uma frase dizendo que o filme é do gênero "Ficção científica".
// console.log(`O filme ${filmes[3].titulo} é do gênero ${filmes[3].genero}.`)

// // Acesse o gênero do filme "Titanic" e crie uma frase dizendo o gênero do filme.
// console.log(`O filme ${filmes[6].titulo} é do tipo de ${filmes[6].genero} que faz chorar.`)

// // Crie uma frase dizendo o ano do filme que tem o id 7.
// console.log(`O filme ${filmes[7].titulo} foi o melhor filme feito no ano ${filmes[6].ano}.`)

// // Exiba o título e o ano do filme que foi lançado em 1994.
// console.log(`O filme ${filmes[5].titulo} foi lançado no ano de ${filmes[5].ano}.`)

// // Crie uma frase dizendo o título e o ano do filme com id 3.
// console.log(`No ano de ${filmes[2].ano} foi lançado o filme ${filmes[2].titulo}.`)

// // Crie uma frase dizendo que o filme com o id 10 é de "Aventura" e foi lançado em 1993.
// console.log(`No ano de ${filmes[9].ano} foi lançado um filme de ${filmes[9].genero} chamado ${filmes[9].titulo}.`)

// // Acesse o título do filme que é de gênero "Terror" e crie uma frase dizendo que ele é do gênero "Terror".
// console.log(`O filme ${filmes[8].titulo} é um filme de ${filmes[8].genero} que poucos conseguem assistir até o final.`)

// // Exiba o título e o gênero do filme que foi lançado em 2001.
// console.log(`O melhor filme de ${filmes[0].genero} lançado em ${filmes[0].ano} com maior bilheteria foi o ${filmes[0].titulo}.`)

/////////////////////////////////////////////////////////////////////////////////////////////////////


// Peça ao usuário para digitar dois números. Depois, calcule e exiba o resultado da multiplicação desses dois números em uma mensagem. 

// let numero1 = Number(prompt("Digite número 1"))
// let numero2 = Number(prompt("Digite número 2"))
// let multiplicacao = numero1 * numero2

// alert(`O resultado da multiplicação é: ${multiplicacao}.`)


// Solicite ao usuário que digite dois números. Em seguida, calcule e exiba o resultado da divisão do primeiro número pelo segundo. 

// let numero1 = Number(prompt("Digite número 1"))
// let numero2 = Number(prompt("Digite número 2"))
// let divisao = numero1 / numero2

// alert(`O resultado da divisão é: ${divisao}.`)

// Peça ao usuário para inserir dois números. Calcule a subtração do primeiro número pelo segundo e exiba o resultado em uma mensagem.

// let numero1 = Number(prompt("Digite número 1"))
// let numero2 = Number(prompt("Digite número 2"))
// let subtracao = numero1 - numero2

// alert(`O resultado da subtração é: ${subtracao}.`)


//  Solicite ao usuário dois números e calcule a multiplicação entre eles. Exiba a mensagem "X vezes Y é igual a Z", substituindo X, Y e Z pelos números e o resultado.

// let numero1 = Number(prompt("Digite número 1"))
// let numero2 = Number(prompt("Digite número 2"))
// let multiplicacao = numero1 * numero2

// alert(`O resultado da multiplicação do número ${numero1}, pelo número ${numero2}, é igual a ${multiplicacao}`)

// Solicite ao usuário dois números negativos. Calcule a multiplicação entre eles e exiba o resultado.

// let numero1 = Number(prompt("Digite o número negativo 1"))
// let numero2 = Number(prompt("Digite o número negativo 2"))
// let multiplicacao = numero1 * numero2

// alert(`O resultado da multiplicação é: ${multiplicacao}.`)


// Peca para o usuario digitar seu nome e aparecer no alert o nome do usuario com uma mensagem de bem vindo

// let nome = prompt("Digite seu nome")
// alert(`Bem vindo ${nome}`)
