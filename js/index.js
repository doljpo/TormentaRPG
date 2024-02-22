/*

Regra de carga:

Você pode carregar 10 espaços +2 por ponto de Força (ou –1 por ponto de Força negativo). 
Se ultrapassar esse limite, fica sobrecarregado — sofre penalidade de armadura –5 e seu deslocamento é reduzido pela metade. 
Você não pode carregar mais do que o dobro do seu limite. 

Assim, um personagem
com Força 2 pode carregar até 14 espaços sem penalidade, e até 28 espaços ficando sobrecarregado. Ele
não pode carregar mais de 28 espaços de itens

Conversao de kg em espaços:
    < 1kg           == 0.5 espaço
    >= 1kg < 5kg    == 1 espaço
    >= 5kg < 10kg   == 2 espaços
    >= 10kg < 15kg  == 3 espaços
    >= 15kg < 20kg  == 4 espaços (e assim por diante, aumenta 1 espaço a cada 5kg)

    Obs: moedas, a cada 1k de moedas, ocupa 1 espaço

    armas de duas mãos ocupam no mínimo 2 espaços mas aumenta quando o peso passa dos 10kg, exemplo:
        > um arco que pesa 0.5kg ocupa 2 espaços;
        > um arco que pesa 4kg ocupa 2 espaços;
        > um arco que pesa 8kg ocupa 2 espaços;
        > um arco que pesa 12kg ocupa 3 espaços;


Regras de armaduras:

Penalidade: 
    Quando o jogador não possui proficiência com o tipo de armadura ou escudo, aplica penalidades em todos os testes de Força e Destreza.

    Independente de ter ou não proficiência, todos personagens usando armaduras recebem a penalidade da armadura nos seguintes testes:
    
        Acrobacia,
        Furtividade
        Ladinagem
        Atletismo (para natação)

        >> Todos personagens possuem habilidade de usar armaduras leves

Tipos de itens:

Armas
    Simples
    Marcias
    Exoticas

Armaduras
    Leves
    Pesadas

Escudos
    Leve
    Pesado
    Corpo

Itens
    Munição
    Diversos
    Comestivel

Pocoes
    Cura
    Mana
    Diversa


    Itens e materiais mágicos:

    São muito raros, podem ser pedidos a um ferreiro ou mago fazer, mas n eh qualquer um que conseguiria fazer.
    Geralmente sao encontrados.

    Métodos para a fabricação de itens mágicos são quase desconhecidos nos dias de hoje. Uns poucos arquimagos e acadêmicos sabem como produzi-los — mas a maioria foi forjada no
    passado, por magos lendários, ou pelos próprios deuses. Além
    disso, fabricar esses itens é trabalho duro, executado por artífi ces
    que passam a vida em laboratórios, ofi cinas e torres — e não por
    heróis exploradores de masmorras.

    Um personagem pode usar tantas armas quanto puder empunhar, e mais quatro itens mágicos entre armaduras, escudos e acessórios. Por exemplo, um personagem pode usar uma armadura
    mágica, um escudo mágico e dois acessórios, como um anel e um par
    de botas. Se usar um quinto item mágico, ele não terá efeito algum,
    a menos que o usuário remova um dos outros. Poções, pergaminhos,
    varinhas e cajados não contam nesse limite.

    Bônus de itens mágicos acumulam com bônus de outras fontes
    (talentos, magias...), mas não entre si. Então, usar dois anéis de
    proteção +2 vai fornecer apenas +2 na classe de armadura, não +4.
*/


const TipoItem = {
    ARMAS: 0,
    ARMADURAS: 1,
    ESCUDOS: 2,
    ITENS: 3,
    POCOES: 4
};

armas = [];
armaduras = [];
escudos = [];
itens = [];
pocoes = [];

Promise.all([
    carregarItens('armas'),
    carregarItens('armaduras'),
    carregarItens('escudos'),
    carregarItens('itens'),
    carregarItens('pocoes')
])
    .then(resultados => {
        armas = resultados[TipoItem.ARMAS];
        armaduras = resultados[TipoItem.ARMADURAS];
        escudos = resultados[TipoItem.ESCUDOS];
        itens = resultados[TipoItem.ITENS];
        pocoes = resultados[TipoItem.POCOES];
    })
    .catch(error => {
        console.error('Erro ao carregar os dados:', error);
    });


