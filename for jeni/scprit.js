function gerarRelatorio() {
    let dias = Number(prompt("Quantos dias teve a Sprint?"));

    let totalBugs = 0;
    let maiorBugs = -1;
    let menorBugs = Infinity;
    let diaMaior = 0;
    let diaMenor = 0;

    let relatorio = "RELATÓRIO DA SPRINT\n\n";

    for (let i = 1; i <= dias; i++) {
        let bugs = Number(prompt(`Quantos bugs foram encontrados no dia ${i}?`));

        relatorio += `Dia ${i}: ${bugs} bugs\n`;

        totalBugs += bugs;

        if (bugs > maiorBugs) {
            maiorBugs = bugs;
            diaMaior = i;
        }

        if (bugs < menorBugs) {
            menorBugs = bugs;
            diaMenor = i;
        }
    }

    let media = totalBugs / dias;

    relatorio += `\nTotal de bugs: ${totalBugs}`;
    relatorio += `\nMédia de bugs por dia: ${media.toFixed(2)}`;
    relatorio += `\nDia com maior quantidade de bugs: Dia ${diaMaior} (${maiorBugs} bugs)`;
    relatorio += `\nDia com menor quantidade de bugs: Dia ${diaMenor} (${menorBugs} bugs)`;

    document.getElementById("relatorio").value = relatorio;
}