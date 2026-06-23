let dias = Number(prompt("Quantos dias possui a Sprint?"));
let totalTarefas = 0;

for (let i = 1; i <= dias; i++) {
    let tarefas = Number(prompt(`Quantas tarefas foram concluídas no dia ${i}?`));

    totalTarefas += tarefas;

    document.write(`Dia ${i}: ${tarefas} tarefas concluídas <br>`);
}

document.write("<hr>");
document.write(`Total de tarefas concluídas na Sprint: ${totalTarefas}`);