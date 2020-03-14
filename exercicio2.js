
// Crie uma função que receba dois argumentos e retorne um soma dos mesmos.


function  soma ( 2 , 5 ) {
  return 2 + 5;
}
// Declara uma variável que recebe a invocação da função criada acima, passando dois números reservados pelo argumento, e o comando `5` ao resultado retornado da função.


var invocafun = soma ( 10 , 10 ) + 5 ;

// Qual é o valor atualizado dessa variável?

25
// Declarar uma nova variável, sem valor.

var  ;

//Crie uma função que adicione um valor à variável criada acima e retorne uma string:
//    O valor da variável agora é VALOR.
//Onde VALOR é o novo valor da variável.

function  valor () {
  myVar =  10 ;
  return  " O valor da variável agora é "  + myVar;
}
// Invoque a função criada acima.

 valor ();
// Qual o retorno da função? (Use comentários de bloco).

/ * O valor da variável agora é 10 * /


//Crie uma função com as seguintes características:
//1. A função deve receber 3 argumentos;
//2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
//Preencha todos os valores corretamente!
//3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.

function  arguments ( x , y , z ) {
  if (x ===  indefinido  || y ===  indefinido  || z ===  indefinido ) {
    return  " Preencha todos os valores corretamente! "
  }
  return (x * y * z) +  2 ;
}
// Invoque a função criada acima, passando apenas dois números como argumento.

arguments ( 10 , 3 );
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// Preencha todos os valores corretamente!
// Agora, invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

arguments ( 5 , 5 , 5 );


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).



//Crie uma função com as seguintes características:
//1. A função deve receber 3 argumentos.
//2. Se somente um argumento for passado, retorne o valor do argumento.
//3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
//4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
//5. Se nenhum argumento for passado, retorne o valor booleano `false`.
//6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`



function  arguments ( a , b , c ) {
  if (a ! ==  indefinido  && b ===  indefinido ) {
    return a;
      
  } else if,  se (a ! ==  indefinido  && b ! ==  indefinido  && c ===  indefinido ) {
    return a + b;
      
  } else if,  se (a ! ==  undefined  && b ! ==  undefined  && c ! ==  undefined ) {
    return (a + b) / c;
      
  } else if,  se (a ===  indefinido  && b ===  indefinido  && c ===  indefinido ) {
    return  falso ;
  }  
    return  null ;
  
}
// Invoque a função acima usando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário da linha ao lado da função com o resultado de cada invocação.

` ` ``
arguments (); // false
arguments ( 10 ); // 10
arguments ( 10 , 20 ); // 30
arguments ( 10 , 20 , 2 ); // 15
`` ``