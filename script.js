const emailLogin = document.querySelector('#email-login');
const botaoLogin = document.querySelector('#login');
const senhaLogin = document.querySelector('#senha-login');
const botaoEnviar = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

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

const buttonOn = () => {
  botaoEnviar.disabled = false;
};

const buttonOff = () => {
  botaoEnviar.disabled = true;
};

const isEmpty = () => {
  if (checkbox.checked) {
    buttonOn();
  } else {
    buttonOff();
  }
};

const callListeners = () => {
  botaoLogin.addEventListener('click', validarFormularioLogin);
  checkbox.addEventListener('click', isEmpty);
};

window.onload = () => {
  callListeners();
  buttonOff();
  isEmpty();
};
