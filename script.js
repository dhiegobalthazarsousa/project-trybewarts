const emailLogin = document.querySelector('#email-login');
const botaoLogin = document.querySelector('#login');
const senhaLogin = document.querySelector('#senha-login');
const botaoEnviar = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const textArea = document.querySelector('.comentario');
const characterCounter = document.querySelector('#counter');

const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const casa = document.querySelector('#casa');
const familia = document.querySelector('#familia');
const materias = document.querySelector('#materias');
const avaliacao = document.querySelector('#avaliacao');
const observacao = document.querySelector('#observacao');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputCasa = document.querySelector('#house');
const inputFamilia = document.querySelectorAll('input[name="family"]:checked');
const inputMateria = document.querySelectorAll('input[name="materia"]:checked');
const inputAvaliacao = document.querySelectorAll('input[name="rate"]:checked');
const inputObservacao = document.querySelector('#textarea');

const validateForm = (event) => {
  event.preventDefault();
  const emailValidate = emailLogin.value;
  const senha = senhaLogin.value;
  if (emailValidate === 'tryber@teste.com' && senha === '123456') {
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

const counterCharacterInTextArea = () => {
  characterCounter.innerText = 500 - textArea.value.length;
};

const submitValues = (event) => {
  event.preventDefault();
  const evaluationForm = documento.querySelector('#evaluation-form');
  evaluationForm.innerHtml = '';
  nome.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  email.innerText = `Email: ${inputEmail.value}`;
  casa.innerText = `Casa: ${inputCasa.value}`;
  familia.innerText = `Família: ${inputFamilia.value}`;
  let stringMaterias = '';
  for (let index = 0; index < inputMateria.length; index += 1) {
    stringMaterias += inputMateria[index].value;
  }
  materias.innerText = `Matérias: ${stringMaterias}`;
  avaliacao.innerText = `Avaliação: ${inputAvaliacao.value}`;
  observacao.innerText = `Observações: -${inputObservacao.value}-`;
};

const callListeners = () => {
  botaoLogin.addEventListener('click', validateForm);
  checkbox.addEventListener('click', isEmpty);
  textArea.addEventListener('input', counterCharacterInTextArea);
  botaoEnviar.addEventListener('click', submitValues);
};

window.onload = () => {
  callListeners();
  buttonOff();
};
