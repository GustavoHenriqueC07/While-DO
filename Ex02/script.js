let numero;
let somaTotal = 0;
let resposta;

do{
    numero= Number(prompt("Digite um número."));
    somaTotal += numero;
    resposta = prompt("Deseja inserir mais um número? s/n");
} while (resposta === s);
alert("A soma total é" + somaTotal)