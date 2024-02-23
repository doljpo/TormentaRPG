# TormentaRPG

         
    1. Defina seus Atributos:
        Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma.
        Começam com 10 pontos e distribuem.

    2. Escolha sua Raça.
        Os ajustes raciais em atributos modificam o valor do atributo em si e não o "preço".
        Tipo, se o char tem 10 no atributo, com modificador 0, e a raça adiciona +2 naquele
        atributo, entao o atributo do char ficará com modificador 2

    3. Escolha sua Classe.
        Criar um sistema de conversa para classes que soh tem no T e nao existem no T20

    4. Escolha sua Origem.
        Dao habilidades e caracteristicas que o persoangem tinha antes de se tornar aventureiro

    5. Escolha sua Divindade (Opcional).

    6. Escolha suas Perícias.
        Criar um sistema de busca, com filtro ou entao ter uma pagina soh em js com a lista
        de perícias em um json e renderizar estaticamente para procurar eles.

        Aih nesse caso nao tem comunicacao com o char, o jogador tem que ir la e adicionar no 
        personagem.

    7. Anote seu Equipamento.
        Criar um sistema de busca, com filtro ou entao ter uma pagina soh em js com a lista
        de itens em um json e renderizar estaticamente para procurar eles.

        Aih nesse caso nao tem comunicacao com o char, o jogador tem que ir la e adicionar no 
        personagem.
        Para saber o poder de compra, o jogador ao entrar no mercado informa quanto tem de T$

    8. Magias (Apenas Arcanistas, Bardos, Clérigos e Druidas).
        Criar um sistema de busca, com filtro ou entao ter uma pagina soh em js com a lista
        de magias em um json e renderizar estaticamente para procurar elas.

        Aih nesse caso nao tem comunicacao com o char, o jogador tem que ir la e adicionar no 
        personagem.

    9. Toques Finais.


    ---------------

    Notas:

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

Alquimicos
    Pocoes
    Venenos
    Catalisadores


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

