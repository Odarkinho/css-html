//dom

const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//evento

btn.addEventListener('click',()=>{

    n1=Number (peso.value)
    n2=Number (altura.value)
   

    media = n1 /(n2 * n2)

    
        if (media < 18.5) {
           situacao = 'MAGREZA'
        } else if( media <= 25 ){
            situacao =  'PESO NORMAL'
        } else if ( media <= 30) {
            situacao = 'ACIMA DO PESO'
        } else {
            situacao = 'OBESIDADE'
        }

    resultado.textContent = `${media.toFixed(2)} ${situacao}`

})