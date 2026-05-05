function FazerPedido() {
    
    let opcao = prompt("Digite o número do seu pedido:\n1 - Hambúrguer (R$20)\n2 - Pizza (R$30)\n3 - Refrigerante (R$10)\n4 - Burrito (R$15)");
    
    let total = 0;
    
    let tipoPizza = "";
    
    let produto = "";

    // ESCOLHA DO PRODUTO 
    
    if (opcao == 1) {
        produto = "Hambúrguer";
        total = 20;
        
    } else if (opcao == 2) {
        produto = "Pizza";
        total = 30;
        
    // Perguntar o sabor da pizza
        
        tipoPizza = prompt("Escolha o sabor da pizza:\n1 - Calabresa\n2 - Frango com Catupiry\n3 - Portuguesa");
        
        if (tipoPizza == 1) {
            produto += " - Calabresa";
            
        } else if (tipoPizza == 2) {
            produto += " - Frango com Catupiry";
            
        } else if (tipoPizza == 3) {
            produto += " - Portuguesa";
            
        } else {
            alert("Opção de pizza inválida!");
            
            return; 
        }
        
    } else if (opcao == 3) {
        produto = "Refrigerante";
        total = 10;
        
    } else if (opcao == 4) {
        produto = "Burrito";
        total = 15;
        
    } else {
        alert("Opção de produto inválida!");
        return; 
    }

    //  Frete
    
    if (total >= 25) {
        alert("Frete grátis!");
        
    } else {
        total = total + 5;
        alert("Adição de +5 reais de frete.");
    }

    // Resultado final
    
    alert("Pedido: " + produto + "\nTotal: R$ " + total.toFixed(2));
}


