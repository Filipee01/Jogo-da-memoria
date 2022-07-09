const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login-form')

const validateInput = ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled')
        return // se colocar um return dps, ele já pula para o final da função
    }
    button.setAttribute('disabled', '')
}

const HandleSubmit = (event) => {
    event.preventDefault()
     localStorage.setItem('player', input.value)
     // salvar no localStorage e dps da pra recuperar
     window.location = 'pages/game.html'
     //redirect para outra pag
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', HandleSubmit)