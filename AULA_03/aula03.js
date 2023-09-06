'use strict'

//Somar
const botaoSomar = document.getElementById('somar')

botaoSomar.addEventListener('click', somar)

function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById("resultado")
    const total = numero1 + numero2

    resultado.textContent = total
}


//Subtrção
const botaoSubtrair = document.getElementById('subtrair')
botaoSubtrair.addEventListener('click', subtrair)

function subtrair(){
    const numero1 = Number(document.getElementById('SUBnumero1').value)
    const numero2 = Number(document.getElementById('SUBnumero2').value)
    const resultado = document.getElementById("SUBresultado")
    const total = numero1 - numero2

    resultado.textContent = total
}


//Multiplicação
const botaoMultiplicar = document.getElementById('multiplicar')
botaoMultiplicar.addEventListener('click', multiplicar)

function multiplicar(){
    const numero1 = Number(document.getElementById('MULnumero1').value)
    const numero2 = Number(document.getElementById('MULnumero2').value)
    const resultado = document.getElementById("MULresultado")
    const total = numero1 * numero2

    resultado.textContent = total
}

//Divisão
const botaoDividir = document.getElementById('dividir')
botaoDividir.addEventListener('click', dividir)

function dividir(){
    const numero1 = Number(document.getElementById('DIVnumero1').value)
    const numero2 = Number(document.getElementById('DIVnumero2').value)
    const resultado = document.getElementById("DIVresultado")
    const total = numero1 / numero2

    resultado.textContent = total.toFixed(2)
}


//IDENTIFICAR
const botaoIdentificar = document.getElementById('identificar')
botaoIdentificar.addEventListener('click', identificar)

function identificar(){
    const numero = document.getElementById('numero-item2').value
    const resultado = document.getElementById("resultado-item2")
    let msg

    if(numero > 0){
         msg = 'Positivo'
    }else if (numero < 0){
         msg = 'Negativo'
    }else{
         msg = 'Zero' 
    }

    resultado.textContent = msg
}

//MEDIA
const botaoMedia = document.getElementById('media')
botaoMedia.addEventListener('click', media)

function media(){
    
let n1 = Number(document.getElementById('NOTA1').value)
let n2 = Number(document.getElementById('NOTA2').value)
let n3 = Number(document.getElementById('NOTA3').value)
let n4 = Number(document.getElementById('NOTA4').value)

    let total = (n1+n2+n3+n4)/4

    const resultado = document.getElementById("Medresultado")
    resultado.textContent = total

    let msg    

    if(total >= 7 ){
        msg = 'Aprovado'
    }else{
        msg = 'Reprovado'
        
        const aparecer = document.getElementById("notaAdd")
        aparecer.classList.add("aparecer")

        const botaoNovaMedia = document.getElementById('mediaAdd')
        botaoNovaMedia.addEventListener('click', mediaAdd)

        function mediaAdd(){
            let n5 = Number(document.getElementById('NOTAdd').value)
            const Novoresultado = document.getElementById("MedresultadoAdd")
            const NovaMedia = (total+n5)/2

            Novoresultado.textContent = NovaMedia.toFixed(1)

            let msg 

            if(NovaMedia >= 7 ){
                msg = 'Aprovado'
            }else{
                msg = 'Reprovado'
            }

        const Novasituacao = document.getElementById("SituacaoAdd")
        Novasituacao.textContent = msg

        }
        
    }
    const situacao = document.getElementById("Situacao")
    situacao.textContent = msg
}



//SOMAR100
const botaoSomar100 = document.getElementById('SOMA100')

botaoSomar100.addEventListener('click', SOMA100)

function SOMA100(){
    const numero1 = Number(document.getElementById('numero1SOMA100').value)
    const numero2 = Number(document.getElementById('numero2SOMA100').value)
    const numero3 = Number(document.getElementById('numero3SOMA100').value)
    const resultado = document.getElementById("resultadoSOMA100")
    
    let smg = 'O valor total não é maior que 100'
    const total = numero1 + numero2 + numero3
    if(total > 100){
        resultado.textContent = total
    }else{
        resultado.textContent = smg
    }

}


//1a9
const botaoteste = document.getElementById('botao1a9')
botaoteste.addEventListener('click', botao1a9)

function botao1a9(){
    const numero = document.getElementById('numero1a9').value
    const resultado = document.getElementById("resultado1a9")
    let msg

    if(numero >= 1 && numero <= 9){
         msg = 'O valor está na faixa permitida'
    }else{
         msg = 'O valor não está na faixa permitida'
    }

    resultado.textContent = msg
    
}

//por30
const botaopor30 = document.getElementById('botaoPor30')
botaopor30.addEventListener('click', botaoPor30)

function botaoPor30(){
    const numero = document.getElementById('numeroPor30').value
    const resultado = document.getElementById("resultadoPor30")
    const total = numero * 2
    let msg

    if(total > 30){
         msg = 'Resultado: ' + total + " é > 30"
    }else{
         msg = 'O resutado não é > 30'
    }

    resultado.textContent = msg
    
}

//Bhaskara
const botao = document.getElementById('btn-ResultadoBHAS')
botao.addEventListener('click', bhaskara)

function bhaskara(){

 const a = Number(document.getElementById('numero1BHAS').value)
 const b = Number(document.getElementById('numero2BHAS').value)
 const c = Number(document.getElementById('numero3BHAS').value)
 const resultado = document.getElementById("resultadoBHAS")
 const resultado2 = document.getElementById("resultado2BHAS")
 let msg
 let msg2


 const delta = (b*b)-(4*a*c)

 if(delta < 0)
 msg = "Os valores inseridos náo possuem raizes reais"
 else if(a == 0)
 msg = "O valor de A deve ser diferente de 0"
 else{
 const x = (-b - Math.sqrt(delta)) / (2 * a)
 const y = (+b - Math.sqrt(delta)) / (2 * a)
 msg = x
 msg2 = y
 }
 resultado.textContent = msg
 resultado2.textContent = msg2
}

