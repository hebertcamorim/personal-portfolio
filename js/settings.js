//Title name
const tittle = document.title = "</> Personal Portfolio.io"

//Custom Header Title
function showCustomTitle(){
    document.querySelector('.tag').innerText = '</>'
    document.querySelector('.text').innerHTML = 'Personal Portfolio'
    document.querySelector('.io').innerHTML = '.io'
}
showCustomTitle()

//Show Custom user name
function showUser() {
    let userName = 'Hebert'
    let showUser = document.querySelector('.user')
    showUser.innerHTML = `${userName}`    
    showUser.style.color = 'var(--custom-color)'
}
showUser()