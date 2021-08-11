//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){//Hace que espere a que este toda la pagina(contenido del dom) cargada para que quede bien
        document.getElementById("signIn").onclick = function(e){//le dice que se haga todo cuando se haga click en el boton con id sendBtn
            window.location.href = "./index.html";

        };
    });