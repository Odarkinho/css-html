//dom

const bt01 = document.querySelector('#Cristiano')
const bt02 = document.querySelector('#Jude')
const bt03 = document.querySelector('#Neymar')

bt01.addEventListener('click', Cristiano)
bt02.addEventListener('click', Jude)
bt03.addEventListener('click', Neymar)

//funções

function Cristiano() {
    jog.src ='images/cris.png'
}

function Jude() {
    jog.src = 'images/jude.png'
}

function Neymar() {
    jog.src = 'images/ney.jpg'
}