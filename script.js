document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btnSaludo");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", () => {
    mensaje.innerText = "Hola Nathan Drake";
  });
});