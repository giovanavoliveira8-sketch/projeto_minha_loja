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
        quantidade: 1
    }

    return item
}
//FUNÇÃO PARA ADICIONAR ITEM
const addItem = (objItem) => {
    itenscarrinho.push(objItem)

    sessionStorage.setItem("carrinhoSessao", JSON.stringify(itenscarrinho))
    //const itensCarrinho02 = JSON.parse(localStorage.get("carrinhoSessao")) || []
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

