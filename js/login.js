//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){//Hace que espere a que este toda la pagina(contenido del dom) cargada para que quede bien
  document.getElementById("signIn").onclick = function(e){//le dice que se haga todo cuando se haga click en el boton con id sendBtn 
    validarFormulario(e); 
  };
});
function validarFormulario(evento) { // parte grupal
  evento.preventDefault(); 
  var user = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if(user.length == 0 || password.length == 0) {
    let error = "";
    error += `	
      <FONT FACE="arial" SIZE=2 COLOR="red">
      Inglese el usuario y la contraseña para poder continuar</FONT>
    `
     document.getElementById("error").innerHTML = error;
  
    return  ;
  }
  else{
    window.location.href = "./principal.html"; //Le indica al boton a que  ventana tiene que ir
  }
}


    