
  document.addEventListener("DOMContentLoaded", function () {
      setTimeout(function () {
    document.getElementById("popupModal").style.display = "block";
     }, 30000);
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
/********Meenu lateral ******************** */
var sideMenu = document.getElementById('side-menu');
function openMenu() {
    sideMenu.classList.remove('hidden');
    sideMenu.classList.add('visible');
}

function closeMenu() {
    sideMenu.classList.remove('visible');
    sideMenu.classList.add('hidden');
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

 
