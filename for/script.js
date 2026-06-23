function gerarRelatorio() {

    let dias = Number(prompt("Quantos dias teve a Sprint?"));

    let relatorio = "";
    let totalBugs = 0;

    let maiorBug = -1;
    let menorBug = Infinity;

    let diaMaior = 0;
    let diaMenor = 0;
for (let dia = 1; dia <= dias; dia++) {

    let bugs = Number(prompt(`Quantos bugs foram encontrados no dia ${dia}?`));
    relatorio += `Dia ${dia}: ${bugs} bugs encontrados\n`;
    totalBugs += bugs;
    if (bugs > maiorBug) {
    maiorBug = bugs;
    diaMaior = dia;
    if (bugs < menorBug) {
    menorBug = bugs;
    diaMenor = dia;
    let media = totalBugs / dias;
    relatorio += "\n";
relatorio += `Total de bugs: ${totalBugs}\n`;
relatorio += `Média de bugs por dia: ${media.toFixed(2)}\n`;
relatorio += `Dia com mais bugs: ${diaMaior} (${maiorBug} bugs)\n`;
relatorio += `Dia com menos bugs: ${diaMenor} (${menorBug} bugs)\n`;
}
}

}
}