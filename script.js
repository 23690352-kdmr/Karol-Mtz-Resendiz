function cambiarImagen(ruta) {
  document.getElementById("imagen-principal").src = ruta;
}

function mostrarDescripcion() {
  document.getElementById("descripcion").style.display = "block";
}

function ocultarDescripcion() {
  document.getElementById("descripcion").style.display = "none";
}

function resaltarPrecio() {
  const precio = document.getElementById("precio");
  precio.style.color = "#e91e63";
  precio.style.fontSize = "36px";
  precio.style.transition = "all 0.4s";
}
