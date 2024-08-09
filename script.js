let objAlunos = [
    { id: 1, nome: "Victor", rm: 552233 },
    { id: 2, nome: "Pauloi", rm: 223344 },
    { id: 3, nome: "Muiz", rm: 553344 },
    { id: 4, nome: "Anai", rm: 663344 },
    { id: 5, nome: "Maria", rm: 773344 }
];
let objNotas = [
    { id: 1, nota:7.5 },
    { id: 2, nota:5.5  },
    { id: 3, nota: 4.3 },
    { id: 4, nota: 9.5 },
    { id: 5, nota:3.5 }
];

// const nomesAlunos = objAlunos.map((aluno, indice, array) =>((indice + 1) + "-" + aluno.nome));
// console.log(nomesAlunos);

// const nomesAlunosVerificados = objAlunos.filter(a=>{
//     if(a.nome[0] === "M" || a.nome[0] === "M"){
//         return a.nome;
//     }
// });
// const nomeComI = objAlunos.some(a=> a.nome.includes("a"));
// console.log(nomeComI);
// const nomes2 = objAlunos.filter(a=> a.nome.includes("L"));
//  console.log(nomesAlunosVerificados);


//Gerando novo objeto a partir dos alunos e notas com MAP:
const alunosComNotas = objAlunos.map(aluno=>{
    const nota = objNotas.find( n => n.id === aluno.id);
    //Montando o novo objeto aluno com notas para retorno no array
    return {id: aluno.id,nome: aluno.nome,rm: aluno.rm, nota: nota.nota} //ou {...a, nota : nota.nota}
});

console.log(alunosComNotas);

//Utilizando o reduce para consolidar o total das notas dos alunos
const somaDasNotas = alunosComNotas.reduce((acumulado, aluno)=>{
    return (acumulado+aluno.nota);
},0);

console.log(somaDasNotas);