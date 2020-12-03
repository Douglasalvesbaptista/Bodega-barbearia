var a = window.document.getElementById('agendamento')

a.addEventListener('click', clicar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.style.backgroundColor = 'blue'    
}

function sair(){
    a.style.backgroundColor = 'rgba(0, 255, 0, 0.904)'
    
}
