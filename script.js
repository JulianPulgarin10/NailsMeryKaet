//MENU DE ARRIBA 
window.onscroll = function() {
  var banner = document.querySelector('.fixed-banner');
  if (window.scrollY > 50) { // Cambia el valor de 50 según la distancia del desplazamiento
    banner.style.backgroundColor = '#f0e1ff'; // Color morado clarito cuando se desliza
  } else {
    banner.style.backgroundColor = '#fff'; // Color blanco cuando no se ha deslizado
  }
};











//HEADER 
function openModal() {
  document.getElementById("myModal").style.display = "flex"; // Mostrar el modal con flexbox para centrarlo
}

function closeModal() {
  document.getElementById("myModal").style.display = "none"; // Cerrar el modal
}

// Cierra el modal si el usuario hace clic fuera del modal
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
}












//SOBRE NOSOTROSSSS
function redirectToBooking() {
  // Redirige a la página de agendar cita
  window.location.href = "angendaCita.html";
}


//MODAL DE SOBRE NOSOTROS
function openModal() {
  document.getElementById("modalImagen").style.display = "flex";
}

function closeModal() {
  document.getElementById("modalImagen").style.display = "none";
}

// Detectar clic fuera del contenido del modal
window.addEventListener("click", function (event) {
  const modal = document.getElementById("modalImagen");
  if (event.target === modal) {
    closeModal();
  }
});













//CLIENTES SASTIFECHOS 

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("testimonial");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Cambiar cada 3 segundos
}

showSlides(); // Iniciar el carrusel automáticamente










//NUESTROS SERVICIOS 
// Obtener los elementos del modal y las tarjetas
const cards = document.querySelectorAll('.card');
const modal = document.createElement('div');
modal.classList.add('modal');

// Crear el contenido del modal
const modalContent = document.createElement('img');
modalContent.classList.add('modal-content');

// Crear el botón de cerrar
const closeButton = document.createElement('span');
closeButton.classList.add('close');
closeButton.innerHTML = '&times;'; // Representa la "X"

// Añadir el contenido y el botón de cerrar al modal
modal.appendChild(modalContent);
modal.appendChild(closeButton);
document.body.appendChild(modal);

// Función para abrir el modal con la imagen
cards.forEach(card => {
  card.addEventListener('click', () => {
    const backgroundImage = card.style.backgroundImage;
    modalContent.src = backgroundImage.replace('url("', '').replace('")', ''); // Extraer URL de la imagen
    modal.style.display = 'flex';
    modal.classList.add('fade-in');
  });
});

// Función para cerrar el modal cuando se haga clic en la "X"
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.classList.remove('fade-in');
});

// Cerrar el modal si se hace clic fuera de la imagen
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modal.classList.remove('fade-in');
  }
});



//VER MAS DE NUESTROS SERVICIOS 
// Obtener el botón y las tarjetas ocultas
const verMasBtn = document.getElementById('verMasBtn');
const moreCards = document.querySelectorAll('.more-cards');

// Agregar evento al botón para mostrar las tarjetas adicionales
verMasBtn.addEventListener('click', () => {
  moreCards.forEach(card => {
    card.style.display = 'block'; // Muestra las tarjetas adicionales
  });
  verMasBtn.style.display = 'none'; // Oculta el botón después de hacer clic
});























//MENU DESPLEGABLE 

// Seleccionamos el ícono de menú y el submenú
const menuToggle = document.querySelector('.menu-toggle');
const submenu = document.querySelector('.submenu');

// Agregamos un evento de clic al ícono del menú
menuToggle.addEventListener('click', function(e) {
  e.preventDefault(); // Prevenimos que el enlace realice su acción por defecto
  
  // Alternamos la visibilidad del submenú
  submenu.classList.toggle('show');
});







