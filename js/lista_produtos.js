const produtos = [
    {
        idProduto: 1,
        descricaoProduto: "Brinco Argola Dourada",
        valorUnitario: 39.90,
        unidade: "UN",
        caminhoImagem: "../imagens/3.png",
        idSecao: 1,
        secao: "Brincos"
    },
    {
        idProduto: 2,
        descricaoProduto: "Brinco Pérola Clássica",
        valorUnitario: 34.90,
        unidade: "UN",
        caminhoImagem: "../imagens/14.png",
        idSecao: 1,
        secao: "Brincos"
    },
    {
        idProduto: 3,
        descricaoProduto: "Brinco Ponto de Luz",
        valorUnitario: 29.90,
        unidade: "UN",
        caminhoImagem: "../imagens/19.png",
        idSecao: 1,
        secao: "Brincos"
    },
    {
        idProduto: 4,
        descricaoProduto: "Brinco Flor Delicada",
        valorUnitario: 42.90,
        unidade: "UN",
        caminhoImagem: "../imagens/brincoflordelicada.jpg",
        idSecao: 1,
        secao: "Brincos"
    },

    {
        idProduto: 5,
        descricaoProduto: "Brinco Folha trabalhada",
        valorUnitario: 45.90,
        unidade: "UN",
        caminhoImagem: "../imagens/folhatrabalhada.jpg",
        idSecao: 1,
        secao: "Brincos"
    },
    
    {
        idProduto: 6,
        descricaoProduto: "Colar Ponto de Luz",
        valorUnitario: 59.90,
        unidade: "UN",
        caminhoImagem: "../imagens/colarpontoluz.jpg",
        idSecao: 2,
        secao: "Colares"
    },
    {
        idProduto: 7,
        descricaoProduto: "Colar Coração Dourado",
        valorUnitario: 69.90,
        unidade: "UN",
        caminhoImagem: "../imagens/colarcoracaodourado.jpg",
        idSecao: 2,
        secao: "Colares"
    },
    {
        idProduto: 8,
        descricaoProduto: "Colar Borboleta",
        valorUnitario: 64.90,
        unidade: "UN",
        caminhoImagem: "../imagens/colarborboleta.jpg",
        idSecao: 2,
        secao: "Colares"
    },
    {
        idProduto: 9,
        descricaoProduto: "Colar Lua e Estrela",
        valorUnitario: 72.90,
        unidade: "UN",
        caminhoImagem: "../imagens/colarluaestrela.jpg",
        idSecao: 2,
        secao: "Colares"
    },
    {
        idProduto: 10,
        descricaoProduto: "Colar Trevo",
        valorUnitario: 61.90,
        unidade: "UN",
        caminhoImagem: "../imagens/colartrevo.jpg",
        idSecao: 2,
        secao: "Colares"
    },
    {
        idProduto: 11,
        descricaoProduto: "Pulseira Riviera",
        valorUnitario: 79.90,
        unidade: "UN",
        caminhoImagem: "../imagens/pulseirariviera.jpg",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 12,
        descricaoProduto: "Pulseira Pérolas",
        valorUnitario: 54.90,
        unidade: "UN",
        caminhoImagem: "../imagens/pulseirapérola.jpg",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 13,
        descricaoProduto: "Pulseira Charms",
        valorUnitario: 89.90,
        unidade: "UN",
        caminhoImagem: "../imagens/pulseiracharms.jpg",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 14,
        descricaoProduto: "Pulseira Love",
        valorUnitario: 49.90,
        unidade: "UN",
        caminhoImagem: "../imagens/pulseiralove.png",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 15,
        descricaoProduto: "Pulseira Cristais",
        valorUnitario: 68.90,
        unidade: "UN",
        caminhoImagem: "../imagens/pulseiracristais.jpg",
        idSecao: 3,
        secao: "Pulseiras"
    },
    {
        idProduto: 16,
        descricaoProduto: "Anel Solitário",
        valorUnitario: 45.90,
        unidade: "UN",
        caminhoImagem: "../imagens/anelsolidario.jpg",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 17,
        descricaoProduto: "Anel Ajustável",
        valorUnitario: 32.90,
        unidade: "UN",
        caminhoImagem: "../imagens/anelajustavel.webp",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 18,
        descricaoProduto: "Anel Borboleta",
        valorUnitario: 39.90,
        unidade: "UN",
        caminhoImagem: "../imagens/anelborboleta.jpg",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 19,
        descricaoProduto: "Anel Coração",
        valorUnitario: 36.90,
        unidade: "UN",
        caminhoImagem: "../imagens/anelcoracao.jpg",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 20,
        descricaoProduto: "Anel Infinito",
        valorUnitario: 41.90,
        unidade: "UN",
        caminhoImagem: "../imagens/anelinfinito.webp",
        idSecao: 4,
        secao: "Anéis"
    },
    {
        idProduto: 21,
        descricaoProduto: "Presilha Flor",
        valorUnitario: 19.90,
        unidade: "UN",
        caminhoImagem: "../imagens/presilhaflor.jpg",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },
    {
        idProduto: 22,
        descricaoProduto: "Tiara Pérolas",
        valorUnitario: 34.90,
        unidade: "UN",
        caminhoImagem: "../imagens/tiaraperolas.webp",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },
    {
        idProduto: 23,
        descricaoProduto: "Xuxinha Cetim Rosa",
        valorUnitario: 14.90,
        unidade: "UN",
        caminhoImagem: "../imagens/xuxinhacetim.jpg",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },
    {
        idProduto: 24,
        descricaoProduto: "Laço Boutique",
        valorUnitario: 17.90,
        unidade: "UN",
        caminhoImagem: "../imagens/laçinho.webp",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },

    {
        idProduto: 25,
        descricaoProduto: "Cosméticos",
        valorUnitario: 36.90,
        unidade: "UN",
        caminhoImagem: "../imagens/9.png",
        idSecao: 5,
        secao: "Acessórios para Cabelo"
    },
    
    {
        idProduto: 26,
        descricaoProduto: "Bolsa Transversal Nude",
        valorUnitario: 119.90,
        unidade: "UN",
        caminhoImagem: "../imagens/bolsatransversal nude.jpg",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 27,
        descricaoProduto: "Bolsa Mini Preta",
        valorUnitario: 99.90,
        unidade: "UN",
        caminhoImagem: "../imagens/bolsaminipreta.jpg",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 28,
        descricaoProduto: "Bolsa Tiracolo Rosa",
        valorUnitario: 109.90,
        unidade: "UN",
        caminhoImagem: "../imagens/bolsatiracolorosa.webp",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 29,
        descricaoProduto: "Carteira Feminina",
        valorUnitario: 69.90,
        unidade: "UN",
        caminhoImagem: "../imagens/carteira.webp",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 30,
        descricaoProduto: "Bolsa Matelassê",
        valorUnitario: 139.90,
        unidade: "UN",
        caminhoImagem: "../imagens/bolsamate.webp",
        idSecao: 6,
        secao: "Bolsas"
    },
    {
        idProduto: 31,
        descricaoProduto: "Óculos Gatinho",
        valorUnitario: 79.90,
        unidade: "UN",
        caminhoImagem: "../imagens/oculosgatinho.jpg",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 32,
        descricaoProduto: "Óculos Redondo",
        valorUnitario: 74.90,
        unidade: "UN",
        caminhoImagem: "../imagens/oculosredondo.webp",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 33,
        descricaoProduto: "Óculos Quadrado",
        valorUnitario: 82.90,
        unidade: "UN",
        caminhoImagem: "../imagens/oculosquadrado.webp",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 34,
        descricaoProduto: "Óculos Retrô",
        valorUnitario: 89.90,
        unidade: "UN",
        caminhoImagem: "../imagens/oculosretro.webp",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 35,
        descricaoProduto: "Óculos Degradê",
        valorUnitario: 84.90,
        unidade: "UN",
        caminhoImagem: "../imagens/oculosdegrade.avif",
        idSecao: 7,
        secao: "Óculos"
    },
    {
        idProduto: 36,
        descricaoProduto: "Relógio Feminino Rose",
        valorUnitario: 149.90,
        unidade: "UN",
        caminhoImagem: "../imagens/relogiorose.webp",
        idSecao: 8,
        secao: "Relógios"
    },
    {
        idProduto: 37,
        descricaoProduto: "Relógio Prata",
        valorUnitario: 139.90,
        unidade: "UN",
        caminhoImagem: "../imagens/relogioprata.webp",
        idSecao: 8,
        secao: "Relógios"
    },
    {
        idProduto: 38,
        descricaoProduto: "Relógio Dourado",
        valorUnitario: 159.90,
        unidade: "UN",
        caminhoImagem: "../imagens/relogiodourado.webp",
        idSecao: 8,
        secao: "Relógios"
    },
    {
        idProduto: 39,
        descricaoProduto: "Relógio Minimalista",
        valorUnitario: 129.90,
        unidade: "UN",
        caminhoImagem: "../imagens/relogiominimalista.jpg",
        idSecao: 8,
        secao: "Relógios"
    },
    {
        idProduto: 40,
        descricaoProduto: "Relógio Pulseira de Couro",
        valorUnitario: 169.90,
        unidade: "UN",
        caminhoImagem: "../imagens/relogiocouro.webp",
        idSecao: 8,
        secao: "Relógios"
    }
];

export {produtos}