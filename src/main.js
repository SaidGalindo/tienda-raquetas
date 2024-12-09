import './style.css'

document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel', // Puede ser 'carousel', 'slider' o 'coverflow'
    startAt: 0,       // Slide inicial
    perView: 1,       // Cuántos slides mostrar a la vez

    autoplay: 7000,   // Cambiar automáticamente cada 3 segundos
  }).mount();
});


document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide_productos', {

    type: 'slider', // Puede ser 'carousel', 'slider' o 'coverflow'
    startAt: 0,       // Slide inicial
    perView: 2.5,       // Cuántos slides mostrar a la vez
    breakpoints: {
      480: {
        perView: 1
      },
      768: {
        perView: 1.2
      },
      1024: {
        perView: 1.6
      },
      1440: {
        perView: 3
      }
    },
    autoplay: 5000,   // Cambiar automáticamente cada 3 segundos
  }).mount();
});

const boton = document.getElementById('btnOpenSideBar');
const closeBtn = document.getElementById('closebtn');

// 2. Definir la función que se ejecutará al hacer clic
function manejarClick() {
  console.log('¡Hola! Hiciste clic en el botón.');
  const sideBar = document.getElementById('mySidenav');
  if (sideBar != undefined)
    sideBar.style.width = "80%";
  console.log('si');
}

function esconderSideBar(){
  const sideBar = document.getElementById('mySidenav');
        if (sideBar != undefined)
            sideBar.style.width = "0";
}

boton.addEventListener('click', manejarClick);
closeBtn.addEventListener('click', esconderSideBar);



