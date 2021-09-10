//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";

function aMostrar(tipo) {
    let index = 0;
    let tabla = "";
    let datos = []
    fetch(url)
        .then(result => result.json())
        .then(data => {
            if (tipo == "des") {
                datos = data.sort(function (a, b) {
                    return a.cost - b.cost;

                });
            }
            else if (tipo == "asc") {
                datos = data.sort(function (a, b) {
                    return b.cost - a.cost;
                });
            }
            else if (tipo == "rel") {
                datos = data.sort(function (a, b) {
                    return b.soldCount - a.soldCount;
                });
            }
            else if (tipo == "mostrar") {
                datos = data;
            }
            else if (  tipo == "filtrar"){
                let min = document.getElementById("FiltroMin").value;
                let max = document.getElementById("FiltroMax").value;

                while (index < data.length) {
                    if (min <= data[index].cost && max >= data[index].cost) {
                        datos.push (data[index]);
                    }
                index ++;
                }
            }
            index=0;
            while (index < datos.length) {
                let name = datos[index].name;
                let description = datos[index].description;
                let cost = datos[index].cost;
                let currency = datos[index].currency;
                let imgSrc = datos[index].imgSrc;
                let soldCount = datos[index].soldCount;

                tabla += `
                <a href="product-info.html" class="list-group-item list-group-item-action"> 
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
                    </a>
                    `
                document.getElementById("autos").innerHTML = tabla;
                index++;
            }
        });
}

document.addEventListener("DOMContentLoaded", function (e) {
    let tipo = "mostrar";
    aMostrar(tipo);
});

document.getElementById("FiltroLimpiar").onclick = function (e) {
    document.getElementById("FiltroMin").value = "";
    document.getElementById("FiltroMax").value = "";
    let tipo = "mostrar";
    aMostrar(tipo);
}

document.getElementById("FiltroBtn").onclick = function (e) {
    let tipo = "filtrar";
    aMostrar(tipo);
}

document.getElementById("relevante").onclick = function (e) {
    let tipo = "rel";
    aMostrar(tipo);

}
document.getElementById("MenorPrecio").onclick = function (e) {
    let tipo = "des";
    aMostrar(tipo);
}

document.getElementById("MayorPrecio").onclick = function (e) {
    let tipo = "asc";
    aMostrar(tipo);
}