//PEGANDO ELEMENTOS DO DOM
const inputCep = document.querySelector('#cep')

//CAPTURANDO O EVENTO change
inputCep.addEventListener('change', (evt) =>{
    //PEGANDO OS NÙMEROS DOS INPUTCEP
    const numCep = evt.target.value.replace(/\D/g, "")
    //VERIFICA SE POSSUI 8 DÍGITOS
    if (numCep.length !== 8){
        alert('CEP INVÁLIDO!')

        return
}

//CHAMA A FUNÇÃO CEP consultaCEP
consultaCEP(numCep)

})

//FUNÇÃO CONSULTA CEP VIACEP
const consultaCEP = async (cep)=>{
    //TENTA CONECTAR A API
    try{
    //FAZ A COMUNICAÇÃO COM A API DO VIA CEP POR MEIO DA FUNÇÃO fetch
    //AWAIT -AGUARDA ATÉ OBTER UM PROMISE
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    
    //SE O STATUS DA RESPOSTA NÃO FOR OK. DISPARA UMA EXCEÇÃO
    if (!resposta.ok){
        throw new Error ("ERRO NA REQUISIÇÃO")
    }

    //OBTEM OS DADOS DA API
    const dadosEndereco = await resposta.json ()

    //VERIFICA SE OS DADOS SÃO VÁLIDOS
    if (dadosEndereco.erro){
        alert('CEP NÃO LOCALIZADO')

        return
    }

    //CHAMA A FUNÇÃO carregaInput
    carregaInput(dadosEndereco)

//CASO HAJA QUALQUER ERRO É DISPARADA UM EXCEÇÃO
}catch(erro){
    console.log("ERRO", erro.mensage)
}

}


//OBJETO LITERAL DOS INPUTS
const campos = {
    nome: document.querySelector('#nome'),
    sobrenome: document.querySelector('#sobrenome'),
    telefone: document.querySelector("#telefone"),
    email: document.querySelector("#email"),
    datadenascimento: document.querySelector("#datanascimento"),
    cep: document.querySelector("#cep"),
    logradouro: document.querySelector("#logradouro"),
    numero: document.querySelector("#logradouro"),
    complemento: document.querySelector("#complemento"),
    bairro: document.querySelector("#bairro"),
    cidade: document.querySelector("#cidade"),
    estado: document.querySelector("#estado"),
    senha: document.querySelector("#senha"),
    
}

//FUNÇÃO CARREAGA INPUTS 
const carregaInput = (objEndereco)=>{
     const divEndereco = document.querySelector("#form-pessoa")
     divEndereco.classList.remove("oculto")
     for (let campo in objEndereco){
        campo [campo].value = objEndereco [campo]
        campo [campo].disabled = true
     }
}
