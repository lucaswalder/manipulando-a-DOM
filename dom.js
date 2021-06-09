// DOM (Document Object Model)
const element = document.getElementById('blog-title')
element.innerText = "Olá Devs"

const header = document.querySelector('header')
header.setAttribute('id', 'header')

// setAttribute - adiciona
// getAttribute - pega o atriburo
// removeAttribute //remove


// alterando estilos via js
const bodyElement = document.querySelector('body')
bodyElement.style.backgroundColor = "black"
bodyElement.style.color = "white"

// adicionando e removendo classes
bodyElement.classList.add('green') //adiciona uma classe
bodyElement.classList.remove('green') //remove uma classe
bodyElement.classList.toggle('green') //remove ou adiciona uma classe 


//navegando pelos elementos
//parentNode parentElement
bodyElement.parentElement
bodyElement.parentNode

//children
bodyElement.children
bodyElement.lastElementChild
bodyElement.firstElementChild

//next e previousElementSibling
bodyElement.nextElementSibling
bodyElement.previousElementSibling

//criando e adicionando elementos
const div = document.createElement('div')
div.innerText = "Olá devs, tudo bem?"

//append e prepend
// bodyElement.append(div)

//insertBfore
const script = bodyElement.querySelector('script')
bodyElement.insertBefore(div, script)
// bodyElement.insertBefore(div, script.nextElementSibling) truque para adicionar o elemento depois do elemento selecionado

//Eventos
//teclado
const input = document.querySelector('input')
input.onkeydown = function() {
    console.log('rodei')
}

//eventos de click com addEventListener
const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

function print() {
    console.log('print')
}

//argumento event
input.onkeypress = function(event) {
    console.log(event)
}