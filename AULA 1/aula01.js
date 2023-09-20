'use strict'

//alert('Olá Mundo!')

// Formas de declarar variavel:
// 3- var   -> mutavel  - Escopo global
// 2- let   -> Mutavel  - Escopo Bloco
// 1- const -> Imutavel - Escopo Bloco

function trocarTitulo (){
    const tituloPagina = document.getElementById('titulo')
    let tituloDigitado = prompt('Digite um titulo')

    if (tituloDigitado == ''){
        tituloDigitado = 'Nenhum titulo foi inserido'
    }
    tituloPagina.textContent = tituloDigitado
}

const botaoTitulo = document.getElementById('trocarTitulo')
botaoTitulo.addEventListener('click',trocarTitulo)

// document.getElementById('titulo') -> Declarar variavel
// prompt -> Caixa de texto na tela


function cadastrar (){
    const CadastroNome = document.getElementById('Nome')
    const DigitadoN = prompt('Digite o nome')
    CadastroNome.textContent = DigitadoN


    const CadastroIdade = document.getElementById('Idade')
    const DigitadoI = prompt('Digite a idade: ')
    CadastroIdade.textContent = DigitadoI


    const CadastroCidade = document.getElementById('Cidade')
    const DigitadoC = prompt('Digite a cidade:')
    CadastroCidade.textContent = DigitadoC

    const CadastroMedia = document.getElementById('Media')
    const DigitadoM = prompt('Digite sua média')
    CadastroMedia.textContent = DigitadoM

    if(DigitadoM >= 5){
        CadastroMedia.className = ''
        CadastroMedia.classList.add('blue')
    }else if(DigitadoM < 5){
        CadastroMedia.className = ''
        CadastroMedia.classList.add('red')
    }

}
const botaoCadastrar = document.getElementById('cadastrar')
botaoCadastrar.addEventListener('click',cadastrar)