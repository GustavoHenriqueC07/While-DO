function cadastrarProduto() {

let nomeProduto = document.getElementById("produto").value;
let mensagem = document.getElementById("mensagem");

do {
    if (nomeProduto.length < 3){
        mensagem.innerHTML = "Nome inválido! Tente outro nome.";
        mensagem.style.color = "red";
        return;
    }
} while (nomeProduto. length < 3);
mensagem.innerHTML = "Produto cadastrado com sucesso!";
mensagem.style.color = "green";
}