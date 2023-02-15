
let img_batom = document.getElementById("img_batom")
let nome_cor_paleta = document.getElementById("nome_cor_paleta")


let color_batom = (cor) => {
    
    if(cor == 'vermelho_Encanto') {
        img_batom.setAttribute("src","https://www.avoncomigo.avon.com.br/wcsstore/AvonStoreCAS/imgs-catalog/fullimage/1473127.jpg")
        nome_cor_paleta.innerHTML = "vermelho encanto"
    }
    
    if(cor == 'canela') {
        img_batom.setAttribute("src","https://www.avoncomigo.avon.com.br/wcsstore/AvonStoreCAS/imgs-catalog/fullimage/1473112.jpg")
        nome_cor_paleta.innerHTML = "canela"
    }
    
    if(cor == 'malva_floral') {
        img_batom.setAttribute("src","https://www.avoncomigo.avon.com.br/wcsstore/AvonStoreCAS/imgs-catalog/fullimage/1473116.jpg")
        nome_cor_paleta.innerHTML = "malva floral"
    }
    
    if(cor == 'malva_oriente') {
        img_batom.setAttribute("src","https://www.avoncomigo.avon.com.br/wcsstore/AvonStoreCAS/imgs-catalog/fullimage/1473113.jpg")
        nome_cor_paleta.innerHTML = "malva_oriente"
    }
    
    if(cor == 'marron_puro') {
        img_batom.setAttribute("src","https://www.avon.com.br/assets/fit-in/720x720/center/middle/https%3A%2F%2Favongroup.vtexassets.com%2Farquivos%2Fids%2F177877%2F1473129.jpg%3Fv%3D637813981616170000")
        nome_cor_paleta.innerHTML = 'marron_puro'
    }
    
    if(cor == 'rosa_queimado') {
        img_batom.setAttribute("src","https://www.avon.com.br/assets/fit-in/720x720/center/middle/https%3A%2F%2Favongroup.vtexassets.com%2Farquivos%2Fids%2F176489%2F1398940.jpg%3Fv%3D637781931832800000")
        nome_cor_paleta.innerHTML = "rosa_queimado"
    }
    
    
}





let open_palette = () => {
    document.getElementById("batom_aviva").setAttribute("open","")
    document.querySelector("section").style.filter = "blur(5px)"
}


function fechar_paleta() {
    document.getElementById("batom_aviva").removeAttribute("open")
    document.querySelector("section").style.filter = "blur(0px)"
}




/* ffffffffffffffffffffff */

let img_lapis_olho2em1 = document.getElementById("lapis_olhos2em1")
let nome_cor_lapieParaOlhos2em1 = document.getElementById("nome_cor_lapieParaOlhos2em1")


function color_lapis_olho2em1(cor) {
    
    if(cor == 'marron_escuro') {
        img_lapis_olho2em1.src = "https://www.avoncomigo.avon.com.br/wcsstore/AvonStoreCAS/imgs-catalog/fullimage/1478364.jpg"
        nome_cor_lapieParaOlhos2em1.innerHTML = cor
    }
    
    if(cor == 'preto_intenso') {
        img_lapis_olho2em1.src = "https://www.avoncomigo.avon.com.br/wcsstore/AvonStoreCAS/imgs-catalog/fullimage/1478363.jpg"
        nome_cor_lapieParaOlhos2em1.innerHTML = cor
    }
    
    
}







function abrir_paleta_lapisOlhos() {
    document.getElementById("lapis_olho2em1").setAttribute("open","")
    document.querySelector("section").style.filter = "blur(5px)"
}


function fechar_paleta_lapis_olho2em1() {
    document.getElementById("lapis_olho2em1").removeAttribute("open")
    document.querySelector("section").style.filter = "blur(0px)"
}
