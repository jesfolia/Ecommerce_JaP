//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("Guardar").onclick = function (e) {
          userdata = { 
             pNombre: document.getElementById('pNombre').value, 
             sNombre: document.getElementById('sNombre').value, 
             pApellido: document.getElementById('pApellido').value, 
             sApellido: document.getElementById('sApellido').value, 
             Email: document.getElementById('Email').value, 
             Telefono: document.getElementById('Telefono').value,
             Edad: document.getElementById('Edad').value,
             Imagen: document.getElementById('imagenP').value
        }
        localStorage.setItem('userdata', JSON.stringify(userdata)); // stringify paso a tipo JSON

    };
    let userdatag = JSON.parse(localStorage.getItem('userdata')); // Obtiene los datos
    document.getElementById('pNombre').value = userdatag.pNombre;
    document.getElementById('sNombre').value = userdatag.sNombre;
    document.getElementById('pApellido').value = userdatag.pApellido;
    document.getElementById('sApellido').value = userdatag.sApellido;
    document.getElementById('Email').value = userdatag.Email;
    document.getElementById('Telefono').value = userdatag.Telefono;
    document.getElementById('Edad').value = userdatag.Edad;
    console.log(userdatag)
    document.getElementById("img").src = userdatag.Imagen;
    


});

/*
// Obtener una referencia al elemento de imagen
let imagen = document.getElementById("img");
// Actúe cuando la imagen se haya cargado
imagen.addEventListener("load", function () {
    let imgCanvas = document.createElement("canvas"), //canvas dibuja lienzos
        imgContext = imgCanvas.getContext("2d"); //retorna un contexto de dibujo en el lienzo

    // Asegúrate de que el lienzo sea tan grande como la imagen
    imgCanvas.width = imagen.width;
    imgCanvas.height = imagen.height;

    // Dibujar una imagen en un elemento de lienzo
    imgContext.drawImage(imagen, 0, 0, imagen.width, imagen.height);

    // Obtener el contenido del lienzo como una URL de datos
    let imgAsDataURL = imgCanvas.toDataURL(URL);

    // Guardar imagen en localStorage
    try {
        console.log(imgAsDataURL)   

        localStorage.setItem("imagen", imgAsDataURL);
        prueba
 }
    catch (e) {
        console.log("Storage failed: " + e);
    }

}, false); 
document.getElementById("img").innerHTML = localStorage.getItem("imagen");*/




/* https://ibb.co/QNGL4Qk 
<a href="https://ibb.co/HG0D2GB"><img src="https://i.ibb.co/tYSMhYQ/computer-engineering-science-tech-wallpaper-preview.jpg" alt="computer-engineering-science-tech-wallpaper-preview" border="0"></a>*/ 