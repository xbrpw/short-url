let botao = document.querySelector('.btn');

botao.addEventListener('click', mostrarSenha);

function mostrarSenha() {
  let input = document.querySelector('.ipass');
  
 if(input.getAttribute('type')=='password'){
    input.setAttribute('type' , 'text');
  } else {
    input.setAttribute('type' , 'password');
}
} 