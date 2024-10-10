"use strict";

// Array de objetos com nome e nota dos alunos
var alunos = [{
  nome: 'Ana',
  nota: 8
}, {
  nome: 'Pedro',
  nota: 5
}, {
  nome: 'Maria',
  nota: 7
}, {
  nome: 'João',
  nota: 4
}, {
  nome: 'Carla',
  nota: 6
}];

//Função para filtrar os aluno com a nota maior ou igual a 6
var filtrarAlunosAprovados = function filtrarAlunosAprovados(listaAlunos) {
  return listaAlunos.filter(function (alunos) {
    return alunos.nota >= 6;
  });
};

//chamando a função
var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);