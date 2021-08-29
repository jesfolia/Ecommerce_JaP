//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {//Espere a que este toda la elementos del html presentes
  document.getElementById("signIn").onclick = function (e) {//le dice que se haga todo cuando se haga click en el boton con id sendBtn 
    validarFormulario(e);
  };
});
function validarFormulario(evento) { // parte grupal
  evento.preventDefault();
  let user = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (user.length == 0 || password.length == 0) {
    let error = "";
    error += `	
      <FONT FACE="arial" SIZE=2 COLOR="red">
      Inglese el usuario y la contraseña para continuar</FONT>
    `
    document.getElementById("error").innerHTML = error;

    return;
  }
  else { //Entrega 2
    let fin = user.indexOf("@");
    let Usuario = user.substring(0, fin);
    localStorage.setItem("Usuario", Usuario); // Guarda los datos que estan en la variable user en LocalStronge
    window.location.href = "./principal.html"; //Le indica al boton a que  ventana tiene que ir
  }
}
