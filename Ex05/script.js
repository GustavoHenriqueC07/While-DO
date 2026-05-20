let opcao;
let total = 0;

do {
        opcao = Number(prompt("☕ CAFETERIA ☕\n\n" +
        "1 - Café Expresso (R$ 5,00)\n" +
        "2 - Cappuccino (R$ 7,00)\n" +
        "3 - Pão de Queijo (R$ 4,00)\n" +
        "0 - Finalizar Pedido"));

        switch(opcao) {
            case 1:
                total += 5;
                alert("☕ Café expresso adicinado!");
                break;
            case 2:
                total += 7;
                alert("🥛 Cappucino adicionado!");
                break;
            case 3:
                total += 4;
                alert("🧀 Pão de queijo adicionado!");
                break;
            case 0:
                alert("Pedido finalizado!");
                break;
            default:
                alert("Opção inválida");
        }
} while (opcao !== 0);
alert("O total da sua compra é: R$ " + total.toFixed(2));