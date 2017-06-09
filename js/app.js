var catalogoRestaurantes = [];

function Restaurante(nombre, lat, long){
  this.nombre = nombre;
  this.lat = lat;
  this.long = long;
}

// Nuevos restaurantes creados arcáico
catalogoRestaurantes.push(new Restaurante("Cajún", 19.4071241, -99.1874223));
catalogoRestaurantes.push(new Restaurante("La oaxaqueña", 19.360884, -99.1130849));
catalogoRestaurantes.push(new Restaurante("Oaxaca Aquí", 19.4494409, -99.1582255));
catalogoRestaurantes.push(new Restaurante("Café Habana", 19.4324488, -99.1533507));
catalogoRestaurantes.push(new Restaurante("Antojitos mexicanos 'Elisa'", 19.448184, -99.153622));


$(document).ready(start);

function start(){
  obtenerUbicacionActual();
  // $("ciudad").click(cambiaLugar);
}

function obtenerUbicacionActual(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(muestraUbicacionActual);
  }
  else {
    alert("¿estás usando Internet Explorer?... pfff :/");
  }
}

function muestraUbicacionActual(posicion){
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;

  var coordenadas = {
    lat: latitud,
    lng: longitud
  };
  renderMapa(coordenadas);
}

function renderMapa(coordenadas) {
  var map = new google.maps.Map($("#map")[0], {
    zoom: 17,
    center: coordenadas
  });
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
}
