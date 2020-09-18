Biblioteca para alertas mais elegantes
npm install --save sweetalert2

document.getElementById('mensagem-sucesso').onclick = function(){
    swal('Boa!', 'Deu tudo certo!', 'success')
};

document.getElementById('mensagem-erro').onclick = function(){
    swal('Oh no...', 'Algo deu errado!', 'error')
};


