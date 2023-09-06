
document.getElementById('btnLigar').addEventListener('click', function(){
    document.getElementById('Lampada').setAttribute('class','lampadaLigada')
   })
   
   document.getElementById('btnDesligar').addEventListener('click', function(){
    document.getElementById('Lampada').setAttribute('class','lampadaDesligada')
   })
   
   document.getElementById('Lampada').addEventListener('dblclick', function(){
    document.getElementById('Lampada').setAttribute('class','lampadaQuebrada')
   })
   
