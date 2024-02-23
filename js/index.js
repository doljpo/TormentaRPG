const TipoItem = {
    ARMAS: 0,
    ARMADURAS: 1,
    ESCUDOS: 2,
    ITENS: 3,
    ALQUIMICOS: 4
};

armas = [
    {
        "nome": "Adaga",
        "preco": "2 T$",
        "dano": "1d4",
        "critico": "19 (x2)",
        "alcance": "3m",
        "espaco": "0,5",
        "tipo": "Perfuração",
        "descricao": "Essa faca afiada é muito usada por ladrões e assassinos, por ser facilmente escondida. Você recebe um bônus de +4 em testes de Ladinagem para escondê-la. Uma adaga também pode ser arremessada.",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Espada Curta",
        "preco": "10 T$",
        "dano": "1d6",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "É o mais comum tipo de espada, muito usada por milicianos e soldados rasos - ou ainda como armasecundária. Possui entre 40 a 50 cm de comprimento",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Funda",
        "preco": "1 T$",
        "dano": "1d4",
        "critico": "",
        "alcance": "15m",
        "espaco": "0,5",
        "tipo": "Esmagamento",
        "descricao": "Podendo ser feita com uma simples tira de couro, é usada para arremessar balas de metal. Na falta de munição adequada, uma funda também pode disparar pedras comuns, mas o dano é reduzido para 1d3. Colocar uma bala em uma funda é uma ação de movimento. Ao contrário de outras armas de disparo, você aplica seu modificador de Força a jogadas de dano com uma funda.",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Manopla",
        "preco": "5 T$",
        "dano": "1d4",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Uma luva metálica que protege a mão e também permite socos mais fortes. Uma armadura completa inclui um par de manoplas. Você não pode ser desarmado quando usa esta arma. ",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Bastão Acolchoado",
        "preco": "1 T$",
        "dano": "1d6",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Um pedaço sólido de madeira, coberto por uma camada grossa de lã. O bastão acolchoado causa dano não-letal. ",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Lança",
        "preco": "2 T$",
        "dano": "1d6",
        "critico": "20 (x2)",
        "alcance": "6m",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "É qualquer arma feita com uma haste de madeira e ponta afiada, natural ou metálica. Por sua facilidade de fabricação, é muito comum entre diversas raças menos civilizadas. Uma lança também pode ser arremessada.",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Maça",
        "preco": "12 T$",
        "dano": "1d8",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Esmagamento",
        "descricao": "Composta por um bastão metálico com um espaco cheio de protuberâncias na estremidade, a maça é muito usada por clérigos que fazem votos de não derramar sangue. De fato, um golpe de maça nem sempre derrama sangue, mas pode esmagar algum ossos.",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Pique (2M)",
        "preco": "2 T$",
        "dano": "1d8",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "É basicamente uma lança muito longa. Esta arma de haste é preferida por guardas medrosos que não querem ficar perto de seus inimigos",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Arco Curto (2M)",
        "preco": "30 T$",
        "dano": "1d6",
        "critico": "20 (x3)",
        "alcance": "12m",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Este arco bastante comum é próprio para caçadas, muito usado por povos selvagens ou caçadores — o tamanho pequeno é apropriado para manuseio em florestas e outros ambientes fechados. Exige as duas mãos",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Azagaia",
        "preco": "1 T$",
        "dano": "1d6",
        "critico": "20 (x2)",
        "alcance": "9m",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "É uma lança curta e delgada e usada como arma de arremesso por povos ou indivíduos caçadores. Também é conhecida como apenas zagaia.Em culturas mais civilizadas, ganhou o nome de javelin.",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Besta Leve (2M)",
        "preco": "35 T$",
        "dano": "1d8",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Um arco montado sobre uma coronha de madeira com um gatilho, a besta leve é uma arma que dispara virotes com grande potência. Recarregar uma besta leve é uma ação de movimento. Exige as duas mãos.",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Granada",
        "preco": "50 T$",
        "dano": "4d6",
        "critico": "",
        "alcance": "3m",
        "espaco": "0,5",
        "tipo": "Fogo",
        "descricao": "Popular entre goblins, mas também empregada por outros usuários de pólvora, esta bomba rudimentar tem um pavio que deve ser aceso antes do uso (ação de movimento). Arremessar uma granada é um ataque de toque à distância. Qualquer criatura a até 3m do alvo sofre 4d6 pontos de dano (ou metade, se bem sucedido no teste de Reflexos contra o ataque).",
        "categoria": "Armas",
        "subcategoria": "Simples"
    },
    {
        "nome": "Cestus",
        "preco": "5 T$",
        "dano": "+1",
        "critico": "",
        "alcance": "",
        "espaco": "0,5",
        "tipo": "Esmagamento",
        "descricao": "Uma luva de couro com espinhos, usada por pugilistas e brigões de rua. O cestus fornece um bônus de +1 nas jogadas de dano com ataques desarmados. Esta arma não pode ser desarmada. ",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Escudo Leve",
        "preco": "5 T$",
        "dano": "1d4",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Você pode usar em escudo leve como uma arma, mas perde seu bônus na CA até o próximo turno.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Machadinha",
        "preco": "6 T$",
        "dano": "1d6",
        "critico": "20 (x3)",
        "alcance": "3m",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Ferramenta útil para cortar madeira, e também inimigos. Uma machadinha pode ser arremessada.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Martelo",
        "preco": "1 T$",
        "dano": "1d6",
        "critico": "20 (x2)",
        "alcance": "6m",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Em sua essência é uma ferramenta para bater pregos, em caso de problemas uma arma pra bater em inimigos.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Cimitarra",
        "preco": "15 T$",
        "dano": "1d6",
        "critico": "18 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Uma espada com a lâmina curva, leve e muito afiada. O talento Acuidade com Arma se aplica à cimitarra.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Escudo Pesado",
        "preco": "15 T$",
        "dano": "1d6",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Esmagamento",
        "descricao": "Você pode usar em escudo pesado como uma arma, mas perde seu bônus na CA até o próximo turno",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Espada Longa",
        "preco": "15 T$",
        "dano": "1d8",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Em geral, são chamadas de 'espadas longas' espadas com 85 cm a 1,15 m de comprimento total e peso entre 0,9 kg e 1,5 kg. Não existe uma convenção precisa sobre os limites entre espadas curtas e longas, mas a diferença entre espadas longas e bastardas é marcada pelo tamanho da empunhadura - as bastardas têm uma empunhadura bem mais longa, que permite serem seguradas com as duas mãos. A maioria das espadas longas tinha dois gumes e ponta rombuda, servindo apenas para c",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Florete",
        "preco": "20 T$",
        "dano": "1d6",
        "critico": "18 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Com uma lâmina fina e afiada, esta espada se torna muito precisa. O talento Acuidade com arma se aplica ao florete.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Gládio",
        "preco": "15 T$",
        "dano": "1d6",
        "critico": "19 (x3)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Uma espada de lâmina curta, mas pesada, e sem guarda. O gládio tem uma ponta muito afiada, capaz de infligir ferimentos precisos e letais. É uma das armas padrão dos legionários minotauros, junto com o Pilum.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Machado de Batalha",
        "preco": "10 T$",
        "dano": "1d8",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Diferente de uma machadinha, este não é um simples instrumento para cortes de árvores, mas sim uma poderosa arma capaz de causar ferimentos terríveis",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Maça-Estrela",
        "preco": "15 T$",
        "dano": "2d4",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento + Perfuração",
        "descricao": "Uma maça-estrela tem espinhos pontiagudos, sendo mais perigosa que uma maça comum. É uma arma rústica, mas capaz de ferimentos profundos.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Mangual",
        "preco": "8 T$",
        "dano": "1d8",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Arma composta por uma haste metálica ligada a uma corrente que por sua vez é ligada a uma esfera de aço. O mangual pode se enroscar na arma do adversário; você recebe +4 em jogadas de ataque para desarmar.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Martelo de Guerra",
        "preco": "12 T$",
        "dano": "1d8",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Mais uma ferramenta modificada para combate. É muito eficiente contra alguns tipos de mortos-vivos, por exemplo esqueletos. Também é a arma preferida de quase todos os anões que recusam os machados. ",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Picareta",
        "preco": "8 T$",
        "dano": "1d6",
        "critico": "20 (x4)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "É uma ferramenta análoga ao martelo que consiste em uma cabeça de metal pontiaguda fixada na ponta de um cabo comprido feito usualmente de madeira. Seu principal uso é quebrar pedras e rochas, sendo muito utilizada em minas e obras para escavação de túneis, onde o trabalho para quebrar as pedras é manual. Alpinistas também fazem uso de picaretas especiais, principalmente quando realizam escalada no gelo. A função da picareta neste caso é prover um ponto de fixação no gelo ou simplesmente para quebrá-lo para abrir caminho.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Tridente",
        "preco": "15 T$",
        "dano": "1d8",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "O tridente, garfo ou forcado é uma arma branca que se assemelha a uma lança, mas com duas, três ou mais lâminas ou ponteiras que acabam por enfraquecer o poder penetrante da lança (quando não há a armadura), sendo aperfeiçoado para uso dos minotauros, com a transformação do terminal do cabo ou empunhadura numa lâmina ou agulha penetrante, semelhante à lança de arremesso (imprópria para a cavalaria).",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Alabarda",
        "preco": "10 T$",
        "dano": "1d10",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Corte",
        "descricao": "É uma arma composta por uma longa haste. A haste é rematada por uma peça pontiaguda, de metal, que por sua vez é atravessada por uma lâmina em forma de meia-lua (similar à de um machado). É considerada a arma de infantaria mais eficaz contra invasores em fortificações e muralhas. É por excelência a arma usada pelos guardas de castelos e palácios e ainda hoje aparece como o padrão em unidades militares. Muitos nobres a mantém em suas paredes para fins decorativos, tratadas como peças de arte.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Alfange",
        "preco": "75 T$",
        "dano": "2d4",
        "critico": "18 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Espada de lâmina muito larga e curva, usada por guerreiros do Deserto.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Cajado de batalha",
        "preco": "10 T$",
        "dano": "1d8/1d8",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "um cajado de madeira forte, reforçado com chapas de metal nas pontas. É uma arma discreta, usada por andarilhos que não querem levantar suspeitas - como rebeldes em regiões imperiais. O cajado de batalha é uma arma dupla e uma arma de monge.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Espada grande (2M)",
        "preco": "50 T$",
        "dano": "2d6",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Corte",
        "descricao": "Uma arma enorme e muito pesada, esta espada tem cerca de 1,5m de comprimento. É uma das armas mais poderosas que um criatura Média consegue empunhar.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Foice (2M)",
        "preco": "18 T$",
        "dano": "2d4",
        "critico": "20 (x4)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Corte",
        "descricao": "diferente da ferramenta usada por fazendeiros, uma foice de combate é bem mais forte e balanceada. Capaz de infligir ferimentos precisos e letais.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Lança montada",
        "preco": "10 T$",
        "dano": "1d8",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Quando montado, você pode utilizar essa arma com apenas uma mão. A lança montada é uma arma de haste, e causa dano dobrado se usada durante uma investida montada",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Machado Grande (2M)",
        "preco": "20 T$",
        "dano": "1d12",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Corte",
        "descricao": "Este imenso machado de lâmina dupla é uma das mais perigosas armas existentes.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Mangual Pesado (2M)",
        "preco": "15 T$",
        "dano": "1d12",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Esmagamento",
        "descricao": "Uma versão mais pesada do mangual, feita para ser usada com duas mãos. Assim como um mangual comum, fornece +4 nas jogadas de ataque para desarmar.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Marreta (2M)",
        "preco": "20 T$",
        "dano": "3d4",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Esmagamento",
        "descricao": "Este martelo tem o cabo comprido e a cabeça chata e pesada. É uma arma desajeitada, mas poderosa.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Arco Composto (2M)",
        "preco": "75 T$",
        "dano": "1d6",
        "critico": "20 (x3)",
        "alcance": "18m",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Este arco é feito de chifres, madeira ou ossos laminados, e recurvado de forma a continuar estirado mesmo quando desarmado. Devido a isso, o arco composto dispara com mais força que um arco comum. Ao contrário de outros arcos, você aplica seu modificador de Força nas jogadas de dano com um arco composto. Usar um arco composto exige as duas mãos.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Arco Longo (2M)",
        "preco": "100 T$",
        "dano": "1d8",
        "critico": "20 (x3)",
        "alcance": "24m",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Este arco reforçado tem a altura de uma pessoa. Diferente do arco curto, é próprio para campos de batalha e outras áreas abertas — seu longo alcance permite atingir o inimigo a grandes distâncias. Exige as duas mãos.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Besta Pesada (2M)",
        "preco": "50 T$",
        "dano": "1d12",
        "critico": "19 (x2)",
        "alcance": "27m",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Versão maior e mais potente da besta leve. Recarregar uma besta pesada é uma ação padrão. Usar esta besta também exige as duas mãos.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Pilum (2M)",
        "preco": "5 T$",
        "dano": "1d6",
        "critico": "20 (x3)",
        "alcance": "6m",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Uma azagaia com uma ponta metálica comprida e fina, usada para prender os escudos dos inimigos. O pilum fornece um bônus de +1 nas jogadas de ataque contra oponentes usando um escudo. Um pilum pode ser usado como uma arma de ataque corpo-a-corpo, mas você sofre uma penalidade de -4 na jogada de ataque.",
        "categoria": "Armas",
        "subcategoria": "Marciais"
    },
    {
        "nome": "Adaga com mola",
        "preco": "15 T$",
        "dano": "1d4",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Esta adaga é mantida em uma tira de couro presa ao antebraço.Quando o usuário gira seu pulso de um jeito específico (uma ação livre), a adaga salta para sua mão. Se você sacar a adaga com mola e,na mesma rodada usá-la para atacar, o oponente fica desprevenido contra esse ataque (mas esse truque só funciona uma vez por combate)",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Aji",
        "preco": "20 T$",
        "dano": "1d6",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "0,5",
        "tipo": "Corte",
        "descricao": "A aji é uma peça metálica em forma de arco, onde a lâmina seria o arco propriamente dito e a empunhadura seria a corda. A aji é facilmente usada em conjunto; por isso, a penalidade de atacar com duas aji com Combater com Duas Armas diminui em –2",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Nunchaku",
        "preco": "2 T$",
        "dano": "1d6",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Composto por dois bastões curtos de madeira ligados por uma corrente ou tira de couro. O nunchaku era utilizado por camponeses para separar o joio do trigo, sendo mais tarde adotado como arma. O nunchaku também é uma arma de monge (pode ser utilizado com algumas habilidades, como rajada de golpes)",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Sai",
        "preco": "10 T$",
        "dano": "1d6",
        "critico": "19 (x2)",
        "alcance": "3m",
        "espaco": "0,5",
        "tipo": "Corte + Perfuração",
        "descricao": "Parecido com um grande garfo de metal, a adaga Sai é uma arma para prender as armas do oponente. Você recebe +4 em jogadas de ataque para desarmar. A Sai é uma arma de monge (pode ser utilizada com determinadas habilidades)",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Wakizashi",
        "preco": "310 T$",
        "dano": "1d6",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Versão mais curta da Katana. Junto com ela formam o daisho - armas tradicionais do samurai Alguns samurais carregam a wakisashi com peça simbólica, enquanto outros a usam como arma secundária. A katana e a wakisashi são armas obra-prima (+1 nas jogadas de ataque)",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Chicote",
        "preco": "1 T$",
        "dano": "1d3",
        "critico": "20 (x2)",
        "alcance": "4,5m",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Você pode atacar um inimigo a até 4,5m com um chicote. Esta arma pode se enroscar na mãos pernas ou armas do adversário; você recebe +4 em jogadas de ataque para derrubar ou desarmar. O talento Acuidade com Arma se aplica ao chicote.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Espada Bastarda (2M)",
        "preco": "35 T$",
        "dano": "1d10",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Corte",
        "descricao": "Maior e mais pesada que a espada longa, esta poderosa arma é usada por cavaleiros para vencer a proteção de uma armadura completa. Uma espada bastarda é muito grande para ser usada com só uma mão sem treinamento especial; por isso é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Flagelo",
        "preco": "20 T$",
        "dano": "1d8",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Um cabo do qual saem várias tiras de couro com ganchos afiados, o flagelo é feito para causar dor, e é tanto um instrumento de castigo quanto uma arma. Uma criatura atingida por um flagelo deve fazer um teste de Fortitude (CD igual a 10 + dano sofrido). Se falhar, sofre uma penalidade de -2 nas jogadas de ataque e nos testes de habilidade e perícia na rodada seguinte, devido à dor intensa.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Katana",
        "preco": "400 T$",
        "dano": "1d10",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "A Katana é a espada tradicional dos samurais. Sua lamina delgada é levemente recurvada, e possui apenas um unico fio. É muito longa para ser usada com uma só mão sem treinamento especial; por isso, é uma arma exótica.Ela pode ser usada com duas mãos como uma arma marcial. Por seu desenho elegante, também recebe os benefícios do talento Acuidade com Arma. Cada Katana é uma peça de arte única, com entalhes na bainha e lamina, e cabo decorado com fios de seda e metais preciosos, e o metal de sua lamina é temperado de maneira especial. Por essas características, uma Katana é sempre considerado uma arma Obra Prima, e oferece um bonus de +1 no ataque.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Presa da Serpente",
        "preco": "100 T$",
        "dano": "1d8",
        "critico": "17 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Esta arma é uma espada feita de obsidiana — um tipo de vidro vulcânico negro, formado quando a lava esfria rapidamente. A obsidiana pode ser trabalhada para ficar mais afiada que o aço, mas é mais frágil. Como o material é encontrado perto de vulcões, as dragoas caçadoras acreditam que ele é uma dádiva da Divina Serpente — por isso o nome da arma. Devido a sua fragilidade, a presa da serpente é de difícil uso, e por isso é uma arma exótica",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Lança de falange ",
        "preco": "15 T$",
        "dano": "1d8",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Uma versão mais comprida da lança comum, mas balanceada para ser usada com uma mão. A lança de falange pode ser arremessada, e é uma arma de haste. A lança de falange é muito grande para ser usada com uma mão sem treinamento especial; por isso é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Machado anão",
        "preco": "30 T$",
        "dano": "1d10",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Corte",
        "descricao": "Esse poderoso machado é a arma favorita dos anões, quase um simbolo da raça. O Machado Anão é pesado demais para ser usado com uma mão sem treinamento: Por isso é uma arma exótica. O machado anão pode ser usado como uma arma marcial de duas mãos",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Maça de Guerra",
        "preco": "25 T$",
        "dano": "1d12",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Esmagamento",
        "descricao": "Uma versão mais perigosa da maça comum, com uma cabeça formada por grandes placas de metal. O peso da maça de guerra torna seu golpe poderoso, mas desajeitado. Um personagem usando uma maça de guerra sofre -1 nas jogadas de ataque.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Manopla-espada",
        "preco": "25 T$",
        "dano": "1d8",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Uma braçadeira de metal na qual é fixada uma lâmina, que corre paralelamente ao antebraço do usuário. Como a manopla-espada protege seu braço, você recebe um bônus de +1 na CA. Se usar uma manopla-espada em cada um de seus braços, e tiver o talento Combater com Duas Armas, o bônus aumenta para +2. Esta arma não pode ser desarmada.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Sabre serrilhado",
        "preco": "500 T$",
        "dano": "1d8",
        "critico": "19/especial",
        "alcance": "",
        "espaco": "1",
        "tipo": "Corte",
        "descricao": "Esta arma cruel possui uma lâmina parecida com um serrote. Ela causa grande estrago quando atinge a carne, rasgando e destroçando tudo. Devido a seus 'dentes', é comum que fique profundamente entrelaçada nas costelas (ou órgãos equivalentes). Após um acerto crítico, em vez de causar dano multiplicado, o sabre fica preso - e requer uma ação de movimento para ser arrancado. Esse ato causa à vítima 1d6 pontos de dano adicional. Caso não seja removida, a arma cauda 1d4 pontos de dano para cada ação completa ou padrão realizados pela vítima.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Corrente com cravos",
        "preco": "25 T$",
        "dano": "2d4",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Você pode atacar um inimigo a até 4,5m com uma corrente com cravos. Esta arma pode se enroscar na mãos, pernas e armas do adversário; você recebe +4 em jogadas de ataque para derrubar ou desarmar. O talento Acuidade com Arma se aplica à corrente com cravos",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Espada de duas lâminas",
        "preco": "100 T$",
        "dano": "1d8/1d8",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Corte",
        "descricao": "Duas espadas longas, presas em lados opostos de um mesmo cabo. É uma arma dupla",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Espada táurica",
        "preco": "50 T$",
        "dano": "2d8",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Corte",
        "descricao": "Esta espada gigantesca é usada pelos maiores campeões e gladiadores do Reino dos Minotauros. Além do talento Usar arma exótica, também exige Força 2 ou mais para ser utilizada.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Machado Táurico",
        "preco": "30 T$",
        "dano": "2d8",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "3",
        "tipo": "Corte",
        "descricao": "Uma haste de 2m de comprimento com uma lâmina extremamente grossa na ponta, o machado táurico é muito pesado, e impõe uma penalidade de -1 na CA de seu usuário. Além do talento Usar Arma Exótica, exige Força 2 ou mais para ser manuseado",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Machado ogro",
        "preco": "30 T$",
        "dano": "2d8",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "3",
        "tipo": "Corte",
        "descricao": "Esta arma exageradamente grande consiste de um cabo longo com uma lâmina larga, grossa e pesada na ponta. É utilizada apenas pelos guerreiros mais brutais, como bárbaros das montanhas, por isso seu nome. O machado ogro é uma arma de haste. Por seu tamanho extremo, além do talento Usar Arma Exótica, exige Força 4 ou mais para ser manuseado e impõem uma penalidade de -1 na CA de seu usuário.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Marreta estilhaçadora",
        "preco": "50 T$",
        "dano": "1d10",
        "critico": "20/especial",
        "alcance": "",
        "espaco": "2",
        "tipo": "Esmagamento",
        "descricao": "Este grande e desajeitado martelo de guerra é pouco eficaz em combate normal. Com o cabo longo e uma imensa cabeça de metal, a marreta estilhaçadora conta com uma suferfície de impacto larga, incapaz de causar muito dano real. Sua verdadeira finalidade é despedaçar armaduras e carapaças de montros - especialmente seres da realidade aberrante; com um sucesso decisivo, em vez de causar dano multiplicado, a marreta reduz em 2 o bônus de armadura natural da criatura atinginda, ou o bônus de armadura da armadura que a criatura estiver usando.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Balestra (2M)",
        "preco": "100 T$",
        "dano": "1d12",
        "critico": "19 (x2)",
        "alcance": "27m",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Uma besta com mecanismo pesado, que permite que seu usuário use toda sua força ao engatilhar. Você aplica seu modificador de Força nas jogadas de dano com uma balestra. Recarregar esta arma é uma ação padrão. Exige duas mãos.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Bazuca",
        "preco": "1.000 T$",
        "dano": "10d8",
        "critico": "20 (x3)",
        "alcance": "15m",
        "espaco": "2",
        "tipo": "Fogo",
        "descricao": "Uma das maiores criações dos mestres armeiros, esta arma tem potencial destrutivo comparável ao das mais avançadas magias. Uma bazuca é um cilindro de metal com um compartimento para pólvora e um grande pavio. A munição é um grande obus explosivo, capaz de obliterar a maior parte dos alvos. Para disparar a bazuca, o usuário deve antes acender o pavio (uma ação de movimento). Uma vez que o pavio seja aceso, a bazuca dispara em 1d2 rodadas — ou seja, dispara na rodada seguinte ou na rodada após a seguinte. O usuário pode acender o pavio de forma a que ela dispare na mesma rodada, mas deve ser bem-sucedido num teste de Ofícios (armeiro) contra CD 20. Em caso de falha, a bazuca explode e o usuário sofre o dano do tiro. O disparo tem um 'coice' extremamente forte. Criaturas com Força menor que 15 sofrem -4 de penalidade na jogada de ataque e são arrastados 3 metros para trás no momento do disparo. Mesmo assim, esta arma é terrível. A explosão atinge um raio de 6m, causando 10d8 pontos de dano e deixando todas as criaturas atordoadas por uma rodada. Um teste de Reflexos (CD igual ao resultado da jogada de ataque) reduz o dano à metade e evita o atordoamento. Uma criatura atingida diretamente não tem direito ao teste de Reflexos. A bazuca ainda é mais destrutiva contra alvos não vivos. Qualquer armadura vestida por um alvo atingido deve ser bem-sucedida num teste de Fortitude (CD 15) ou fica inutilizada, deixando de oferecer qualquer bônus. Itens normais tem bônus de resistência +0; itens mágicos tem bônus de resistência de acordo com sua aura: +2 para aura tênue, +5 para moderada e +10 para aura poderosa. Objetos atingidos por um tiro de bazuca aplicam apenas metade de sua redução de dano. Uma bazuca fica inutilizada após um disparo. É necessário um teste de Ofícios (armeiro) contra CD 20 e uma hora de trabalho para consertá-la.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Besta de Mão",
        "preco": "100 T$",
        "dano": "1d6",
        "critico": "19 (x2)",
        "alcance": "9m",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Uma besta em miniatura, ideal para ser escondida sob um casaco, e usada por nobres e jogadores. Se você sacar a besta de mão, e na mesma rodada, usá-la para atacar, o oponente fica desprevenido contra esse ataque (mas esse truque só funciona uma vez por combate). Recarregar esta arma é uma ação de movimento. Exige uma mão.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Besta leve de repetição",
        "preco": "350 T$",
        "dano": "1d10",
        "critico": "20 (x2)",
        "alcance": "18m",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Esta arma é uma besta acoplada a uma caixa com capacidade de dez virotes. A caixa possui um mecanismo que recarrega a besta automaticamente (o que permite o uso de talentos como Tiro Rápido e Tiro Múltiplo). Desmontar, recarregar e remontar a caixa exige um minuto.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Besta pesada de repetição",
        "preco": "500 T$",
        "dano": "1d12",
        "critico": "19 (x2)",
        "alcance": "27m",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Esta arma é uma besta acoplada a uma caixa com capacidade de dez virotes. A caixa possui um mecanismo que recarrega a besta automaticamente (o que permite o uso de talentos como Tiro Rápido e Tiro Múltiplo). Desmontar, recarregar e remontar a caixa exige um minuto.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Mosquete (2M)",
        "preco": "500 T$",
        "dano": "2d8",
        "critico": "19 (x3)",
        "alcance": "45m",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Uma arma de uso complicado, que é rejeitada pela maioria dos guerreiros, porém devastadora ao atingir seu alvo. Recarregar um mosquete é uma ação padrão. Exige as duas mãos.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Pistola",
        "preco": "250 T$",
        "dano": "2d6",
        "critico": "19 (x3)",
        "alcance": "15m",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Considerada a mais popular arma de fogo, tem capacidade para apenas um tiro. Requer apenas uma mão - mas se empunhada com duas mãos, oferece um bônus de +1 em jogadas de ataque devido a estabilidade extra. Devido ao tempo de recarga (uma ação padrão), alguns pistoleiros trazem consigo várias pistolas em diversos coldres. Até seis pistolas podem ser transportadas dessa forma.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Shuriken",
        "preco": "1 T$",
        "dano": "1d4",
        "critico": "20 (x2)",
        "alcance": "3m",
        "espaco": "0,5",
        "tipo": "Perfuração",
        "descricao": "São pequenos projéteis metálicos em forma de estrelas ou dardos. Você pode gastar uma ação padrão para arremessar duas shurilkens. Esta é uma arma de monge. (pode ser utilizada com determinadas habilidades)",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Catapulta-de-braço",
        "preco": "40 T$",
        "dano": "2d4",
        "critico": "20 (x2)",
        "alcance": "24m",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Um dos diversos engenhos criados por halflings, para praticar seus esportes de arremesso de pedras. A catapulta-de-braço é uma arma que presa ao braço com fivelas, arremessa pedras ao movimento correto do pulso, tão longe quanto arcos lançam flechas. Recarrega-la é uma ação livre.",
        "categoria": "Armas",
        "subcategoria": "Exóticas"
    },
    {
        "nome": "Florete-agulha",
        "preco": "30 T$",
        "dano": "1d4",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Este florete possui um minúsculo êmbolo interno, que carrega uma dose de líquido — geralmente veneno. Permite usar um veneno do tipo contato, além do tipo ferimento. Veneno de contato administrado desta forma recebe um bônus de +2 em sua CD.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Espada-diapasão",
        "preco": "400 T$",
        "dano": "1d8",
        "critico": "19 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "",
        "descricao": "Esta espada de aparência estranha tem duas lâminas separadas entre si por alguns milímetros. O personagem pode realizar uma manobra especial com uma ação de movimento, golpeando o chão (que deve ser duro como pedra ou metal). A espada então entra em ressonância, passando a vibrar e emitir um ruído muito incômodo. O próximo ataque com esta arma causa +2d6 pontos de dano sônico.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Lança-foguete",
        "preco": "100 T$",
        "dano": "1d10",
        "critico": "20 (x2)",
        "alcance": "6m",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Esta lança parece normal, mas há um “foguete” (um reservatório de pólvora) no meio de sua haste. Este foguete pode ser ativado por uma corda na haste (uma ação livre), fazendo com que o próximo arremesso da lança tenha o seu alcance dobrado (para um total de 12m) e receba um bônus de +2 nas jogadas de ataque e dano Depois de arremessada com o foguete aceso, a lança torna-se inútil.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Lança-mola",
        "preco": "50 T$",
        "dano": "1d6",
        "critico": "20 (x2)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Esta lança retrátil de metal possui no meio de sua haste uma forte mola, que fica encolhida. O personagem pode realizar um ataque especial apertando um botão para soltar a mola (uma ação livre). Este ataque recebe um bônus de +2 na jogada de ataque e tem seu alcance aumentado para 3m. O personagem pode remontar a mola com uma ação completa.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Maça-granada",
        "preco": "100 T$",
        "dano": "1d8",
        "critico": "20 (x2+4d6)",
        "alcance": "3m",
        "espaco": "2",
        "tipo": "Esmagamento",
        "descricao": "Esta maça tem uma carga explosiva em sua cabeça. A granada é ativada quando submetida a uma grande pressão. Quando o personagem faz um acerto crítico, além de infligir dano dobrado, causa uma explosão, que faz 4d6 pontos de dano de fogo no alvo (e 2d6 pontos de dano no usuário). Esta explosão não dá direito a teste de resistência. Depois de explodir, a maça fica inutilizada.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Martelo-pistão",
        "preco": "500 T$",
        "dano": "1d8",
        "critico": "20/especial",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Este martelo tem um mecanismo avançado em seu interior. Com uma ação completa, você puxa o pistão e “carrega” uma carga de vapor na arma. Em qualquer momento até 1 hora depois de carregar a arma, você pode liberar a energia do pistão para a ponta do martelo com uma alavanca na haste. Quando fizer isso, o martelo move sua cabeça muito rapidamente e dá um impulso extra no ataque, concedendo um bônus de +4 na jogada de ataque.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Vara-relâmpago",
        "preco": "30 T$",
        "dano": "2d10",
        "critico": "20 (x4)",
        "alcance": "",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Trata-se de uma vara de madeira de 1,5m que possui em seu interior um fi o de cobre ligado a uma bateria arcana. Na ponta da vara há uma esfera de cobre. Quando o usuário aproxima a ponta da vara do alvo, a bateria descarrega uma carga elétrica contra ele. Para acertar, o usuário deve fazer um ataque de toque. A bateria tem capacidade para 10 descargas e deve ser usada como uma mochila. Um conjurador que conheça uma magia com o descritor eletricidade pode recarregar a bateria à taxa de 1 PM por carga. Quando o usuário faz um acerto crítico com a vara, causa dano quadriplicado! Contudo, toda a bateria é descarregada, fi cando totalmente gasta",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Girolette (2M)",
        "preco": "1.000 T$",
        "dano": "2d8",
        "critico": "20 (x3)",
        "alcance": "",
        "espaco": "2",
        "tipo": "Esmagamento",
        "descricao": "Esta estranha maça de duas mãos tem engrenagens e um mecanismo complexo dentro de sua cabeça de metal. Um combatente treinado consegue empunhar a arma de modo que as “rodas” que compõem a cabeça girem em sentido contrário entre si, aumentando o dano enquanto a área atingida é puxada em direções opostas e destroçada.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Marreta-pistão (2M)",
        "preco": "500 T$",
        "dano": "1d10",
        "critico": "20/especial",
        "alcance": "",
        "espaco": "1",
        "tipo": "Esmagamento",
        "descricao": "Semelhante ao martelo-pistão, mas maior, para ser usada com duas mãos. Funciona da mesma maneira — use uma ação completa para carregar uma carga de vapor. Ao liberar a carga, a marreta concede um bônus de +4 na jogada de ataque. Além disso, funciona como uma marreta estilhaçadora — com um acerto crítico, reduz o bônus de CA do alvo em 2 pontos.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Montante cinético (2M)",
        "preco": "3.000 T$",
        "dano": "2d6",
        "critico": "19 (x4)",
        "alcance": "",
        "espaco": "3",
        "tipo": "Esmagamento",
        "descricao": "Esta imensa espada de duas mãos tem minúsculas esferas de adamante untadas com um óleo especial no interior de sua lâmina. O movimento destas esferas faz com que a espada tenha seu peso e impacto aumentados várias vezes, sendo extremamente letal. Porém, ela torna-se imprevisível. Ao rolar um resultado '1' numa jogada de ataque, o personagem sofre o dano da própria arma, com todos os bônus normais.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Pistola de tambor (raro)",
        "preco": "1.000 T$",
        "dano": "2d6",
        "critico": "19 (x3)",
        "alcance": "15m",
        "espaco": "1",
        "tipo": "Perfuração",
        "descricao": "Esta maravilha tecnológica conta com um tambor capaz de girar, alinhando cargas de pólvora e balas com o cano repetidas vezes. Depois de dar um tiro, o usuário pode usar uma ação de movimento para girar o tambor e realizar outro tiro com a mesma pistola, até um máximo de quatro tiros no total por pistola. Esta arma é quase desconhecida, provavelmente a mais rara das armas tecnológicas.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Mosquetão",
        "preco": "1.000 T$",
        "dano": "2d10",
        "critico": "19 (x3)",
        "alcance": "30m",
        "espaco": "2",
        "tipo": "Perfuração",
        "descricao": "Este mosquete tem tambor e cano mais grossos, concentrando a força do tiro em um alvo mais próximo. Consequentemente, tem alcance menor, mas causa mais dano.",
        "categoria": "Armas",
        "subcategoria": "Tecnológicas"
    },
    {
        "nome": "Flecha - Arco (20 un)",
        "preco": "1 T$",
        "dano": "",
        "critico": "",
        "espaco": "1",
        "tipo": "",
        "descricao": "São hastes de madeira geralmente com ponta metálica e penas para estabilizar seu vôo, costumam ser vendidas em aljavas com 20 unidades. Recarregar um arco com uma flecha é uma ação livre. ",
        "categoria": "Armas",
        "subcategoria": "Munição"
    },
    {
        "nome": "Virote - Besta (10 un)",
        "preco": "1 T$",
        "dano": "",
        "critico": "",
        "espaco": "1",
        "tipo": "",
        "descricao": "Pequenas setas de madeira que servem como munição para bestas.",
        "categoria": "Armas",
        "subcategoria": "Munição"
    },
    {
        "nome": "Balas - Funda (10 un)",
        "preco": "1 T$",
        "dano": "",
        "critico": "",
        "espaco": "1",
        "tipo": "",
        "descricao": "Pequenas balas esféricas de metal. Recarregar uma funda com uma bala é uma ação de movimento.",
        "categoria": "Armas",
        "subcategoria": "Munição"
    },
    {
        "nome": "Munição - Bazuca (1 un)",
        "preco": "100 T$",
        "dano": "",
        "critico": "",
        "espaco": "1",
        "tipo": "",
        "descricao": "Munição para bazucas",
        "categoria": "Armas",
        "subcategoria": "Munição"
    },
    {
        "nome": "Munição - Pistola (10 un)",
        "preco": "1 T$",
        "dano": "",
        "critico": "",
        "espaco": "1",
        "tipo": "",
        "descricao": "Munição para pistolas",
        "categoria": "Armas",
        "subcategoria": "Munição"
    },
    {
        "nome": "Munição - Mosquete (10 un)",
        "preco": "50 T$",
        "dano": "",
        "critico": "",
        "espaco": "1",
        "tipo": "",
        "descricao": "Munição para mosquete",
        "categoria": "Armas",
        "subcategoria": "Munição"
    },
    {
        "nome": "Munição - Pistola (10 un)",
        "preco": "35 T$",
        "dano": "",
        "critico": "",
        "espaco": "1",
        "tipo": "",
        "descricao": "Munição para pistola",
        "categoria": "Armas",
        "subcategoria": "Munição"
    }
];
armaduras = [
    {
        "nome": "Armadura acolchoada",
        "preco": "5 T$",
        "defesa": "+1",
        "penalidade": "0",
        "espaco": "2",
        "descricao": "Composta por várias camadas de tecido sobrepostas. É a armadura mais leve, mas também é a que oferece menos proteção.",
        "categoria": "Armaduras",
        "subcategoria": "Leves"
    },
    {
        "nome": "Armadura de couro",
        "preco": "20 T$",
        "defesa": "+2",
        "penalidade": "0",
        "espaco": "2",
        "descricao": "O peitoral desta armadura é feito de couro curtido em óleo fervente, para ficar mais rígido enquanto as demais partes são feitas de couro flexível.",
        "categoria": "Armaduras",
        "subcategoria": "Leves"
    },
    {
        "nome": "Armadura de couro batido",
        "preco": "35 T$",
        "defesa": "+3",
        "penalidade": "-1",
        "espaco": "2",
        "descricao": "Versão mais pesada da armadura de couro, reforçada com rebites de metal. ",
        "categoria": "Armaduras",
        "subcategoria": "Leves"
    },
    {
        "nome": "Gibão de peles",
        "preco": "25 T$",
        "defesa": "+4",
        "penalidade": "-3",
        "espaco": "3",
        "descricao": "Usada principalmente por bárbaros e selvagens, esta armadura é formada por várias camadas de peles e couro de animais.",
        "categoria": "Armaduras",
        "subcategoria": "Leves"
    },
    {
        "nome": "Couraça de Bronze",
        "preco": "500 T$",
        "defesa": "+4",
        "penalidade": "-4",
        "espaco": "3",
        "descricao": "O bronze não é tão resistente quanto o aço, mas é mais maleável, e pode ser esculpido com desenhos complexos.Isso faz com que seja popular entre nobres e oficiais. A couraça de bronze fornece um bônus de +2 nos testes de Diplomacia",
        "categoria": "Armaduras",
        "subcategoria": "Leves"
    },
    {
        "nome": "Brunea",
        "preco": "50 T$",
        "defesa": "+5",
        "penalidade": "-2",
        "espaco": "5",
        "descricao": "Colete de couro coberto com plaquetas de metal sobrepostas, como escamas de um peixe.",
        "categoria": "Armaduras",
        "subcategoria": "Pesada"
    },
    {
        "nome": "Cota de malha",
        "preco": "150 T$",
        "defesa": "+6",
        "penalidade": "-2",
        "espaco": "4",
        "descricao": "Longa veste de anéis metálicos interligados, formando uma malha flexível e resistente, que vai até os joelhos.",
        "categoria": "Armaduras",
        "subcategoria": "Pesadas"
    },
    {
        "nome": "Loriga segmentada",
        "preco": "250 T$",
        "defesa": "+7",
        "penalidade": "-3",
        "espaco": "4",
        "descricao": "Composta de tiras horizontais de metal, esta armadura é pesada e resistente. Peça muito utilizada por legionários minotauros.",
        "categoria": "Armaduras",
        "subcategoria": "Pesadas"
    },
    {
        "nome": "Meia-armadura",
        "preco": "600 T$",
        "defesa": "+8",
        "penalidade": "-4",
        "espaco": "5",
        "descricao": "Combinação de cota de malha e placas de metal posicionadas sobre as áreas vitais.",
        "categoria": "Armaduras",
        "subcategoria": "Pesadas"
    },
    {
        "nome": "O-Yoroi",
        "preco": "2.000 T$",
        "defesa": "+9",
        "penalidade": "-4",
        "espaco": "5",
        "descricao": "Usada pelos samurais, esta armadura é formada por pequenas placas metálicas unidas por nós de couro colorido. Inclui o kabuto, um elmo com uma máscara metálica.",
        "categoria": "Armaduras",
        "subcategoria": "Pesadas"
    },
    {
        "nome": "Armadura completa",
        "preco": "3.000 T$",
        "defesa": "+10",
        "penalidade": "-5",
        "espaco": "5",
        "descricao": "A mais forte e pesada, formada por placas de metal forjadas e encaixadas de modo a cobrir o corpo inteiro. Inclui manoplas e grevas (luvas e botas metálicas, respectivamente), um elmo com viseira e um colete acolchoado para ser usado sob as placas. Correias e fivelas distribuem o peso da armadura pelo corpo inteiro. Esta armadura precisa ser feita sob medida para cada usuário; um ferreiro cobra 500 PO para adaptar uma armadura completa a um novo usuário",
        "categoria": "Armaduras",
        "subcategoria": "Pesadas"
    }
];
escudos = [
    {
        "nome": "Escudo de Couro",
        "preco": "5 T$",
        "defesa": "+1",
        "penalidade": "0",
        "espaco": "1",
        "pv": "4",
        "descricao": "Um escudo composto de uma armação de madeira é esticado o couro de um animal ou outro material flexível.",
        "categoria": "Escudos",
        "subcategoria": "Leves"
    },
    {
        "nome": "Escudo de madeira",
        "preco": "8 T$",
        "defesa": "+1",
        "penalidade": "-1",
        "espaco": "1",
        "pv": "10",
        "descricao": "Este escudo de madeira é amarrado no antebraço, deixando uma mão livre. O usuário pode carregar um objeto na mão do escudo, mas não manusear uma arma. Por ser de madeira ele não é muito resistente a certos tipos de dano como fogo. Eventualmente algumas flechas podem ficar presas em sua superfície.",
        "categoria": "Escudos",
        "subcategoria": "Leves"
    },
    {
        "nome": "Escudo de metal",
        "preco": "15 T$",
        "defesa": "+1",
        "penalidade": "-1",
        "espaco": "1",
        "pv": "15",
        "descricao": "Com este equipamento o usuário pode carregar um objeto na mão do escudo, mas não manusear uma arma. O metal o torna mais resistente que a versão em madeira.",
        "categoria": "Escudos",
        "subcategoria": "Leves"
    },
    {
        "nome": "Broquel",
        "preco": "50 T$",
        "defesa": "+1",
        "penalidade": "-1",
        "espaco": "1",
        "pv": "15",
        "descricao": "Esse pequeno escudo metálico é amarrado no antebraço, permitindo o uso de uma besta ou arco sem penalidades. Também pode usar o braço do escudo para empunhar uma arma (seja uma arma na mão inábil ou para empunhar uma arma de duas mãos), mas isso acarreta -1 de penalidade na jogada de ataque em função do peso adicional no braço. Essa penalidade se acumula com o modificador de lutar usando a mão inábil ou combater com duas armas. Quando usar uma arma na mão inábil, não recebe o bônus do broquel na CA durante o restante da rodada. Não é possível executar um ataque usando um broquel.",
        "categoria": "Escudos",
        "subcategoria": "Leves"
    },
    {
        "nome": "Escudo pesado de madeira",
        "preco": "25 T$",
        "defesa": "+2",
        "penalidade": "-2",
        "espaco": "2",
        "pv": "10",
        "descricao": "Um escudo grande feito de madeira e empunhadura em couro. Um escudo deve ser amarrado no antebraço e empunhado na mão inábil. Um escudo grande e pesado, não é possível utilizar a mão do escudo para realizar qualquer tarefa",
        "categoria": "Escudos",
        "subcategoria": "Pesados"
    },
    {
        "nome": "Escudo pesado de metal",
        "preco": "50 T$",
        "defesa": "+2",
        "penalidade": "-2",
        "espaco": "2",
        "pv": "20",
        "descricao": "Um escudo grande feito de metal e empunhadura em couro. Um escudo deve ser amarrado no antebraço e empunhado na mão inábil. Um escudo grande e pesado, não é possível utilizar a mão do escudo para realizar qualquer tarefa",
        "categoria": "Escudos",
        "subcategoria": "Pesados"
    },
    {
        "nome": "Escudo de corpo de madeira",
        "preco": "100 T$",
        "defesa": "+4",
        "penalidade": "-5",
        "espaco": "3",
        "pv": "20",
        "descricao": "Esse enorme escudo de madeira é quase tão alto quanto quem o empunha. Para usar esse escudo, você precisa ter ao menos +4 de força. Não pode ser usado montado",
        "categoria": "Escudos",
        "subcategoria": "De Corpo"
    },
    {
        "nome": "Escudo de corpo de metal",
        "preco": "250 T$",
        "defesa": "+7",
        "penalidade": "-5",
        "espaco": "4",
        "pv": "30",
        "descricao": "Tão largo e alto quanto o usuário, esse escudo é o escudo com a maior defesa que existe. Para usar esse escudo, você precisa ter ao menos +5 de força. Não pode ser usado montado",
        "categoria": "Escudos",
        "subcategoria": "De Corpo"
    }
];
itens = [
    {
        "nome": "Algemas",
        "preco": "75 T$",
        "espaco": "1",
        "descricao": "Um par de algemas para criaturas Médias. Prender uma criatura que não esteja indefesa exige empunhar a algema, agarrar o alvo e vencer um novo teste de agarrar contra ela. Você pode prender os dois pulsos da pessoa (–5 em testes que exijam o uso das mãos, impede conjuração) ou um dos pulsos dela em um objeto imóvel adjacente, caso haja, para impedir que ela se mova. Escapar das algemas exige uma ação completa e um teste de Acrobacia contra CD 30 ou de Força contra CD 25 — ou ter as chaves...",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Arpéu",
        "preco": "25 T$",
        "espaco": "1",
        "descricao": "Um gancho de aço amarrado na ponta de uma corda para se fixar em muros, janelas, parapeitos de prédios... Prender um arpéu exige um teste de Pontaria (CD 15). Subir um muro com a ajuda de uma corda fornece +5 no teste de Atletismo.",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Bandoleira de poções",
        "preco": "100 T$",
        "espaco": "1",
        "descricao": "Um cinto de couro com bolsos que comportam pequenos frascos. Se você estiver vestindo uma bandoleira, pode sacar itens alquímicos e poções como uma ação livre. Aumenta em 3 espaços para poções e itens alquímicos.",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Barraca",
        "preco": "50 T$",
        "espaco": "1",
        "descricao": "Esta barraca de lona conta como um saco de dormir para duas pessoas e fornece +2 em testes de Sobrevivência para acampar.",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Corda",
        "preco": "5 T$",
        "espaco": "1",
        "descricao": "Um rolo com 10 metros de corda de cânhamo, o mesmo tipo usado em navios. Possui diversas utilidades: pode ajudar a descer um buraco ou muro (+5 em testes de Atletismo nessas situações), amarrar pessoas etc. Dar um nó firme ou especial (por exemplo, capaz de deslizar, se desfazer com um puxão etc.) exige um teste de Destreza (CD 15). Arrebentar a corda exige 2 pontos de dano de corte ou uma ação padrão e um teste de Força (CD 20).",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Espelho",
        "preco": "10 T$",
        "espaco": "1",
        "descricao": "Este pequeno espelho possui diversas utilidades: observar cantos, fazer sinais de luz e, claro, garantir que você esteja apresentável",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Lampião",
        "preco": "35 T$",
        "espaco": "1",
        "descricao": "Um cilindro com uma alça e duas portinholas. Uma chama alimentada por óleo é acesa dentro do cilindro e uma das portinholas aberta deixa a luz sair. Acender um lampião é uma ação padrão e sua luz ilumina um raio com 15m. Carregar um lampião com óleo é uma ação padrão e ele dura uma cena",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Mochila de Aventureiro",
        "preco": "250 T$",
        "espaco": "1",
        "descricao": "Feita de couro resistente, esta mochila é repleta de bolsos para prender equipamento. Vestir uma mochila de aventureiro aumenta sua capacidade de carga em 2 espaços",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Organizador de pergaminhos",
        "preco": "125 T$",
        "espaco": "1",
        "descricao": "Um estojo de madeira ou couro rígido. Se você estiver vestindo um organizador de pergaminhos, pode sacar pergaminhos como uma ação livre. Aumenta em 5 espaços para pergaminhos",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Pé de cabra",
        "preco": "10 T$",
        "espaco": "1",
        "descricao": "Esta barra de ferro fornece +5 em testes de Força para abrir portas, janelas e baús fechados. Um pé de cabra pode ser usado como arma, com as estatísticas de uma clava",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Saco de dormir",
        "preco": "5 T$",
        "espaco": "1",
        "descricao": "Um colchão com uma coberta fina o bastante para ser enrolada e amarrada, é especialmente útil para aventureiros, que nunca sabem onde vão passar a noite. Dormir ao relento sem um acampamento e um saco de dormir diminui sua recuperação de PV e PM",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Símbolo sagrado",
        "preco": "25 T$",
        "espaco": "1",
        "descricao": "Um medalhão de madeira ou metal com o símbolo de uma divindade. Se você estiver vestindo (normalmente com uma corrente ao redor do pescoço) ou empunhando o símbolo sagrado de um deus do qual é devoto, recebe +1 em testes de resistência.",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Tocha",
        "preco": "5 T$",
        "espaco": "1",
        "descricao": "Um bastão de madeira com algum combustível na ponta (geralmente trapos embebidos em parafina). Acender uma tocha é uma ação padrão. Ela ilumina um raio de 9m e dura uma cena. Pode ser usada como uma arma simples leve (dano 1d4 de impacto mais 1 de fogo, crítico x2).",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Vara de madeira (3m)",
        "preco": "1 T$",
        "espaco": "1",
        "descricao": "Uma haste com 3m de comprimento. Útil para alcançar pontos distantes, mas frágil demais para servir como arma.",
        "categoria": "Itens",
        "subcategoria": "Equipamento de Aventura"
    },
    {
        "nome": "Alaúde élfico",
        "preco": "300 T$",
        "espaco": "1",
        "descricao": "Feito com madeira de alta qualidade e manufatura delicada, este alaúde gera notas vívidas e emocionantes. Enquanto empunha este item, você pode usar a habilidade Inspiração como uma ação de movimento. Conta como um instrumento musical.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Coleção de livros",
        "preco": "75 T$",
        "espaco": "1",
        "descricao": "Uma pequena coleção de tomos e tratados sobre um assunto. Fornece +1 em Conhecimento, Guerra, Misticismo, Nobreza ou Religião (definido quando o item é comprado ou fabricado).",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Equipamento de viagem",
        "preco": "10 T$",
        "espaco": "1",
        "descricao": "Um saco de lona contendo instrumentos úteis para sobreviver nos ermos, como pederneira (pedra para fazer fogo), panelas e talheres para cozinhar, anzól e linha para pescar e uma pequena pá. Um personagem sem este item sofre –5 em testes de Sobrevivência para fazer um acampamento. Não inclui saco de dormir ou barraca.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Estojo de disfarces",
        "preco": "50 T$",
        "espaco": "1",
        "descricao": "Um conjunto de cosméticos, tintas para cabelo e algumas próteses simples (como bigodes e narizes falsos). Um personagem sem este item sofre –5 em testes de Enganação para disfarce.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Flauta mística",
        "preco": "150 T$",
        "espaco": "1",
        "descricao": "Um instrumento delicado, repleto de runas e pequenas gemas místicas. Um bardo que empunhe este item aumenta a CD para resistir às magias lançadas por ele em +1. Conta como um instrumento musical.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Gazua",
        "preco": "5 T$",
        "espaco": "1",
        "descricao": "Uma barra fina de ferro, com a ponta torta ou em forma de gancho. Um personagem sem este item sofre –5 em testes de Ladinagem para abrir fechaduras.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Instrumentos de <ofício>",
        "preco": "30 T$",
        "espaco": "1",
        "descricao": "Existe uma versão deste item para cada perícia de Ofício. Por exemplo, martelo, pregos e serrote para Ofício (carpinteiro), pergaminhos em branco, tinta e pena para Ofício (escriba) e assim por diante. Um personagem sem os instrumentos de seu Ofício sofre –5 nessa perícia.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Instrumento musical",
        "preco": "35 T$",
        "espaco": "1",
        "descricao": "Um instrumento típico, como um bandolim, flauta ou lira.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Luneta",
        "preco": "100 T$",
        "espaco": "1",
        "descricao": "Este instrumento valioso consiste de um cilindro metálico com duas lentes. Fornece +5 em testes de Percepção para observar coisas em alcance longo ou além.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Maleta de medicamentos",
        "preco": "50 T$",
        "espaco": "1",
        "descricao": "Caixa de madeira com ervas, unguentos, bandagens e outros materiais úteis. Um personagem sem este item sofre –5 em Cura",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Sela",
        "preco": "20 T$",
        "espaco": "1",
        "descricao": "Uma peça de couro e pelego colocada sobre o lombo da montaria, sobre a qual o cavaleiro se senta. Inclui arreios para conduzir o animal. Um personagem montado em uma montaria sem sela sofre –5 em testes de Cavalgar. Usada no animal, a sela não ocupa espaço de carga do personagem.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Tambor das profundezas ",
        "preco": "80 T$",
        "espaco": "1",
        "descricao": "Um instrumento típico de anões de Doherimm, capaz de sons graves e retumbantes. Enquanto empunha este item, o alcance da habilidade Inspiração e de qualquer Música de Bardo é dobrado. Conta como um instrumento musical.",
        "categoria": "Itens",
        "subcategoria": "Ferramentas"
    },
    {
        "nome": "Andrajos de aldeão",
        "preco": "1 T$",
        "espaco": "1",
        "descricao": "Roupas típicas de camponês. Consiste de camisa larga e calças soltas ou blusa e saia e não inclui botas — os mais pobres andam descalços. Fornece +2 em testes de Investigação para interrogar (ninguém se importa com o que um aldeão escuta) e, se você possuir o poder Aparência Inofensiva, a CD para resistir a ele aumenta em +2. Porém, impõe –2 em perícias baseadas em Carisma contra pessoas que se importam com classe social.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Bandana",
        "preco": "5 T$",
        "espaco": "1",
        "descricao": "Um lenço tipicamente usado por bandidos e piratas. Fornece +1 em Intimidação.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Botas reforçadas",
        "preco": "20 T$",
        "espaco": "1",
        "descricao": "Grossas e resistentes, estas botas de cano alto protegem contra perigos do terreno. Aumentam seu deslocamento em +1,5m se ele for reduzido por terreno difícil (após a redução).",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Camisa bufante",
        "preco": "25 T$",
        "espaco": "1",
        "descricao": "Blusa colorida, com mangas e golas longas e encrespadas. Fornece +1 em Atuação.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Capa esvoaçante",
        "preco": "25 T$",
        "espaco": "1",
        "descricao": "Favorita entre heróis ousados, esta capa de seda produz movimentos amplos e chamativos, que fornecem +1 em Enganação.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Capa pesada",
        "preco": "15 T$",
        "espaco": "1",
        "descricao": "Uma capa de couro grossa e resistente. Protege e aquece o corpo, fornecendo +1 em Fortitude.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Casaco longo",
        "preco": "20 T$",
        "espaco": "1",
        "descricao": "Feito de peles ou couro grosso forrado com lã, e impermeabilizado com óleo, este casaco é quente e pesado. Fornece +5 em testes de Fortitude para resistir a efeitos de frio, mas impõe penalidade de armadura de –2.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Chapéu arcano",
        "preco": "50 T$",
        "espaco": "1",
        "descricao": "Com pinturas e bordados de símbolos místicos, este chapéu pontudo ajuda a canalizar energias mágicas. Ele fornece +1 ponto de mana, mas apenas se você possuir a habilidade de classe Caminho do Arcanista.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Enfeite de elmo",
        "preco": "15 T$",
        "espaco": "1",
        "descricao": "Um adorno chamativo, como crina de cavalo, plumas, asas ou um totem de animal. Fornece resistência a medo +2",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Farrapos de ermitão",
        "preco": "1 T$",
        "espaco": "1",
        "descricao": "Trapos 'adornados' com plantas e raízes. Uma pessoa vestindo farrapos de ermitão não parece muito civilizada, e sofre –2 em Diplomacia e em testes de Investigação para interrogar. Entretanto, recebe +2 em Adestramento.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Gorro de ervas",
        "preco": "75 T$",
        "espaco": "1",
        "descricao": "Formado por duas camadas de tecido, este chapéu é preenchido com ervas preparadas para auxiliar a concentração do usuário. Fornece +1 em Vontade.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Luva de pelica",
        "preco": "5 T$",
        "espaco": "1",
        "descricao": "Estas luvas delicadas preservam o tato e impedem que o suor deixe os dedos escorregadios. Fornecem +1 em Ladinagem.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Manto camuflado",
        "preco": "12 T$",
        "espaco": "1",
        "descricao": "Um manto camuflado é feito para um tipo de terreno específico (veja a habilidade Explorador, na página 51). Por exemplo, um manto camuflado para floresta pode ser verde e marrom e coberto de folhas, enquanto um manto urbano pode ser cinza ou negro. Usar um manto camuflado no terreno correto fornece +2 em Furtividade",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Manto eclesiástico",
        "preco": "20 T$",
        "espaco": "1",
        "descricao": "Um manto típico de igrejas e templos. Fornece +1 em Religião.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Robe místico",
        "preco": "50 T$",
        "espaco": "1",
        "descricao": "Um manto longo, adornado com temas arcanos. Fornece +1 em Misticismo.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Sapatos de camurça",
        "preco": "8 T$",
        "espaco": "1",
        "descricao": "Leves e resistentes, aprimoram o equilíbrio e a firmeza dos pés, fornecendo +1 em Acrobacia.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Tabardo",
        "preco": "10 T$",
        "espaco": "1",
        "descricao": "Uma peça de tecido usada como um colete, cobrindo o peito e as costas. Geralmente ostenta a heráldica de um reino, igreja, casa nobre ou ordem de cavaleiros. Fornece +1 em Diplomacia",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Traje da corte",
        "preco": "100 T$",
        "espaco": "1",
        "descricao": "Roupas de luxo, feitas sob medida e adequadas à nobreza e realeza. Inclui algumas joias, como aneis e colares. Em certos ambientes (um baile, um salão de palácio), um personagem que não esteja vestindo este item sofre –5 em perícias baseadas em Carisma.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Traje de viajante",
        "preco": "10 T$",
        "espaco": "1",
        "descricao": "Inclui botas, calças ou saias, cinto, camisa de linho e capa com capuz. A roupa padrão de aventureiros.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Veste de seda",
        "preco": "25 T$",
        "espaco": "1",
        "descricao": "Esta roupa leve e elegante deixa seus movimentos os mais livres possíveis. Fornece +1 em Reflexos.",
        "categoria": "Itens",
        "subcategoria": "Vestuário"
    },
    {
        "nome": "Bolsa de pó",
        "preco": "300 T$",
        "espaco": "1",
        "descricao": "Uma bolsa com pó multicolorido, fabricado a partir das pétalas trituradas de flores que nascem apenas na Pondsmânia. Quando lança uma magia de encantamento ou ilusão, você recebe +2 PM para gastar em aprimoramentos.",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "Cajado arcano",
        "preco": "1.000 T$",
        "espaco": "2",
        "descricao": "Um cajado típico, feito de madeira de boa qualidade e entalhado com runas. O limite de PM que você pode gastar em magias arcanas e a CD para resistir a elas aumentam em +1. Para fornecer seus benefícios, um cajado precisa ser empunhado com as duas mãos. Ele pode ser usado como arma, com as estatísticas de um bordão",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "Cetro elemental",
        "preco": "750 T$",
        "espaco": "1",
        "descricao": "Este cetro possui uma pedra preciosa em sua ponta: esmeralda (ácido), topázio (eletricidade), rubi (fogo) ou safira (frio). Quando lança uma magia que causa dano do tipo da pedra, o dano aumenta em um dado do mesmo tipo.",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "Costela de lich",
        "preco": "300 T$",
        "espaco": "1",
        "descricao": "Esta varinha é feita a partir do osso de um morto-vivo. Suas magias causam +1d6 pontos de dano de trevas. Se estiver empunhando esta varinha você não recupera PV por efeitos mágicos de cura.",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "Dedo de ente",
        "preco": "200 T$",
        "espaco": "1",
        "descricao": "Uma varinha feita da madeira de uma árvore senciente. Sempre que gastar pelo menos 1 PM para lançar uma magia, role 1d4. Com um resultado 4, você recupera 1 PM.",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "Luva de ferro",
        "preco": "150 T$",
        "espaco": "1",
        "descricao": "Um conjunto de dedais interligados por correntes. Suas magias arcanas pessoais que concedem bônus na Defesa ou em testes de resistências têm esse bônus aumentado em +1",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "Medalhão de prata",
        "preco": "750 T$",
        "espaco": "1",
        "descricao": "Gravado com uma runa pessoal do conjurador, este medalhão de prata diminui em –1 PM o custo de magias de alcance pessoal",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "Orbe cristalino",
        "preco": "750 T$",
        "espaco": "1",
        "descricao": "Esta esfera perfeita concentra seu poder mágico. O limite de PM que você pode gastar em magias arcanas aumenta em +1",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "Tomo hermético",
        "preco": "1.500 T$",
        "espaco": "1",
        "descricao": "Um livro de tratados que aumentam a sua compreensão sobre uma escola de magia específica. A CD para resistir a suas magias arcanas dessa escola aumenta em +2.",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "Varinha arcana",
        "preco": "100 T$",
        "espaco": "1",
        "descricao": "Uma varinha típica, feita de madeira de boa qualidade e entalhada com runas. A CD para resistir a suas magias arcanas aumenta em +1.",
        "categoria": "Itens",
        "subcategoria": "Esotéricos"
    },
    {
        "nome": "",
        "preco": " T$",
        "espaco": "1",
        "descricao": "",
        "categoria": "Itens",
        "subcategoria": ""
    }
];
alquimicos = [
    {
        "nome": "Ácido",
        "preco": "10 T$",
        "espaco": "0,5",
        "descricao": "Um frasco de vidro contendo um ácido alquímico altamente corrosivo. Você atira o frasco, fazendo um ataque à distância resistido por um teste de Reflexos do alvo. Se você acertar, o alvo sofre 2d4 pontos de dano de ácido, Se errar, ele sofre metade desse dano.",
        "categoria": "Alquimicos",
        "subcategoria": "Poções"
    },
    {
        "nome": "Água Benta",
        "preco": "25 T$",
        "espaco": "0,5",
        "descricao": "Criada por clérigos e vendida em pequenos frascos, a água benta é uma poderosa arma contra mortosvivos e espíritos Malignos (mas é inofensiva contra outras criaturas). Você atira o frasco, fazendo um ataque à distância resistido por um teste de Reflexos do alvo. Se acertar, o alvo sofre 2d6 pontos de dano. Se errar, ele sofre metade desse dano.",
        "categoria": "Alquimicos",
        "subcategoria": "Poções"
    },
    {
        "nome": "Bálsamo Restaurador",
        "preco": "10 T$",
        "espaco": "0,5",
        "descricao": " Uma pasta verde e fedorenta, feita de ervas medicinais. Usá-la é uma ação completa e recupera 2d4 pontos de vida.",
        "categoria": "Alquimicos",
        "subcategoria": "Poções"
    },
    {
        "nome": "Cosmético",
        "preco": "30 T$",
        "espaco": "0,5",
        "descricao": "Perfume ou maquiagem. Usá-lo é uma ação completa e fornece +2 em testes de perícias baseadas em Carisma até o fim da cena",
        "categoria": "Alquimicos",
        "subcategoria": "Especial"
    },
    {
        "nome": "Elixir do amor",
        "preco": "100 T$",
        "espaco": "0,5",
        "descricao": "Um humanoide que beba este líquido adocicado fica apaixonado pela primeira criatura que enxergar (condição enfeitiçado; Vontade CD Car anula). O efeito dura 1d3 dias.",
        "categoria": "Alquimicos",
        "subcategoria": "Poções"
    },
    {
        "nome": "Essência de mana",
        "preco": "50 T$",
        "espaco": "0,5",
        "descricao": "Esta poção feita de ervas raras e compostos alquímicos recupera energia pessoal. Beber a essência de mana é uma ação padrão e recupera 1d4 pontos de mana.",
        "categoria": "Alquimicos",
        "subcategoria": "Poções"
    },
    {
        "nome": "Fogo Alquímico",
        "preco": "10 T$",
        "espaco": "0,5",
        "descricao": "É um frasco que contém uma substância grossa e pegajosa, e que entra em combustão ao entrar em contato com o ar. Você atira o frasco, fazendo um ataque de toque à distância (ataque oposto a um teste de Reflexos). Se você acertar, o alvo sofre 1d6 pontos de dano e pega fogo. Se errar, ele sofre metade desse dano e não pega fogo. Uma criatura em chamas sofre 1d6 pontos de dano no fim do seu próximo turno, a menos que apague as chamas (com uma ação completa).",
        "categoria": "Alquimicos",
        "subcategoria": "Poções"
    },
    {
        "nome": "Pó de Azgher",
        "preco": "50 T$",
        "espaco": "0,5",
        "descricao": "Este frasco de cerâmica contém um pó que explode em contato com o ar. Quando o frasco é arremessado e quebra, qualquer criatura num raio de 6m deve fazer um teste de Fortitude (CD 20). Uma criatura que falhe fica atordoada por uma rodada, devido ao brilho e barulho da explosão.",
        "categoria": "Alquimicos",
        "subcategoria": "Poções"
    },
    {
        "nome": "Pó do desaparecimento",
        "preco": "100 T$",
        "espaco": "0,5",
        "descricao": "Uma criatura ou objeto coberto por este pó torna-se invisível (como em Invisibilidade) por 2d6 rodadas. O usuário não sabe quando a invisibilidade vai terminar.",
        "categoria": "Alquimicos",
        "subcategoria": "Poções"
    },
    {
        "nome": "Baga-de-Fogo",
        "preco": "30 T$",
        "espaco": "0,5",
        "descricao": " Pequeno fruto vermelho, apreciado por seu sabor picante. Usado como catalisador, adiciona +1d6 de dano de fogo a magias.",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Dente-de-dragão",
        "preco": "45 T$",
        "espaco": "0,5",
        "descricao": "Uma flor comum em regiões montanhosas, especialmente nas Sanguinárias, possui formato parecido com uma presa de monstro. Suas propriedades místicas aumentam o dano de magias em um dado do mesmo tipo.",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Essência abissal",
        "preco": "150 T$",
        "espaco": "0,5",
        "descricao": "Um líquido espesso, produzido através do sangue de criaturas demoníacas. Aumenta os dados de dano de magias de fogo em uma categoria — d4 para d6, d6 para d8, d8 para d10 e d10 para d12 (o máximo).",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Líquen lilás",
        "preco": "30 T$",
        "espaco": "0,5",
        "descricao": "Esta estranha planta tem aspecto cristalino e cresce em abundância na região das Uivantes. Adiciona +1d6 de dano de frio a magias.",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Musgo púrpura",
        "preco": "45 T$",
        "espaco": "0,5",
        "descricao": "Encontrado em florestas fechadas, esse fungo cintilante possui propriedadesque fornecem +2 na CD de magias de ilusão.",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Ossos de monstro",
        "preco": "45 T$",
        "espaco": "0,5",
        "descricao": "Pequenas falanges de criaturas monstruosas, tratadas com óleos alquímicos. Fornece +2 na CD de magias de necromancia.",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Pó de cristal",
        "preco": "30 T$",
        "espaco": "0,5",
        "descricao": "Uma pitada de pó de um mineral cristalino puro, como quartzo ou topázio. Diminui o custo de magias de encantamento em –1 PM",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Pó de giz",
        "preco": "30 T$",
        "espaco": "0,5",
        "descricao": "Calcário esmagado em pó, uma substância comum que, usada como catalisador, diminui o custo de magias de convocação em –1 PM.",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Ramo verdejante",
        "preco": "45 T$",
        "espaco": "0,5",
        "descricao": "Esta combinação de ervas potencializa magias de cura, aumentando sua cura em +1 PV por dado.",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Saco de sal",
        "preco": " T$",
        "espaco": "0,5",
        "descricao": "Um pequeno saco de couro com sal marinho. Fornece +2 na CD de magias de abjuração.",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Seixo de âmbar",
        "preco": "30 T$",
        "espaco": "0,5",
        "descricao": " Essa “gema” feita de seiva de árvore fossilizada diminui o custo de magias de transmutação em –1 PM.",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Terra de cemitério",
        "preco": "30 T$",
        "espaco": "0,5",
        "descricao": "Produzido a partir de compostos alquímicos que canalizam energia de trevas. Contato, vítima fica debilitada (fraca).",
        "categoria": "Alquimicos",
        "subcategoria": "Catalisadores"
    },
    {
        "nome": "Beladona",
        "preco": "1.500 T$",
        "espaco": "0,5",
        "descricao": "Planta extremamente tóxica que afeta o sistema nervoso da vítima. Ingestão, vítima fica paralisada (lenta) por 3 rodadas. A CD para fabricar e para resistir a este veneno aumenta em +5.",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    },
    {
        "nome": "Bruma sonolenta",
        "preco": "150 T$",
        "espaco": "0,5",
        "descricao": "Um gás sonífero. Inalação, vítima fica inconsciente (enjoada por 1 rodada)",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    },
    {
        "nome": "Cicuta",
        "preco": "60 T$",
        "espaco": "0,5",
        "descricao": "Planta cuja ingestão pode causar náusea, dores e até morte. Ingestão, perde 1d12 PV por rodada durante 3 rodadas (perde 1d12 PV)",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    },
    {
        "nome": "Essência de sombra",
        "preco": "100 T$",
        "espaco": "0,5",
        "descricao": "Produzido a partir de compostos alquímicos que canalizam energia de trevas. Contato, vítima fica debilitada (fraca).",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    },
    {
        "nome": "Névoa tóxica",
        "preco": " T$",
        "espaco": "0,5",
        "descricao": "Este gás verde queima e corrói a pele e os pulmões. Inalação, perde 1d12 PV por rodada durante 3 rodadas (perde 1d12 PV).",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    },
    {
        "nome": "Peçonha comum",
        "preco": "15 T$",
        "espaco": "0,5",
        "descricao": "Veneno típico, extraído de animais ou plantas tóxicas. Contato, perde 1d12 PV",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    },
    {
        "nome": "Peçonha concentrada",
        "preco": "90 T$",
        "espaco": "0,5",
        "descricao": "Dose concentrada da peçonha comum. Contato, perde 1d12 PV por rodada durante 3 rodadas (perde 1d12 PV).",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    },
    {
        "nome": "Peçonha potente",
        "preco": "600 T$",
        "espaco": "0,5",
        "descricao": "Veneno poderoso, extraído de animais ou plantas perigosos. Contato, perde 2d12 PV por rodada durante 3 rodadas (perde 2d12 PV).",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    },
    {
        "nome": "Pó de lich",
        "preco": "3.000 T$",
        "espaco": "0,5",
        "descricao": "Veneno letal, usado para assassinar alvos poderosos. Ingestão, perde 4d12 PV por rodada durante 5 rodadas (perde 4d12 PV). A CD para fabricar e para resistir a este veneno aumenta em +5",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    },
    {
        "nome": "Riso de Nimb",
        "preco": "150 T$",
        "espaco": "0,5",
        "descricao": "Este gás púrpura faz a vítima rir descontroladamente e agir de forma caótica. Inalação, vítima fica confusa (lenta por 1 rodada)",
        "categoria": "Alquimicos",
        "subcategoria": "Venenos"
    }
];

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
        case 'Alquimicos':
            itensFiltrados = alquimicos;
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
    } else if (categoriaSelecionada === 'Alquimicos') {
        adicionarOpcoesSubcategoria(['Catalisadores', 'Poções', 'Venenos']);
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
        case 'Alquimicos':
            listarAlquimicos(itens);
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

        card.addEventListener('click', function () {
            abrirPopup(item.descricao);
        });

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
        preco.classList.add('item-property');
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
        card.addEventListener('click', function () {
            abrirPopup(item.descricao);
        });
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
        preco.classList.add('item-property');
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
        card.addEventListener('click', function () {
            abrirPopup(item.descricao);
        });
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
        preco.classList.add('item-property');
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
        card.addEventListener('click', function () {
            abrirPopup(item.descricao);
        });
        card.classList.add('card');
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Nome
        var nome = document.createElement('p');
        nome.classList.add('fz-bigger');
        nome.innerHTML = '<strong>' + item.nome + '</strong>';

        // Preço
        var preco = document.createElement('p');
        preco.classList.add('item-property');
        preco.innerHTML = '<strong>Preço:</strong> ';
        var precoValor = document.createElement('span');
        precoValor.innerHTML = item.preco;
        preco.appendChild(precoValor);

        // Descrição
        var descricao = document.createElement('span');
        descricao.classList.add('mb-1')
        descricao.innerHTML = item.descricao;

        cardBody.appendChild(nome);
        cardBody.appendChild(preco);
        cardBody.appendChild(descricao);

        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

function listarAlquimicos(itens) {

    var container = document.getElementById('equipamentos-container');
    container.innerHTML = '';

    itens.forEach(function (item) {
        var card = document.createElement('div');
        card.addEventListener('click', function () {
            abrirPopup(item.descricao);
        });
        card.classList.add('card');
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Nome
        var nome = document.createElement('p');
        nome.classList.add('fz-bigger');
        nome.innerHTML = '<strong>' + item.nome + '</strong>';

        // Preço
        var preco = document.createElement('p');
        preco.classList.add('item-property');
        preco.innerHTML = '<strong>Preço:</strong> ';
        var precoValor = document.createElement('span');
        precoValor.innerHTML = item.preco;
        preco.appendChild(precoValor);

        // Descrição
        var descricao = document.createElement('span');
        descricao.classList.add('mb-1')
        descricao.innerHTML = item.descricao;

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

function abrirPopup(descricao) {
    document.getElementById('descricao-item').textContent = descricao;
    document.getElementById('popup').style.display = 'block';
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}