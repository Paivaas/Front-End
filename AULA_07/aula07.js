async function Endereco(){

    let cep = document.getElementById('cep').value
    

    if(cep.length != 8){
        console.log('Errooooooooooooooo')
        return
    }

    let url = 'https://viacep.com.br/ws/'+cep+'/json/'

    fetch(url).then(function(response){
        response.json().then(function(dados){
        })
    }) 

}

function mostrarEndereco(dados){

    
    const parte2 = document.createElement('div')
    parte2.replaceChildren(endereco)

    const endereco = document.createElement('p')
    endereco.textContent = dados.logradouro
    document.getElementById('endereco') = (dados.logradouro)
    
        con
    
}

// async function pegarImagens (){

//     const url = 'https://viacep.com.br/ws/01001000/json/' 

//     const response = await fetch(url)
//     const imagens = await response.json()

//    return imagens.message

// }
