var contenedorSecciones= document.getElementById("contenedorListas");
var contenedor = document.createElement("section");
var inputNuevo = document.createElement("input");
var lista = document.createElement("ul");
//función para crear la lista, en donde mandaré llamar a las funciones de crear botón
//y cerar nuevo input

function crearLista(){

  contenedor.id=Date.now();
  var nombreLista=document.getElementById("nombreLista").value;
  contenedorSecciones.appendChild(contenedor);
  var titulo = document.createElement("h2");
  titulo.innerText= nombreLista;
  contenedor.appendChild(titulo);
  crearNuevoInput();
  // crearBoton();

  //console.log(contenedor.id);

}

//función para crear el nuevo input
function crearNuevoInput(){

  inputNuevo.id = Datenow();
  contenedor.appendChild(inputNuevo);
  console.log(inputNuevo);
  crearBoton();
}

//función para crear el nuevo botón, que después será llamada dentro del input
function crearBoton(inputId){
  var botonNuevo= document.createElement("input");
  botonNuevo.type = "button";
  botonNuevo.value = "Crear pendiente";
  botonNuevo.onclick=crearPendiente;
  botonNuevo.id= inputId;
  contenedor.appendChild(botonNuevo);

}

//función para crear el pendiente
function crearPendiente(){
  var nombrePendiente = this.getAttribute("id").value;
  var nuevoPendiente = document.createElement("li");
  nuevoPendiente.id = Date.now();
  var texto = document.createTextNode(inputNuevo.value);
  nuevoPendiente.appendChild(texto);
  lista.appendChild(nuevoPendiente);
  contenedor.appendChild(lista);
  console.log(nombrePendiente);
}
