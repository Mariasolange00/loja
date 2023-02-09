

function trocar() {
    var text = document.getElementById("subTitle2")
    var linha = document.getElementById("linha11")
    var linha2 = document.getElementById("linha12")
    
    if (text.style.color == "red" && linha.style.borderBottomColor == "red" && linha12.style.borderBottomColor == "red") {
        text.style.color = 'green'
linha.style.borderBottomColor = 'green'
linha12.style.borderBottomColor = 'green'
    }else {
        text.style.color = 'red'
linha.style.borderBottomColor = 'red'
linha12.style.borderBottomColor = 'red'
    }
}

function abrirMenu() {
    document.getElementById("iconOpen").style.display = 'none'
document.getElementById("boxMenu").style.display = 'grid'
}

function menuClose() {
    document.getElementById("iconOpen").style.display = 'block'
document.getElementById("boxMenu").style.display = 'none'
}


setInterval(function () {
    trocar()
},300)

