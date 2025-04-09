// 1. Lista de frutas

const frutas = ["maçã", "banana", "uva", "morango", "manga"];
console.log("Primeira fruta: ", frutas[3
]);
console.log("Última fruta: ", frutas[frutas.length -1]);
console.log("Total de frutas: ", frutas.length) ;

// A função lenght retorna o número de elementos do array

// 2. Econtrando elementos

const alunos = [
    { nome: "João", nota: 7.5},
    { nome: "Julia", nota: 9.0},
    { nome: "Kevin", nota: 6.5},
    { nome: "Roberto", nota: 8.0},
    { nome: "Kleber", nota: 10.0},
];

const alunoNotaAlta = alunos.find(aluno => aluno.nota > 8);
console.log("Primeiro aluno com nota > 8:", alunoNotaAlta);

const temNota10 = alunos.some(alunos => alunos.nota === 10.0);
console.log("existe aluno com nota 10?", temNota10);
// variável bleana,  onde traz resultados true or false

const todosMaiorQue5 = alunos.every(aluno => aluno.nota > 5);
console.log("todos têm nota > 5?", todosMaiorQue5);

// 3. Manipulando arrays
 const numeros = [];
 numeros.push(10,20,30); // adicionar números ao final do array
 numeros.unshift(5); // adicionar o número 5 no início 
 console.log("array após adições ", numeros)  ; // [5, 10, 20, 30]
 numeros.pop(); // remover o último elemento
 numeros.shift(); // remover o primeiro elemento
 console.log("Array final: ", numeros); // [10, 20]