function carregarItens(categoria) {
    return fetch(`../itens/${categoria}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${categoria}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

var subcategoriaSelect = document.getElementById('subcategoria');
subcategoriaSelect.disabled = true;

const botaoFiltrar = document.getElementById('botao-filtrar');
botaoFiltrar.disabled = true;

const mensagem = document.getElementById('mensagem');

var categoriaSelect = document.getElementById('categoria');
if (categoriaSelect) {
    categoriaSelect.addEventListener('change', function () {
        atualizarSubcategorias();

        if (categoriaSelect.value != '') {
            subcategoriaSelect.disabled = false;
            botaoFiltrar.disabled = false;
        } else {
            subcategoriaSelect.disabled = true;
            botaoFiltrar.disabled = true;
            mensagem.style.display = 'block';
        }
    });
}

function filtrarItens() {
    mensagem.style.display = 'none';

    var categoriaSelecionada = document.getElementById('categoria').value;
    var subcategoriaSelecionada = document.getElementById('subcategoria').value;
    var itensFiltrados;

    switch (categoriaSelecionada) {
        case 'Armas':
            itensFiltrados = armas;
            break;
        case 'Armaduras':
            itensFiltrados = armaduras;
            break;
        case 'Escudos':
            itensFiltrados = escudos;
            break;
        case 'Itens':
            itensFiltrados = itens;
            break;
        case 'Poções':
            itensFiltrados = pocoes;
            break;
        default:
            console.error('Erro ao carregar lista de itens');
            return;
    }

    if (subcategoriaSelecionada) {
        itensFiltrados = itensFiltrados.filter(function (item) {
            return item.subcategoria === subcategoriaSelecionada;
        });
    }

    exibirItens(itensFiltrados);
}

function atualizarSubcategorias() {
    var categoriaSelecionada = document.getElementById('categoria').value;
    var subcategoriaSelect = document.getElementById('subcategoria');
    subcategoriaSelect.innerHTML = '<option value="">Todas</option>';

    if (categoriaSelecionada === 'Armas') {
        adicionarOpcoesSubcategoria(['Exóticas', 'Marciais', 'Simples', 'Tecnológicas', 'Munição']);
    } else if (categoriaSelecionada === 'Armaduras') {
        adicionarOpcoesSubcategoria(['Leves', 'Pesadas']);
    } else if (categoriaSelecionada === 'Escudos') {
        adicionarOpcoesSubcategoria(['Leves', 'Pesados', 'De Corpo']);
    } else if (categoriaSelecionada === 'Itens') {
        adicionarOpcoesSubcategoria(['Equipamento de Aventura', 'Esotéricos', 'Ferramentas', 'Vestuário']);
    } else if (categoriaSelecionada === 'Poções') {
        adicionarOpcoesSubcategoria(['Vida', 'Mana', 'Especial']);
    } else {
        subcategoriaSelect.disabled = true;
        limparLista();
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
    const categoria = itens[0].categoria;

    switch (categoria) {
        case 'Armas':
            listarArmas(itens);
            break;
        case 'Armaduras':
            listarArmaduras(itens);
            break;
        case 'Escudos':
            listarEscudos(itens);
            break;
        case 'Itens':
            listarItens(itens);
            break;
        case 'Poções':
            console.log('console.log(listarPocoes);');
            break;
        default:
            limparLista();
            return;
    }
}

function listarArmas(itens) {

    var container = document.getElementById('equipamentos-container');
    container.innerHTML = '';

    itens.forEach(function (item) {
        var card = document.createElement('div');
        card.classList.add('card');
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Nome
        var nome = document.createElement('span');
        nome.classList.add('fz-bigger');
        nome.innerHTML = '<strong>' + item.nome + '</strong>';

        // Preço
        var preco = document.createElement('span');
        preco.classList.add('float-right');
        preco.innerHTML = '<strong>Preço:</strong> ';
        var precoValor = document.createElement('span');
        precoValor.innerHTML = item.preco;
        preco.appendChild(precoValor);

        var cabecalho = document.createElement('div');
        cabecalho.classList.add('mt-1');
        cabecalho.classList.add('mb-1');
        cabecalho.appendChild(nome);
        cabecalho.appendChild(preco);

        // Dano
        var dano = document.createElement('span');
        dano.innerHTML = '<strong>Dano:</strong> ' + item.dano;
        // Crítico
        var critico = document.createElement('span');
        critico.classList.add('float-right');
        critico.innerHTML = '<strong>Crítico:</strong> ' + item.critico;

        var danoCritico = document.createElement('div');
        danoCritico.classList.add('mb-1');
        danoCritico.appendChild(dano);
        if (item.critico)
            danoCritico.appendChild(critico);

        // Tipo
        var tipo = document.createElement('span');
        tipo.innerHTML = '<strong>Tipo:</strong> ' + item.tipo;
        // Alcance
        var alcance = document.createElement('span');
        alcance.classList.add('float-right');
        alcance.innerHTML = '<strong>Alcance:</strong> ' + item.alcance;

        var tipoAlcance = document.createElement('div');
        tipoAlcance.classList.add('mb-1');
        tipoAlcance.appendChild(tipo);
        if (item.alcance)
            tipoAlcance.appendChild(alcance);

        cardBody.appendChild(cabecalho);
        cardBody.appendChild(danoCritico);
        cardBody.appendChild(tipoAlcance);

        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

function listarArmaduras(itens) {

    var container = document.getElementById('equipamentos-container');
    container.innerHTML = '';

    itens.forEach(function (item) {
        var card = document.createElement('div');
        card.classList.add('card');
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        // Nome
        var nome = document.createElement('h5');
        nome.classList.add('card-title');
        nome.textContent = item.nome;
        // Defesa
        var defesa = document.createElement('span');
        defesa.innerHTML = '<strong>Defesa:</strong> ' + item.defesa;
        // Penalidade
        var penalidade = document.createElement('span');
        penalidade.classList.add('float-right');
        penalidade.innerHTML = '<strong>Penalidade:</strong> ' + item.penalidade;
        // Preço
        var preco = document.createElement('p');
        preco.innerHTML = '<strong>Preço:</strong> ' + item.preco;

        cardBody.appendChild(nome);
        cardBody.appendChild(defesa);
        cardBody.appendChild(penalidade);
        cardBody.appendChild(preco);

        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

function listarEscudos(itens) {

    var container = document.getElementById('equipamentos-container');
    container.innerHTML = '';

    itens.forEach(function (item) {
        var card = document.createElement('div');
        card.classList.add('card');
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        // Nome
        var nome = document.createElement('h5');
        nome.classList.add('card-title');
        nome.textContent = item.nome;
        // Defesa
        var defesa = document.createElement('span');
        defesa.innerHTML = '<strong>Defesa:</strong> ' + item.defesa;
        // Penalidade
        var penalidade = document.createElement('span');
        penalidade.classList.add('float-right');
        penalidade.innerHTML = '<strong>Penalidade:</strong> ' + item.penalidade;
        // Preço
        var preco = document.createElement('p');
        preco.innerHTML = '<strong>Preço:</strong> ' + item.preco;

        cardBody.appendChild(nome);
        cardBody.appendChild(defesa);
        cardBody.appendChild(penalidade);
        cardBody.appendChild(preco);

        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

function listarItens(itens) {

    var container = document.getElementById('equipamentos-container');
    container.innerHTML = '';

    itens.forEach(function (item) {
        var card = document.createElement('div');
        card.classList.add('card');
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Nome
        var nome = document.createElement('p');
        nome.classList.add('fz-bigger');
        nome.innerHTML = '<strong>' + item.nome + '</strong>';

        // Preço
        var preco = document.createElement('p');
        preco.innerHTML = '<strong>Preço:</strong> ';
        var precoValor = document.createElement('span');
        precoValor.innerHTML = item.preco;
        preco.appendChild(precoValor);

        // Descrição
        var descricao = document.createElement('span');
        descricao.classList.add('mb-1')
        descricao.innerHTML = '<strong>Descrição:</strong> ' + item.descricao;

        cardBody.appendChild(nome);
        cardBody.appendChild(preco);
        cardBody.appendChild(descricao);

        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

function limparLista() {
    var container = document.getElementById('equipamentos-container');
    container.innerHTML = '';
}