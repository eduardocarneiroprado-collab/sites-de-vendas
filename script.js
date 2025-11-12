
// Cria um array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar itens ao carrinho
function adicionarCarrinho(nome, preco) {
    // Adiciona o produto ao carrinho
    carrinho.push({ nome, preco });

    // Atualiza a exibição do carrinho
    atualizarCarrinho();
}

// Cria e atualiza a seção do carrinho
function atualizarCarrinho() {
    // Se ainda não existir um container para o carrinho, cria um
    let container = document.getElementById('carrinho-container');
    if (!container) {
        container = document.createElement('section');
        container.id = 'carrinho-container';
        container.innerHTML = `
            <h2>🛒 Carrinho de Compras</h2>
            <ul id="lista-carrinho"></ul>
            <p id="total-carrinho">Total: R$ 0,00</p>
            <button id="finalizar">Finalizar Compra</button>
        `;
        document.body.appendChild(container);

        // Adiciona o evento ao botão de finalizar
        document.getElementById('finalizar').addEventListener('click', finalizarCompra);
    }

    // Atualiza os itens
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = '';

    let total = 0;
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        
        // Botão para remover item
        const btnRemover = document.createElement('button');
        btnRemover.textContent = '❌';
        btnRemover.style.marginLeft = '10px';
        btnRemover.onclick = () => removerItem(index);
        
        li.appendChild(btnRemover);
        lista.appendChild(li);
        total += item.preco;
    });

    document.getElementById('total-carrinho').textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para remover item do carrinho
function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}\nObrigado pela preferência! 🧱`);

    // Limpa o carrinho
    carrinho = [];
    atualizarCarrinho();
}
// Observa o clique do botão "Finalizar Compra" e mostra a frase ao lado
document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver(() => {
        const botao = document.getElementById('finalizar');
        if (botao && !document.getElementById('mensagem-final')) {
            const span = document.createElement('span');
            span.id = 'mensagem-final';
            span.style.marginLeft = '10px';
            span.style.fontWeight = 'bold';
            span.style.color = 'green';
            botao.insertAdjacentElement('afterend', span);

            botao.addEventListener('click', () => {
                // Se o carrinho estiver vazio, não mostra mensagem
                if (carrinho.length === 0) return;
                
                span.textContent = '✅ Compra finalizada com sucesso!';
            });
        }
    });

    // Observa mudanças no body (para pegar quando o botão for criado dinamicamente)
    observer.observe(document.body, { childList: true, subtree: true });
});
// Exibe mensagem de compra finalizada ao lado do botão
document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'finalizar') {
        // Espera o alerta terminar (pois ele vem antes no seu código)
        setTimeout(() => {
            const botao = document.getElementById('finalizar');
            if (!botao) return;

            // Cria a mensagem se ainda não existir
            let mensagem = document.getElementById('mensagem-final');
            if (!mensagem) {
                mensagem = document.createElement('span');
                mensagem.id = 'mensagem-final';
                mensagem.style.marginLeft = '10px';
                mensagem.style.fontWeight = 'bold';
                mensagem.style.color = 'green';
                botao.insertAdjacentElement('afterend', mensagem);
            }

            // Atualiza o texto da mensagem
            mensagem.textContent = '✅ Compra finalizada com sucesso!';
        }, 100); // pequeno atraso pra garantir que o carrinho atualize
    }
});
// Exibe mensagem de compra finalizada ao lado do botão
document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'finalizar') {
        // Espera o alerta terminar (pois ele vem antes no seu código)
        setTimeout(() => {
            const botao = document.getElementById('finalizar');
            if (!botao) return;

            // Cria a mensagem se ainda não existir
            let mensagem = document.getElementById('mensagem-final');
            if (!mensagem) {
                mensagem = document.createElement('span');
                mensagem.id = 'mensagem-final';
                mensagem.style.marginLeft = '10px';
                mensagem.style.fontWeight = 'bold';
                mensagem.style.color = 'green';
                botao.insertAdjacentElement('afterend', mensagem);
            }

            // Mostra a mensagem
            mensagem.textContent = '✅ Compra finalizada com sucesso!';

            // Faz a mensagem sumir depois de 4 segundos
            setTimeout(() => {
                mensagem.textContent = '';
            }, 4000);
        }, 100); // pequeno atraso pra garantir que o carrinho atualize
    }
});

