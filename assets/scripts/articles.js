window.onload = () => {
    var template = document.getElementById("article-template");
    var article = document.getElementById("article")
    for(let i = 0; i < 5 ; i++){
        var clonado = template.cloneNode(true)
        clonado.removeAttribute("id")
        article.appendChild(clonado)
    }
}

