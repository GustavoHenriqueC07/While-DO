let numeroSecreto = 10;

function verificarNumero() {

    let tentativa;
    let contador = 0;

do{ 
    tentativa=Number(prompt("Adivinhe o número de 0 a 10"));

    contador ++;

    if (tentativa !== numeroSecreto){
        alert("Número incorreto, tente novamente");
}
} while (tentativa !== numeroSecreto);

if ( contador === 1){
    document.getElementById("contador").innerHTML ="Você acertou em 1 tentativa!";
} else {
    document.getElementById("contador").innerHTML = ("Você acertou! Em " + contador + " tentativas.");}
}