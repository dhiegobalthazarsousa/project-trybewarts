const emailLogin = document.querySelector('#email-login');
const botaoLogin = document.querySelector('#login');
const senhaLogin = document.querySelector('#senha-login');

const validarFormularioLogin = (event) => {
  event.preventDefault();
  const email = emailLogin.value;
  const senha = senhaLogin.value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const callListeners = () => {
  botaoLogin.addEventListener('click', validarFormularioLogin);
};

window.onload = () => {
  callListeners();
};
