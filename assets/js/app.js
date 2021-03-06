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
let pais = document.querySelector('#paises');
let agresor = document.querySelector('#agresor');
let ocurrio = document.querySelector('#ocurrio');
let otro_ocurrio = document.querySelector('#otro_ocurrio');
let cuando = document.querySelector('#cuando');
let narracion = document.querySelector('#narracion');

let camposValidos = true;

//VERIFICACION DE CAMPOS
const validar_s1 = () => {
  if (!otro_denuncia.parentElement.classList.contains('hidden')) {
    if (otro_denuncia.value == '') {
      otro_denuncia.parentElement.classList.add('error');
      camposValidos = false;
    } else {
      otro_denuncia.parentElement.classList.remove('error');
      camposValidos = true;
    }
  }
};

const validar_s2 = () => {
  if (nombre.value == '') {
    nombre.parentElement.classList.add('error');
    camposValidos = false;
  } else {
    nombre.parentElement.classList.remove('error');
    camposValidos = true;
  }
  if (celular.value == '') {
    celular.parentElement.classList.add('error');
    camposValidos = false;
  } else {
    celular.parentElement.classList.remove('error');
    camposValidos = true;
  }
  if (correo.value == '') {
    correo.parentElement.classList.add('error');
    camposValidos = false;
  } else {
    correo.parentElement.classList.remove('error');
    camposValidos = true;
  }
  if (contactar.value == '') {
    contactar.parentElement.classList.add('error');
    camposValidos = false;
  } else {
    contactar.parentElement.classList.remove('error');
    camposValidos = true;
  }
};

const validar_s3 = () => {
  if (agresor.value == '') {
    agresor.parentElement.classList.add('error');
    camposValidos = false;
  } else {
    agresor.parentElement.classList.remove('error');
    camposValidos = true;
  }
};

const validar_s4 = (e) => {
//  e.preventDefault();

  if (cuando.value == '') {
    cuando.parentElement.classList.add('error');
    camposValidos = false;
  } else {
    cuando.parentElement.classList.remove('error');
    camposValidos = true;
  }
  if (narracion.value == '') {
    narracion.parentElement.classList.add('error');
    camposValidos = false;
  } else {
    narracion.parentElement.classList.remove('error');
    camposValidos = true;
  }

  if (camposValidos) {
    
    let action = "save";
    let tipo = document.getElementById('tipo').value;
    let otro_denuncia = document.getElementById('otro_denuncia').value;
    let victima = document.getElementById('victima').value;
    let identificarse = document.getElementById('identificarse').value;
    let nombre = document.getElementById('nombre').value;
    let celular = document.getElementById('celular').value;
    let correo = document.getElementById('correo').value;
    let contactar = document.getElementById('contactar').value;
    let paises = document.getElementById('paises').value;
    let agresor = document.getElementById('agresor').value;
    let ocurrio = document.getElementById('ocurrio').value;
    let otro_ocurrio = document.getElementById('otro_ocurrio').value;
    let cuando = document.getElementById('cuando').value;
    let narracion = document.getElementById('narracion').value;

    var request = new XMLHttpRequest();
    request.open('POST', 'https://techo.org/denuncia/controller/controller.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send("action="+action+"&tipo="+tipo+"&otro_denuncia="+otro_denuncia+"&victima="+victima+"&identificarse="+identificarse+"&nombre="+nombre+"&celular="+celular+"&correo="+correo+"&contactar="+contactar+"&paises="+paises+"&agresor="+agresor+"&ocurrio="+ocurrio+"&otro_ocurrio="+otro_ocurrio+"&cuando="+cuando+"&narracion="+narracion);
    console.log(request);
    document.getElementById('btnModalClick').click();
  }
};

tipo.addEventListener('change', () => {
  if (tipo.value === 'Otro') {
    otro_denuncia.parentElement.classList.remove('hidden');
  } else {
    otro_denuncia.parentElement.classList.add('hidden');
    camposValidos = true;
  }
});

//pasar de step
form.addEventListener('click', function (e) {
  let element = e.target;
  let isButtonNext = element.classList.contains('form__step__button--next');
  let isButtonBack = element.classList.contains('form__step__button--back');

  if (isButtonBack || (isButtonNext && camposValidos)) {
    let currentStep = document.getElementById('step-' + element.dataset.step);
    //valida si quiere identificarse

    let jumpStep = document.getElementById('step-' + element.dataset.to_step);

    if (identificarse.value === 'No') {
      jumpStep = document.getElementById('step-3');
      if (currentStep.id === 'step-3') {
        jumpStep = document.getElementById('step-' + element.dataset.to_step);
        if (isButtonBack) {
          jumpStep = document.getElementById('step-1');
        }
      }
    }

    currentStep.addEventListener('animationend', function callback() {
      currentStep.classList.remove('active');
      jumpStep.classList.add('active');

      if (isButtonNext) {
        // currentStep.classList.add('to-left');
        progressOptions[element.dataset.to_step - 1].classList.add('active');
        if (identificarse.value === 'No' && currentStep.id !== 'step-3') {
          progressOptions[element.dataset.to_step].classList.add('active');
        }
      } else {
        // jumpStep.classList.remove('to-left');
        progressOptions[element.dataset.step - 1].classList.remove('active');
        if (identificarse.value === 'No' && currentStep.id !== 'step-4') {
          progressOptions[element.dataset.step].classList.remove('active');
        }
        if (identificarse.value === 'No' && currentStep.id === 'step-3') {
          progressOptions[element.dataset.step - 2].classList.remove('active');
        }
        camposValidos = true;
      }

      currentStep.removeEventListener('animationend', callback);
    });

    currentStep.classList.add('inactive');
    jumpStep.classList.remove('inactive');
  }
});

document.getElementById("cerrarWindow").addEventListener("click", windowClose);

function windowClose() {
  window.location.reload();
}