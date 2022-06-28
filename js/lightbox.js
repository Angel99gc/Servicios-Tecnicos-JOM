const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const topBar = document.querySelector('.nav')

imagenes.forEach( imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))
        // alert('auch, me dolio')
    })
})

contenedorLight.addEventListener('click', (e) => {
  if (e.target !== imagenesLight){
      contenedorLight.classList.toggle('show')
      imagenesLight.classList.toggle('showImage')
      topBar.style.opacity = '1';
  }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    topBar.style.opacity = '0';
}