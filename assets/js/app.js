let form = document.querySelector('.form');
let progressOptions = document.querySelectorAll(
  '.form__header__progressbar__option'
);
//Campos
let tipo = document.querySelector('#tipo');
let otro_denuncia = document.querySelector('#otro_denuncia');
let victima = document.querySelector('#victima');
let identificarse = document.querySelector('#identificarse');
let nombre = document.querySelector('#nombre');
let celular = document.querySelector('#celular');
let correo = document.querySelector('#correo');
let contactar = document.querySelector('#contactar');
let paises = document.querySelector('#paises');
let agresor = document.querySelector('#agresor');
let ocurrio = document.querySelector('#ocurrio');
let otro_ocurrio = document.querySelector('#otro_ocurrio');
let cuando = document.querySelector('#cuando');
let narracion = document.querySelector('#narracion');

//verficacion de campos
const validar_s1 = () => {
  if (!otro_denuncia.parentElement.classList.contains('hidden')) {
    if (otro_denuncia.value == '') {
      otro_denuncia.classList.add('error');
    } else {
      victima.classList.remove('error');
    }
  }
};

tipo.addEventListener('change', () => {
  if (tipo.value === 'Otro') {
    otro_denuncia.parentElement.classList.remove('hidden');
  } else {
    otro_denuncia.parentElement.classList.add('hidden');
  }
});

//pasar de step
form.addEventListener('click', function (e) {
  let element = e.target;
  let isButtonNext = element.classList.contains('form__step__button--next');
  let isButtonBack = element.classList.contains('form__step__button--back');

  if (isButtonNext || isButtonBack) {
    //validar si quiere identificarse
    
    let currentStep = document.getElementById('step-' + element.dataset.step);
    let jumpStep = identificarse.value==='Si' ? document.getElementById('step-' + element.dataset.to_step) : document.getElementById('step-3');

    currentStep.addEventListener('animationend', function callback() {
      currentStep.classList.remove('active');
      jumpStep.classList.add('active');

      if (isButtonNext) {
        currentStep.classList.add('to-left'); 
        progressOptions[element.dataset.to_step - 1].classList.add('active');
        identificarse.value==='No' && progressOptions[element.dataset.to_step].classList.add('active');
      } else {
        jumpStep.classList.remove('to-left');
        progressOptions[element.dataset.step - 1].classList.remove('active');
      }

      currentStep.removeEventListener('animationend', callback);
    });

    currentStep.classList.add('inactive');
    jumpStep.classList.remove('inactive');
  }
});
