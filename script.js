document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btnSaludo");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", () => {
    mensaje.innerText = "Hola Nathan Drake";
  });
});

// Función que inicializa el mapa
function iniciarMap() {
  const centro = { lat: 40.4168, lng: -3.7038 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: centro,
    zoom: 12,
    mapId: "DEMO_MAP_ID" // opcional, para usar estilos avanzados
  });

  // Nuevo marcador recomendado (AdvancedMarkerElement)
  new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: centro,
    title: "Madrid Centro"
  });
}
