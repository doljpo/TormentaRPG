function filtrarItens() {
    var categoriaSelecionada = document.getElementById('categoria').value;
    var subcategoriaSelecionada = document.getElementById('subcategoria').value;
    var equipamentosFiltrados = equips.filter(function (item) {
        return item.categoria === categoriaSelecionada && item.subcategoria === subcategoriaSelecionada;
    });
    exibirItens(equipamentosFiltrados);
}

function atualizarSubcategorias() {
    var categoriaSelecionada = document.getElementById('categoria').value;
    var subcategoriaSelect = document.getElementById('subcategoria');
    subcategoriaSelect.innerHTML = '<option value="">Selecione uma subcategoria</option>';

    if (categoriaSelecionada === 'Armas') {
        adicionarOpcoesSubcategoria(['Armas Simples', 'Machado']);
    } else if (categoriaSelecionada === 'Armaduras') {
        adicionarOpcoesSubcategoria(['Leve', 'Pesada']);
    } else if (categoriaSelecionada === 'Escudos') {
        adicionarOpcoesSubcategoria(['Pequeno', 'Médio']);
    } else if (categoriaSelecionada === 'Itens') {
        adicionarOpcoesSubcategoria(['Comida', 'Geral']);
    } else if (categoriaSelecionada === 'Poções') {
        adicionarOpcoesSubcategoria(['Vida', 'Mana']);
    } else {
        subcategoriaSelect.style.display = 'none';
    }
}

function adicionarOpcoesSubcategoria(subcategorias) {
    var subcategoriaSelect = document.getElementById('subcategoria');
    subcategorias.forEach(function (subcategoria) {
        var option = document.createElement('option');
        option.textContent = subcategoria;
        option.value = subcategoria;
        subcategoriaSelect.appendChild(option);
    });
    subcategoriaSelect.style.display = 'inline';
}

function exibirItens(itens) {
    var container = document.getElementById('equipamentos-container');
    container.innerHTML = ''; // Limpa o conteúdo anterior

    itens.forEach(function (item) {
        var card = document.createElement('div');
        card.classList.add('card');
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        var cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = item.nome;
        var tipo = document.createElement('p');
        tipo.classList.add('card-text');
        tipo.innerHTML = '<strong>Tipo:</strong> ' + item.tipo;
        var dano = document.createElement('p');
        dano.classList.add('card-text');
        dano.innerHTML = '<strong>Dano:</strong> ' + item.dano;
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(tipo);
        if (item.dano) {
            cardBody.appendChild(dano);
        }
        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

function carregarEquipamentos() {
    return fetch('../itens/itens.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados dos equipamentos');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

equips = [];

carregarEquipamentos().then(equipamentos => {
    equips = equipamentos;
});

document.addEventListener('DOMContentLoaded', carregarEquipamentos);

var categoriaSelect = document.getElementById('categoria');
if (categoriaSelect) {
    categoriaSelect.addEventListener('change', atualizarSubcategorias);
}