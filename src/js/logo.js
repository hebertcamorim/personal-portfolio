const tittle = document.title = "</> Personal Portfolio"

function showCustomTitle(){
    document.querySelector('.tag').innerText = '</>'
    document.querySelector('.custom-color').style.color = "rgb(0, 194, 204)";
    document.querySelector('.custom-color').style.fontWeight = "900";
}

showCustomTitle()