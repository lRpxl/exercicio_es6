// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Ana', nota:8},
    { nome: 'Pedro', nota:5},
    { nome: 'Maria', nota:7},
    { nome: 'João', nota:4},
    { nome: 'Carla', nota:6},
];

//Função para filtrar os aluno com a nota maior ou igual a 6
const filtrarAlunosAprovados = (listaAlunos) =>{
    return listaAlunos.filter(alunos => alunos.nota >=6);
};


//chamando a função
const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);