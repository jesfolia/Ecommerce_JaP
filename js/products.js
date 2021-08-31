//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
/*let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";
let datos = [];

// Funcion para fech
function obtenerFech() {
    let vacio = "";
    document.getElementById("autos").innerHTML = vacio; // Vacia el div con id autos
    fetch(url)
        .then(result => result.json())
        .then(data => {
            let index = 0;
            for (let index = 0; index < data.length; index++) {
                datos.push(data[index]);
                
            }
        });
        console.log(datos);
}
// Funcion filtro
//console.log(datos);
// Funcion para mostrar lo que me da el fech
/*function mostrar() {
    let vacio = "";
    console.log(datos);
    let index = 0;
    document.getElementById("autos").innerHTML = vacio; // Vacia el div con id autos
    while (index < datos.length) {
        let name = datos[index].name;
        let description = datos[index].description;
        let cost = datos[index].cost;
        let currency = datos[index].currency;
        let imgSrc = datos[index].imgSrc;
        let soldCount = datos[index].soldCount;
        let tabla = "";
        tabla += `	                
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + imgSrc + `" alt="` + name + `" height="100" class="img-thumbnail" >
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ name + `</h4>
                            <small class="text-muted">` + cost + ` ` + currency + `</small>
                        </div>
                        <div>
                        <small class="text-muted">` + description + `</small>
                        <br>
                        <small class="text-muted">` + soldCount + ` </small>
                    </div>
                </div>
            </div>
        `
        console.log(tabla);
        document.getElementById("autos").innerHTML += tabla; // Trae el documento   ue tiene la id auto y guarda el html que esta guardado en tabla
        index++;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
   // obtenerFech();
  //  mostrar();
});

*/








function mostrarDatos() {
    let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";
    let vacio = "";
    document.getElementById("autos").innerHTML = vacio; // Vacia el div con id autos
    fetch(url)
        .then(result => result.json())
        .then(data => {
            let index = 0;
            while (index < data.length) {
                let name = data[index].name;
                let description = data[index].description;
                let cost = data[index].cost;
                let currency = data[index].currency;
                let imgSrc = data[index].imgSrc;
                let soldCount = data[index].soldCount;
                let tabla = "";

                tabla += `
                    <div class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-3">
                                <img src="` + imgSrc + `" alt="` + name + `" height="100" class="img-thumbnail" >
                            </div>
                            <div class="col">
                                <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">`+ name + `</h4>
                                    <small class="text-muted">` + cost + ` ` + currency + `</small>
                                </div>
                                <div>
                                <small class="text-muted">` + description + `</small>
                                <br>
                                <small class="text-muted"> Vendidos: ` + soldCount + ` </small>
                            </div>
                        </div>
                    </div>
                `
                document.getElementById("autos").innerHTML += tabla; // Trae el documento   ue tiene la id auto y guarda el html que esta guardado en tabla
                index++;
            }
        })
}

document.addEventListener("DOMContentLoaded", function (e) {
    mostrarDatos();
});
document.getElementById("FiltroLimpiar").onclick = function (e) {
    mostrarDatos();
}

document.getElementById("FiltroBtn").onclick = function (e) {
    let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";
    let min = document.getElementById("FiltroMin").value;
    let max = document.getElementById("FiltroMax").value;
    let vacio = "";
    document.getElementById("autos").innerHTML = vacio; // Vacia el div con id autos
    let index = 0;
    let filtros = "";
    fetch(url)
        .then(result => result.json())
        .then(data => {
            while (index < data.length) {
                let name = data[index].name;
                let description = data[index].description;
                let cost = data[index].cost;
                let currency = data[index].currency;
                let imgSrc = data[index].imgSrc;
                let soldCount = data[index].soldCount;
                if (min <= cost && max >= cost) {
                    filtros += `
                    <div class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-3">
                                <img src="` + imgSrc + `" alt="` + name + `" height="100" class="img-thumbnail" >
                            </div>
                            <div class="col">
                                <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">`+ name + `</h4>
                                    <small class="text-muted">` + cost + ` ` + currency + `</small>
                                </div>
                                <div>
                                    <small class="text-muted">` + description + `</small>
                                    <br>
                                    <small class="text-muted"> Vendidos: ` + soldCount + ` </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    console.log(filtros);
                    document.getElementById("autos").innerHTML = filtros;
                }
                else if (min == "" && max == "") {
                    mostrarDatos();
                }
                index++;
            }
        });
}

document.getElementById("relevante").onclick = function (e) {
    let tipo= "rel";
    orden (tipo);

}

document.getElementById("MenorPrecio").onclick = function (e) {
    let tipo= "des";
    orden (tipo);
}
document.getElementById("MayorPrecio").onclick = function (e) {
 let tipo= "asc";
 orden (tipo);
}

function orden (tipo){
    let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";
    let index = 0;
    let precio = "";
    let prueba = []
    fetch(url)
        .then(result => result.json())
        .then(data => {
            if (tipo == "des"){
                prueba = data.sort(function (a, b) {
                return a.cost - b.cost;

            });
            console.log ("des");
        }
            else if (tipo == "asc"){
                prueba = data.sort(function (a, b) {
                return b.cost - a.cost;
              });
              console.log ("asc")
            }
            else if (tipo == "rel"){
            prueba = data.sort(function (a, b) {
                return b.soldCount - a.soldCount;
              });
              console.log ("relv")
            }
            console.log( prueba)
            while (index < prueba.length) {
                let name = prueba[index].name;
                let description = prueba[index].description;
                let cost = prueba[index].cost;
                let currency = prueba[index].currency;
                let imgSrc = prueba[index].imgSrc;
                let soldCount = prueba[index].soldCount;
                    precio += `
                    <div class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-3">
                                <img src="` + imgSrc + `" alt="` + name + `" height="100" class="img-thumbnail" >
                            </div>
                            <div class="col">
                                <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">`+ name + `</h4>
                                    <small class="text-muted">` + cost + ` ` + currency + `</small>
                                </div>
                                <div>
                                    <small class="text-muted">` + description + `</small>
                                    <br>
                                    <small class="text-muted"> Vendidos: ` + soldCount + ` </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    document.getElementById("autos").innerHTML = precio;
                index++;
            }
        });
}