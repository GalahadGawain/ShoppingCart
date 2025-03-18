let totalGeral = 0; //variável para armazenar o total da compra;
clear(); //inicializar o carrinho vazio;

function add(){
    //recuperar valores nome do produto, quantidade e valor;
    let product = document.getElementById(`produto`).value;
    let quantity = document.getElementById(`quantidade`).value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let productName = product.split(`-`)[0];
    let unitaryPrice = product.split(`R$`)[1];

    //calcular o subtotal;
    let price = quantity * unitaryPrice;
    
    //adicionar o produto no carrinho;
    let cart = document.getElementById(`lista-produtos`);
    cart.innerHTML = cart.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantity}x</span> ${productName} <span class="texto-azul">R$${price}</span></section>`;

    //atualizar o total;
    totalGeral = totalGeral + price;
    let total = document.getElementById(`valor-total`);
    total.textContent = `R$${totalGeral}`;

    document.getElementById(`quantidade`).value = 0; //zerar a quantidade;
}

function clear(){
    totalGeral = 0;
    document.getElementById(`lista-produtos`).innerHTML = ``; 
    document.getElementById(`valor-total`).textContent = `R$0`; 
}