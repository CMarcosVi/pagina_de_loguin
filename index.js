const form = document.querySelector('form');
const nomeInput = document.getElementById('nome');
const senhaInput = document.getElementById('senha');
const emailInput = document.getElementById('email');
function confirmacao(){
  const regexNome = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  form.addEventListener('submit', (event) => {
  
    if (!regexNome.test(nomeInput.value)) {
      alert('Por favor, insira um nome válido.');
      return;
    }
  
    if (!regexSenha.test(senhaInput.value)) {
      alert('Por favor, insira uma senha válida com pelo menos 8 caracteres, incluindo pelo menos uma letra minúscula, uma letra maiúscula, um número e um caractere especial.');
      return;
    }
  
    if (!regexEmail.test(emailInput.value)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
  
    form.submit();
  });
}
confirmacao();

function passwordTamanho(event) {
  const barra = document.getElementById('tamanhoSenha');
  
  if (barra) {
    var tamanho = event.target.value.length;

    if (tamanho < 5) {
      barra.classList.add('fraca');
      barra.classList.remove('boa', 'excelente');
    } else if (tamanho >= 5 && tamanho < 10) {
      barra.classList.add('boa');
      barra.classList.remove('fraca', 'excelente');
    } else if (tamanho >= 10) {
      barra.classList.add('excelente');
      barra.classList.remove('fraca', 'boa');
    }
  }
}