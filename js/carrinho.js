//CRIANDO ARRAY DE ITENS DO CARRINHO
let itenscarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []
//const itensCarrinho02 = JSON.parse(localStorage.get("carrinhoSessao")) || []

//FUNÇÂO ITEM
const item = (objProduto) => {

    const item = {
        idProduto: objProduto.idProduto,
        descricaoProduto: objProduto.descricaoProduto,
        valorUnitario: objProduto.valorUnitario,
        unidade: objProduto.unidade,
        caminhoImagem: objProduto.caminhoImagem,
        quantidade: 1,
    }

    return item
}

console.log(itenscarrinho.findIndex(elem => elem.idProduto == 1))

//FUNÇÃO PARA ADICIONAR ITEM
const addItem = (objItem) => {

    const indice = itenscarrinho.findIndex(
        elem => elem.idProduto == objItem.idProduto
    );

    if (indice != -1) {
        // Produto já existe
        itenscarrinho[indice].quantidade++;
    } else {
        // Produto não existe
        itenscarrinho.push({
            ...objItem,
            quantidade: 1
        });
    }

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itenscarrinho)
    );
}

//FUNÇÂO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []

   //const itensCarrinho02 = JSON.parse(localStorage.get("carrinhoSessao")) || []

    return listaItens
}

//FUNÇÂO PARA REMOVER OS ITENS DO ARRAY
const removeItem = (indice) => {
    itenscarrinho.splice(indice, 1);

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itenscarrinho)
    );
}

//EXPORTAÇÃO
export { addItem, listItens, removeItem }

