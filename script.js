const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const alerta = document.getElementById('alerta');
const idade = document.getElementById('idade');

function validaNome(event){
    event.preventDefault();
    alerta.textContent = '';

    if (nome.value === ''){
        alerta.textContent = 'Por favor preencha o nome';
        alerta.style.color = 'red';
        nome.style.border = '1px solid red';
        return
    } else {
        nome.style.border ='1px solid green';
    }

    if( idade.value === ''){
        alerta.textContent = 'Por favor preencha sua idade';
        idade.style.border = '1px solid red';
        alerta.style.color = 'red';
        return
    } else if( idade.value < 18){
        alerta.textContent = ' Sai daqui mermao';
        alerta.style.color = 'red';
        idade.style.border = '1px solid red';
    }else if (idade.value > 18){
        alerta.textContent = 'Pode ficar';
        alerta.style.color = 'green';
        idade.style.border = '1px solid green';

    }
}

formulario.addEventListener('submit', validaNome);