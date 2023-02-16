'use strict'

/* Quando apertar em calcular deverá aparecer a situaçao do aluno*/

const calcular = document.getElementById('calcular')

function media() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const formulario = document.getElementById('formulario')

    const situacao = (Number(nota1) + Number(nota2))/2
    
    document.getElementById('situacao').value = situacao
    

    const resultadoAprovado = 'Aluno Aprovado'
    const resultadoReprovado = 'Aluno Reprovado'

    if(situacao >= 5){
        document.getElementById('situacao').value = resultadoAprovado
        formulario.classList.remove('sombraVermelha')
        formulario.classList.add('sombraVerde')

    }else {
        document.getElementById('situacao').value = resultadoReprovado
        formulario.classList.add('sombraVermelha')
        formulario.classList.remove('sombraVerde')

        
    }
}

calcular.addEventListener('click', media)