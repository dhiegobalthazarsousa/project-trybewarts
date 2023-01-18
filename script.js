const emailLogin = document.querySelector('#email-login');
const botaoLogin = document.querySelector('#login');
const senhaLogin = document.querySelector('#senha-login');
const botaoEnviar = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const textArea = document.querySelector('.comentario');
const characterCounter = document.querySelector('#counter');
const inputEmail = document.querySelector('#input-email');
const formData = document.querySelector('#form-data');
const fullForm = document.querySelector('#evaluation-form');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputCasa = document.querySelector('#house');

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

const materiaForm = () => {
  const arr = [];
  const inputMateria = document.querySelectorAll('input[type="checkbox"][name="materia"]:checked')
  for (let index = 0; index < inputMateria.length; index += 1) {
    arr.push(inputMateria[index].value)
  }
  return arr.join(', ');
}


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

function submitValues(event) {
  const inputFamilia = document.querySelector('input[name="family"]:checked').value;
  const inputAvaliacao = document.querySelector('input[type="radio"][name="rate"]:checked').value;
  const materias = materiaForm();
  const inputObservacao = document.querySelector('#textarea');
  event.preventDefault();
  formData.style.display = 'flex';
  formData.style.flexDirection = 'column';
  formData.innerHTML = `
  <p>Nome: ${inputName.value} ${inputLastName.value}</p>
  <p>Email: ${inputEmail.value}</p>
  <p>Casa: ${inputCasa.value}</p>
  <p>Família: ${inputFamilia}</p>
  <p>Matérias: ${materias}</p>
  <p>Avaliação: ${inputAvaliacao}</p>
  <p>Observações: ${inputObservacao.value}</p>`;
  fullForm.style.display = 'none';
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
