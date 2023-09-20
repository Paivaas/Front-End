
//Mostrar todos os números
const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
botaoMostrarTodosNumeros.addEventListener('click', MostrarTodosNumeros)

function MostrarTodosNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const conteiner = document.getElementById('conteiner-todos-numeros')

    conteiner.replaceChildren('')

    const ultimoIndice = numeros.length
    for (let indice=0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[indice]
        conteiner.appendChild(novoSpan)
    }
}

//Mostrar todos os números pares
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-todos-numeros-pares')
botaoMostrarNumerosPares.addEventListener('click', MostrarNumerosPares)

function MostrarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const conteiner = document.getElementById('conteiner-numeros-pares')

    conteiner.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            conteiner.appendChild(novoSpan)
        }
    }
}

//Mostrar todos os números impares

const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-todos-numeros-impares')
botaoMostrarNumerosImpares.addEventListener('click', MostrarNumerosImpares)

function MostrarNumerosImpares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const conteiner = document.getElementById('conteiner-numeros-impares')

    conteiner.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 2 != 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            conteiner.appendChild(novoSpan)
        }
    }
}

//Mostrar todos multipos de 3

const botaoMostrarNumerosMultiplos3 = document.getElementById('botao-mostrar-todos-numeros-multiplos3')
botaoMostrarNumerosMultiplos3.addEventListener('click', MostrarNumerosMultplos3)

function MostrarNumerosMultplos3(){
    const numeros = document.getElementById('numeros').value.split(',')
    const conteiner = document.getElementById('conteiner-numeros-multiplos3')

    conteiner.replaceChildren('')
    const ultimoIndice = numeros.length
    
    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 3 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            conteiner.appendChild(novoSpan)
        }
    }
}

//Mostrar todos multipos de 3 e 4

const botaoMostrarNumerosMultiplos3e4 = document.getElementById('botao-mostrar-todos-numeros-multiplos3e4')
botaoMostrarNumerosMultiplos3e4.addEventListener('click', MostrarNumerosMultplos3e4)

function MostrarNumerosMultplos3e4(){
    const numeros = document.getElementById('numeros').value.split(',')
    const conteiner = document.getElementById('conteiner-numeros-multiplos3e4')

    conteiner.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 3 == 0 && numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            conteiner.appendChild(novoSpan)
        }
    }
}

//Mostrar Proximo

const botaoMostrarNumerosProximo = document.getElementById('botao-mostrar-todos-numeros-proximo')
botaoMostrarNumerosProximo.addEventListener('click', MostrarNumerosProximo)

function MostrarNumerosProximo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const conteiner = document.getElementById('conteiner-numeros-proximo')

    conteiner.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) + 1
        conteiner.appendChild(novoSpan)
    }

}

//Mostrar Proximo par

const botaoMostrarNumerosProximoPar = document.getElementById('botao-mostrar-todos-numeros-proximo-par')
botaoMostrarNumerosProximoPar.addEventListener('click', MostrarNumerosProximoPar)

function MostrarNumerosProximoPar(){
    const numeros = document.getElementById('numeros').value.split(',')
    const conteiner = document.getElementById('conteiner-numeros-proximo-par')

    conteiner.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){

        if(numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 2
            conteiner.appendChild(novoSpan)
        }else if(numeros[indice] % 2 != 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 1
            conteiner.appendChild(novoSpan)
        }
    }

}

//Mostrar Dobro

const botaoMostrarNumerosDobro = document.getElementById('botao-mostrar-todos-numeros-dobro')
botaoMostrarNumerosDobro.addEventListener('click', MostrarNumerosDobro)

function MostrarNumerosDobro(){
    const numeros = document.getElementById('numeros').value.split(',')
    const conteiner = document.getElementById('conteiner-numeros-dobro')

    conteiner.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) * 2
        conteiner.appendChild(novoSpan)
    }

}

