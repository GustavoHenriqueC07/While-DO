let senha = 241210;
let senhadousuario;
function validarSenha() {
    let mensagem = document.getElementById("mensagem");


do{
    senhadousuario = Number(document.getElementById("senha").value);
    if (senhadousuario !== senha){
        mensagem.textContent = "Sua senha está incorreta. Digite novamente.";
        mensagem.className = "erro";
        return;
    }
} while (senhadousuario !== senha);
mensagem.textContent = "Sua senha está correta";
mensagem.className = "sucesso";
}
