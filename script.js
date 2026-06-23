function gerarRelatorio() {

    let dias = Number(prompt("Quantos dias teve a Sprint?"));
let totalBugs = 0;
let maiorBug = -1;
let menorBug = Infinity;
let diaMaior = 0;
let diaMenor = 0;
let relatorio = "";
for(let i = 1; i <= dias; i++) {

    let bugs = Number(prompt("Quantos bugs foram encontrados no dia " + i + "?"));

    relatorio += "Dia " + i + ": " + bugs + " bugs\n";

    totalBugs += bugs;

}
}