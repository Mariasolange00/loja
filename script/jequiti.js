
function trocar() {
    var texto = document.getElementById("title")
    
    if (texto.style.borderTopColor == "red" && texto.style.borderBottomColor == "red") {
        document.getElementById("title").style.borderTopColor = 'green'
document.getElementById("title").style.borderBottomColor = 'green'
    }else {
        document.getElementById("title").style.borderTopColor = 'red'
document.getElementById("title").style.borderBottomColor = 'red'
}

}


function abrirMenu() {
    document.getElementById("iconOpen").style.display = 'none'
document.getElementById("boxMenu").style.display = 'grid'
document.getElementById("boxMenu").style.marginLeft = '-3%'
document.getElementById("boxMenu").style.transition = 'margin-left 3s'
}

function menuClose() {
    document.getElementById("iconOpen").style.display = 'block'
document.getElementById("boxMenu").style.display = 'none'
}



setInterval(function () {
    trocar()
},500)

