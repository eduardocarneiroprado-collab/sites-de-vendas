let carrinho = [];

function adicionarCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    alert(`${produto} adicionado ao carrinho!`);
    console.log(carrinho);
}
