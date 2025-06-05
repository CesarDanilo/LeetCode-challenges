// Escreva uma função que verifique se um valor fornecido é uma instância de uma determinada classe ou superclasse. Para este problema, um objeto é considerado uma instância de uma determinada classe se esse objeto tiver acesso aos métodos dessa classe.

// Não há restrições quanto aos tipos de dados que podem ser passados ​​para a função. Por exemplo, o valor ou a classe podem ser  undefined.



// Exemplo 1:

// Entrada: func = () => checkIfInstanceOf(new Date(), Date)
//  Saída: true
//  Explicação: O objeto retornado pelo construtor Date é, por definição, uma instância de Date.
// Exemplo 2:

// Entrada: func = () => { class Animal {}; class Dog estende Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
//  Saída: true
//  Explicação:
// classe Animal {};
// classe Cão estende Animal {};
// checkIfInstanceOf(new Dog(), Animal); // verdadeiro

// Cachorro é uma subclasse de Animal. Portanto, um objeto Cachorro é uma instância de Cachorro e Animal.
// Exemplo 3:

// Entrada: func = () => checkIfInstanceOf(Date, Date)
//  Saída: false
//  Explicação: Um construtor de data não pode logicamente ser uma instância de si mesmo.
// Exemplo 4:

// Entrada: func = () => checkIfInstanceOf(5, Number)
//  Saída: true
//  Explicação: 5 é um número. Observe que a palavra-chave "instanceof" retornaria falso. No entanto, ainda é considerada uma instância de Number porque acessa os métodos Number. Por exemplo, "toFixed()".

var checkIfInstanceOf = function (obj, classFunction) {

};