// datos
const nombre="Jaz"; // variables que no cambian, es strings pq esta entre comillas
const clave="1234"; // sigue siendo string, no es number porque no voy a hacer calculos con esta variable asi que no es string
// capturamos la informacion del DOM
let nomIng= document.getElementById("usuario");
let claveIng= document.getElementById("contraseña");
let boton= document.getElementById("btn-ingresar");
// escuchamos el evento
boton.addEventListener("click",function(){
alert(nomIng.Value);

});