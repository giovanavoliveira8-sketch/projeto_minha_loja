import { listItens, removeItem, atualizarQuantidade } from './carrinho.js'

const montaTelaCarrinho = () => {
    const divProdutos = document.querySelector('#produtos')

    divProdutos.innerHTML = ''

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'produto')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminhoImagem)
        imgItem.setAttribute('alt', elem.descricaoProduto)

        sectionItem.appendChild(imgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricao-itens')

        const divDescricao = document.createElement('div')
        divDescricao.setAttribute('class', 'descricao')
        divDescricao.innerHTML = elem.descricaoProduto

        const divValores = document.createElement('div')
        divValores.setAttribute('class', 'valores')

        const pItem = document.createElement('p')
        pItem.innerHTML = `R$ ${parseFloat(elem.valorUnitario).toFixed
        (2).replace('.', '.')}`

        const divQuant = document.createElement('div')
        divQuant.setAttribute('class', 'input-quantidade')

        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', elem.quantidade)
        inputQuantidade.setAttribute('min', '1')
        inputQuantidade.setAttribute('step', '1')

        divQuant.appendChild(inputQuantidade)

        inputQuantidade.addEventListener('change', () => {

            const quantidade = Number(inputQuantidade.value);
        
            if (!Number.isInteger(quantidade) || quantidade < 1) {
                alert("Não é possível essa quantidade.");
                inputQuantidade.value = elem.quantidade;
                return;
            }
        
            atualizarQuantidade(i, quantidade);
            montaTelaCarrinho();
        });

        const pCalc = document.createElement('p')
        pCalc.innerHTML = `R$ ${(elem.valorUnitario * elem.quantidade).toFixed(2)}`

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icones/remover.png')
        imgRemover.setAttribute('alt', 'remover')

        imgRemover.addEventListener('click', () => {
            if(confirm(`Deseja remover esse item ${elem.descricaoProduto} do carrinho?`)){
                removeItem(i)
            }
            montaTelaCarrinho();
        });

        divValores.appendChild(pItem)
        divValores.appendChild(divQuant)
        divValores.appendChild(pCalc)
        divValores.appendChild(imgRemover)
         
        divDescricaoItens.appendChild(divDescricao)
        divDescricaoItens.appendChild(divValores)

        sectionItem.appendChild(divDescricaoItens)

        divProdutos.appendChild(sectionItem)

    })

    calculaTotal();

}

const calculaTotal = () => {
        
    let total = 0;

    listItens ().forEach((elem) => {
        total += elem.valorUnitario * elem.quantidade;
    });

    const frete = 10;

    document.querySelector("#valorTotal").innerHTML =
        `R$ ${total.toFixed(2).replace('.', ',')}`;

    document.querySelector("#valorFrete").innerHTML =
        `R$ ${frete.toFixed(2).replace('.', ',')}`;

    document.querySelector("#valorPagar").innerHTML =
        `R$ ${(total + frete).toFixed(2).replace('.', ',')}`;
}

montaTelaCarrinho()

