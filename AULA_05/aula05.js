'use strict'

const Informacoes = [
    {
        nome: "Jerome Bueno",
        imagem: "Jerome.jpg",
        ultimaMensagem: "Posso realizar o pagamento por...",
        contato: "Julia",
        tempo: "ㅤOnline agora",
        lidas: "2",
        social: "facebook.png"
    },
    {
        nome: "Nathalia",
        imagem: "Nathalia.jpg",
        ultimaMensagem: "Adorei o atentimento, foi nota...",
        contato: "Márcia",
        tempo: "ㅤHá 2 minutos",
        lidas: "1",
        social: "whatsapp.png"
    },
    {
        nome: "Bruno Adorno",
        imagem: "Bruno.png",
        ultimaMensagem: "Bom dia, gostaria de saber quat...",
        contato: "geovana",
        tempo: "Há 48 minutos",
        lidas: "1",
        social: "instagram.png"
    },
    {
        nome: "Cristina",
        imagem: "Cristina.jpg",
        ultimaMensagem: "Bom dia!!!!!!!!!!",
        contato: "Carlos",
        tempo: "Há 23 minutos",
        lidas: "8",
        social: "instagram.png"
    },
    {
        nome: "Tory Lanez",
        imagem: "Tory.jpg",
        ultimaMensagem: "Veja a nova musica: ...",
        contato: "Paivaaa",
        tempo: "ㅤHá 1 minutos",
        lidas: "1",
        social: "whatsapp.png"
    },
    {
        nome: "Amanda Paz",
        imagem: "Amanda.jpg",
        ultimaMensagem: "Adorei o projeto!",
        contato: "Ana Paula",
        tempo: "Há 10 minutos",
        lidas: "1",
        social: "facebook.png"
    },
    {
        nome: "Livia Andrade",
        imagem: "Livia.png",
        ultimaMensagem: "O bolo ficou otimo.",
        contato: "Ana Paula",
        tempo: "Há 33 minutos",
        lidas: "4",
        social: "whatsapp.png"
    }
]


const criarItem = (Informacoes) => {

    const imagem = document.createElement('img')
    imagem.src = `./img/${Informacoes.imagem}`
    imagem.alt = Informacoes.name
    imagem.classList.add('foto-perfil')

    const social = document.createElement('img')
    social.src = `./img/${Informacoes.social}`
    social.alt = Informacoes.name
    social.classList.add('social')

    
    const nome = document.createElement('h1')
    nome.textContent = Informacoes.nome
    nome.classList.add('nome')

    const lidas = document.createElement('h2')
    lidas.textContent = Informacoes.lidas
    lidas.classList.add('mensagens-nao-lidas')

    const ultimaMensagem = document.createElement('p')
    ultimaMensagem.textContent = Informacoes.ultimaMensagem
    ultimaMensagem.classList.add('mensagem')

    const contato = document.createElement('div')
    contato.textContent = Informacoes.contato
    contato.classList.add('destinatario')

    const tempo = document.createElement('div')
    tempo.textContent = Informacoes.tempo
    tempo.classList.add('tempo')

    
        ///////////////////////////////////////////

        const subParte2 = document.createElement('div')
        subParte2.replaceChildren(nome, lidas)
        subParte2.classList.add('sub-parte2')

        const parte2 = document.createElement('div')
        parte2.replaceChildren(subParte2, ultimaMensagem, contato)
        parte2.classList.add('parte2')

        const parte1 = document.createElement('div')
        parte1.replaceChildren(imagem)
        parte1.classList.add('parte1')

        
        const parte3 = document.createElement('div')
        parte3.replaceChildren(tempo, social)

        const item = document.createElement('div')
        item.replaceChildren(parte1, parte2, parte3)
        item.classList.add('item')
        

     
    return item
}

const mostrarItem = (Informacoes) => {
    const itemConteiner = document.getElementById('item-conteiner')
    const item = criarItem(Informacoes)
   
    itemConteiner.appendChild(item)
}
Informacoes.forEach(mostrarItem)

/////////////////////////////////////////////

const btn = document.getElementById('btn')
btn.addEventListener('click', ligar) 

function ligar(){
    const telaCelular = document.getElementById('telaCelular')
    telaCelular.classList.toggle('ligado')
}