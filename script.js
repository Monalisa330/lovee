const nombrePersona = document.querySelector('#nombre-persona');

// Solicitar nombre al cargar la página
window.onload = function() {
  Swal.fire({
    title: '¡Hola!',
    text: '¿Cuál es tu nombre?',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: false,
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: true,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor ingresa tu nombre';
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      nombrePersona.textContent = `¡Te quiero, ${result.value}!`;
    }
  });
};

const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');
let fontSize = 2;

buttonNo.addEventListener('click', () => {
  const messages = [
    '¿Segur@? Piénsalo bien.',
    'Piénsalo muy bien.',
    '¿Estás segur@?',
    'Quizás deberías reconsiderarlo.',
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  buttonNo.textContent = messages[randomIndex];

  // Aumentar el tamaño del botón "Sí" al hacer clic en "No"
  fontSize = fontSize + 0.5;
  buttonYes.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);
  buttonNo.textContent = messages[indexRandom];
});

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex';
});
