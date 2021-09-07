//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let urlDatos = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
let urlComentarios ="https://japdevdep.github.io/ecommerce-api/product/5678-comments.json" ;

function aMostrar() {
    let tabla ="";
    fetch(urlDatos)
        .then(result => result.json())
        .then(data => {
            let name = data.name;
            let description = data.description;
            let cost = data.cost;
            let currency = data.currency;
            let soldCount = data.soldCount;
            document.getElementById("productName").innerHTML = name;
            document.getElementById("productDescription").innerHTML = description ;
            document.getElementById("productCost").innerHTML = cost + " " +currency;
            document.getElementById("productSold").innerHTML = soldCount;
            for (let index = 0; index < data.images.length; index++) {
                let imageSrc = data.images[index];
                tabla += `
                    <div class="col-lg-3 col-md-4 col-6">
                        <div class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
                        </div>
                    </div>
                    `
                document.getElementById("productImages").innerHTML = tabla;
            }
     
            
        });
}
function Comments(){
    let comentarios ="";
    let index = 0;
    fetch(urlComentarios)
        .then(result => result.json())
        .then(data => {
            while(index < data.length){
                let score = data[index].score;
                let description = data[index].description;
                let user =  data[index].user;
                let dateTime = data[index].dateTime;
            comentarios += `
                <div class="list-group-item list-group-item-action">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <p class="mb-1" style="color: red;" >`+ user + `</p>
                                <small class="text-muted">` + dateTime + `</small>
                            </div>
                            <div>
                                <small class="text-muted">` + description + `</small>
                                <br>
                            </div>
                        </div>
                </div>
                </a>
                `
            
            index ++;
            }
            document.getElementById("productComments").innerHTML = comentarios;
            document.getElementById("productCommentsCant").innerHTML += "(" + data.length + "):";

        });
}

document.addEventListener("DOMContentLoaded", function(e){
    aMostrar();
    Comments();
});