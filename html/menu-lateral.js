var menu = document.getElementById('imenu')
var cabecalho = document.getElementById('icabecalho')
var botaoMenu = document.getElementById('icone-menu')
var botaoCabecalho = document.getElementById('icone-cabecalho')


function clickMenu() {

    if (cabecalho.style.display =='flex'){

        cabecalho.style.display = 'none'
        menu.style.display = 'block'
    } else {
        cabecalho.style.display = 'flex'
        menu.style.display = 'none'
    }
}

botaoMenu.addEventListener('click', clickMenu)
botaoCabecalho.addEventListener('click', clickMenu)