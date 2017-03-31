var contenedorSecciones= document.getElementById("contenedorListas");
var contenedor = document.createElement("section");
var inputNuevo = document.createElement("input");

function crearLista(){
  // var contenedorSecciones= document.getElementById("contenedorListas");
  // var contenedor = document.createElement("section");
  contenedor.id=Date.now();
  var nombreLista=document.getElementById("nombreLista").value;
  contenedorSecciones.appendChild(contenedor);
  var titulo = document.createElement("h2");
  titulo.innerText= nombreLista;
  contenedor.appendChild(titulo);
  // var inputNuevo = document.createElement("input");
  // inputNuevo.id = Date.now();
  // contenedor.appendChild(inputNuevo);
  // var botonNuevo= document.createElement("input");
  // botonNuevo.type = "button";
  // botonNuevo.value = "Crear pendiente";
  // botonNuevo.onclick=crearPendiente(inputNuevo.id);
  // contenedor.appendChild(botonNuevo);
  crearNuevoInput();


  //console.log(contenedor.id);

}

function crearNuevoInput(){

  inputNuevo.id = Date.now();
  contenedor.appendChild(inputNuevo);
  console.log(inputNuevo.id);
  crearBoton();
}

function crearBoton(inputId){
  var botonNuevo= document.createElement("input");
  botonNuevo.type = "button";
  botonNuevo.value = "Crear pendiente";
  botonNuevo.onclick=crearPendiente;
  botonNuevo.id= inputId;
  contenedor.appendChild(botonNuevo);

}

function crearPendiente(){
  var nombrePendiente = this.getAttribute("id").value;
  var nuevoPendiente = document.createElement("li");
  nuevoPendiente.id = Date.now();
  var texto = document.createTextNode(inputNuevo.value);
  contenedor.appendChild(texto);
  console.log(nombrePendiente);
}
