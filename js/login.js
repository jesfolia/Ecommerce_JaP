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
        var usuario = document.getElementById('email').value;
        if(usuario.length == 0) {
        //  alert('No has escrito nada en el usuario');
          return;
        }
        var clave = document.getElementById('password').value;
        if (clave.length == 0) {
        // alert('La clave no es válida');
          return;
        }
        else{
            window.location.href = "./principal.html"; //Le indica al boton a que  ventana tiene que ir
            }
      }


    