
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
  //  var hora = data.getHours()
var hora = 10
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#e2cd96'
        img.src = 'src/img/manha.png'
        //Bom dia
    }
    else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#B9846F'
        img.src = 'src/img/tarde.png'
        //Boa tarde
    }
    else {
        img.src = 'src/img/noite.png'
        document.body.style.background = '#515154'
        //Boa noite
    }

}