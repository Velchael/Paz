
   document.addEventListener("DOMContentLoaded", function () {
    const userConfirmed = localStorage.getItem('userConfirmed') === 'true';
    if (!userConfirmed) {
      setTimeout(function () {
    document.getElementById("popupModal").style.display = "block";
     }, 10000);
    } else {
       // Si el usuario está confirmado, oculta el popupModal
       document.getElementById("popupModal").style.display = "none";
    }
    document.getElementById("loginButton").addEventListener("click", function () {
            // Reemplaza "/inicio-sesion.html" con la URL de tu página de inicio de sesión
            window.location.href = "./inicio-sesion.html";
        });
         // Agrega un evento al botón de cierre para cerrar el popupModal
    document.getElementById("closeButton").addEventListener("click", function () {
      var popupModal = document.getElementById("popupModal");
    popupModal.style.display = "none";
  });
    });
// Agrega esto al código JavaScript  logoutButton
document.getElementById("logoutButton").addEventListener("click", function () {
  // Cambia el estado de userConfirmed a false
  //usertarefaElement.textContent = '';
  localStorage.setItem('userConfirmed', false);
// Borra el nombre de usuario del LocalStorage
  localStorage.removeItem('userName');
 // Limpia el contenido del span
  var usertarefaElement = document.getElementById('usertarefa');
  if (usertarefaElement) {
    usertarefaElement.textContent = '';
  }
   //Muestra el popupModal
 document.getElementById("popupModal").style.display = "block";

});

/********Meenu lateral ******************** */
var sideMenu = document.getElementById('side-menu');
function openMenu() {
    sideMenu.classList.remove('hidden');
    sideMenu.classList.add('visible');
    document.getElementById("side-menu").classList.remove("hidden");
    document.getElementById("open-menu-button").textContent = ""; // Elimina el contenido del botón
}

function closeMenu() {
    sideMenu.classList.remove('visible');
    sideMenu.classList.add('hidden');
    document.getElementById("side-menu").classList.add("hidden");
    document.getElementById("open-menu-button").textContent = "☰"; // Restaura el contenido del botón
}
/**********Carrusel automatico */
const carrusel = document.querySelector(".carrusel-items");
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft >= maxScrollLeft) {
        step = -1;
      } else if (carrusel.scrollLeft <= 0) {
        step = 1;
      }
  }, 50);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});
start();

// Selecciona todos los elementos .carrusel-item
const carruselItems = document.querySelectorAll('.carrusel-item');

// Recorre cada elemento y agrega eventos de ratón
carruselItems.forEach(item => {
  const saibaMaisBtn = item.querySelector('.saiba-mais-btn');
  
  // Muestra el botón al pasar el ratón sobre la imagen
  item.addEventListener('mouseenter', () => {
    saibaMaisBtn.style.display = 'block';
  });
  
  // Oculta el botón al salir el ratón de la imagen
  item.addEventListener('mouseleave', () => {
    saibaMaisBtn.style.display = 'none';
  });
});
// Muestra la pantalla emergente al hacer clic en el botón "Saiba Mais1"
document.addEventListener("DOMContentLoaded", function () {
  // Obtener elementos
  const saibaMaisBtn = document.querySelectorAll(".saiba-mais-btn");
  const popupModal2 = document.getElementById("popupModal2");
  const closePopupBtn = document.getElementById("closePopupBtn");

  // Agregar evento de clic a cada botón "Saiba Mais"
  saibaMaisBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      popupModal2.style.display = "block"; // Mostrar pantalla emergente
    });
  });

  // Agregar evento de clic al botón "Cerrar"
  closePopupBtn.addEventListener("click", function () {
    popupModal2.style.display = "none"; // Ocultar pantalla emergente
  });
});
// Muestra la pantalla emergente al hacer clic en el botón "Saiba Mais2"
document.addEventListener("DOMContentLoaded", function () {
  // Obtener elementos
  const saibaMaisBtn2 = document.querySelectorAll(".saiba-mais-btn2");
  const popupModal3 = document.getElementById("popupModal3");
  const closePopupBtn2 = document.getElementById("closePopupBtn2");
  // Agregar evento de clic a cada botón "Saiba Mais"
  saibaMaisBtn2.forEach(function (btn) {
    btn.addEventListener("click", function () {
      popupModal3.style.display = "block"; // Mostrar pantalla emergente
    });
  });
  // Agregar evento de clic al botón "Cerrar"
  closePopupBtn2.addEventListener("click", function () {
    popupModal3.style.display = "none"; // Ocultar pantalla emergente
  });
});
// Muestra la pantalla emergente al hacer clic en el botón "Saiba Mais3"
document.addEventListener("DOMContentLoaded", function () {
  // Obtener elementos
  const saibaMaisBtn3 = document.querySelectorAll(".saiba-mais-btn3");
  const popupModal4 = document.getElementById("popupModal4");
  const closePopupBtn3 = document.getElementById("closePopupBtn3");
  // Agregar evento de clic a cada botón "Saiba Mais"
  saibaMaisBtn3.forEach(function (btn) {
    btn.addEventListener("click", function () {
      popupModal4.style.display = "block"; // Mostrar pantalla emergente
    });
  });
  // Agregar evento de clic al botón "Cerrar"
  closePopupBtn3.addEventListener("click", function () {
    popupModal4.style.display = "none"; // Ocultar pantalla emergente
  });
});
// Muestra la pantalla emergente al hacer clic en el botón "Saiba Mais4"
document.addEventListener("DOMContentLoaded", function () {
  // Obtener elementos
  const saibamaisbtn4 = document.querySelectorAll(".saiba-mais-btn4");
  const popupModal5 = document.getElementById("popupModal5");
  const closePopupBtn4 = document.getElementById("closePopupBtn4");
  // Agregar evento de clic a cada botón "Saiba Mais"
  saibamaisbtn4.forEach(function (btn) {
    btn.addEventListener("click", function () {
      popupModal5.style.display = "block"; // Mostrar pantalla emergente
    });
  });
  // Agregar evento de clic al botón "Cerrar"
  closePopupBtn4.addEventListener("click", function () {
    popupModal5.style.display = "none"; // Ocultar pantalla emergente
  });
});

////////////////////////// El navegador
window.addEventListener('DOMContentLoaded', function() {
  var fidelidadeLink = document.querySelector('a[href="#fidelidade"]');
  var fidelidadeElement = document.querySelector('#fidelidade');
  fidelidadeLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
  if (fidelidadeElement) {
  fidelidadeElement.scrollIntoView();
  }
  });
  });

  window.addEventListener('DOMContentLoaded', function() {
    var redencaoLink = document.querySelector('a[href="#redencao"]');
    var redencaoElement = document.querySelector('#redencao');
    redencaoLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    
    if (redencaoElement) {
    redencaoElement.scrollIntoView();
    }
    });
    });

    window.addEventListener('DOMContentLoaded', function() {
      var conquistaLink = document.querySelector('a[href="#conquista"]');
      var conquistaElement = document.querySelector('#conquista');
      conquistaLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      
      if (conquistaElement) {
      conquistaElement.scrollIntoView();
      }
      });
      });

      function goHome() {
        const headerElement = document.querySelector('.headerdos');
        if (headerElement) {
            headerElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function goHomedos() {
      const headerElement = document.querySelector('.headerdos');
      if (headerElement) {
          headerElement.scrollIntoView({ behavior: 'smooth' });
      }
  }

 
