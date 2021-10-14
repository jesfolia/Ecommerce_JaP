//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let urlDatos = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
let urlComentarios = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
function aMostrar() {
    let tabla = "";
    fetch(urlDatos)
        .then(result => result.json())
        .then(data => {
            let name = data.name;
            let description = data.description;
            let cost = data.cost;
            let currency = data.currency;
            let soldCount = data.soldCount;
            let relacionados = data.relatedProducts;
            // Mostrar datos sobre el producto
            document.getElementById("productName").innerHTML = name;
            document.getElementById("productDescription").innerHTML = description;
            document.getElementById("productCost").innerHTML = currency + " " + cost;
            document.getElementById("productSold").innerHTML = soldCount;
            for (let index = 0; index < data.images.length; index++) {
                let imageSrc = data.images[index];
                if (index == 0) {
                    tabla += `
                    <div id="Mycarousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="` + imageSrc + `" class="d-block w-100" alt="` + data.images[index] + `">
                                </div>
                    `
                }
                else {
                    tabla += `
                                <div class="carousel-item">
                                    <img src="` + imageSrc + `" class="d-block w-100" alt="` + data.images[index] + `">
                                </div>
                    `
                }

            }
            tabla += `
                </div>
                <a class="carousel-control-prev" href="#Mycarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#Mycarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                    `
            document.getElementById("productImages").innerHTML = tabla;
            // Mostrar productos relacionados
            let i = 0;
            let productosR = "";
            fetch(PRODUCTS_URL)
                .then(result => result.json())
                .then(datos => {
                    while (i < datos.length) {
                        if (relacionados[i] = i) {
                            let name = datos[i].name;
                            let description = datos[i].description;
                            let cost = datos[i].cost;
                            let currency = datos[i].currency;
                            let imgSrc = datos[i].imgSrc;
                            if( i == 1){
                                productosR += `
                                    <div id="Carousel" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                            <a href="product-info.html" class="card mb-4 shadow-sm custom-card"> 
                                            <div class="col-lg-3 col-md-4 col-6" >
                                                <div class="d-block mb-4 h-100" style ="margin-left auto ; margin-right:auto">
                                                    <img class="img-fluid img-thumbnail" src="` + imgSrc + `" alt="">
                                                    <h3 class="m-3">` + name + `</h3>
                                                    <p class="card-text">` + description + ` <br> ` + currency + ` ` + cost + `</p>
                                                </div>
                                            </div>   
     
                                            </div>       
                                `
                            }
                            else{
                           
                                productosR += `
                                <div class="carousel-item">
                                    <a href="product-info.html"class="card mb-4 shadow-sm custom-card" > 
                                        <div class="col-lg-3 col-md-4 col-6">
                                            <div class="d-block mb-4 h-100">
                                                <img class="img-fluid img-thumbnail" src="` + imgSrc + `" alt="">
                                                <h3 class="m-3">` + name + `</h3>
                                                <p class="card-text">` + description + ` <br> ` + currency + ` ` + cost + `</p>
                                            </div>
                                        </div>   
                                    </a>      
                                </div>    
                      
                                `
                            }          

                            
                    i++;
    

                        }
                        i++;
                    }
                    productosR += `
                    </div>
                    <a class="carousel-control-next" href="#Carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
        `
                    document.getElementById("productoRelacionado").innerHTML += productosR;
                });

/*
                      productosR += `
                                            <div class="carousel-item">
                                                <a href="product-info.html" class="list-group-item list-group-item-action"> 
                                                    <div class="col-lg-3 col-md-4 col-6">
                                                        <div class="d-block mb-4 h-100">
                                                            <img class="img-fluid img-thumbnail" src="` + imgSrc + `" alt="">
                                                            <h3 class="m-3">` + name + `</h3>
                                                            <p class="card-text">` + description + ` <br> ` + currency + ` ` + cost + `</p>
                                                        </div>
                                                    </div>   
                                                </a>      
                                            </div>    
                                `*/
        });
}
function Comments() {
    let comentarios = "";
    let index = 0;
    fetch(urlComentarios)
        .then(result => result.json())
        .then(data => {
            while (index < data.length) {
                let description = data[index].description;
                let user = data[index].user;
                let dateTime = data[index].dateTime;
                let score = data[index].score;
                let estrellas = "";
                for (let i = 0; i < score; i++) {
                    estrellas += '<span style="color: yellow;" class="fa fa-star"/>'; //Clase predeterminada para las estrellas
                }
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
                                    <small class="text-muted">` + estrellas + `</small>

                                </div>
                            </div>         
                    </div>
                    `
                index++;
            }
            document.getElementById("productComments").innerHTML += comentarios;
        });
}


document.addEventListener("DOMContentLoaded", function (e) {
    aMostrar();

    Comments();
});

document.getElementById("enviarComentario").onclick = function (e) {
    let comentarios = document.getElementById("addnewcomment").value;
    let puntaje = document.getElementById("puntaje").value;
    let mensaje = "";
    let nuevoComentario = "";
    if (comentarios.length == 0 || puntaje == 0) {
        mensaje += `	
        <FONT FACE="arial" SIZE=2 COLOR="red">
        El comentarios o puntaje no pueden estar vacios</FONT>
    `
    }
    else {
        mensaje += `	
            <FONT FACE="arial" SIZE=2 COLOR="red">
            Mensaje enviado</FONT>
        `
        let description = comentarios;
        let user = localStorage.getItem('Usuario');
        let score = puntaje;
        let dateTime = new Date().toLocaleString();
        let estrellas = "";
        for (let i = 0; i < score; i++) {
            estrellas += '<span style="color: yellow;" class="fa fa-star"/>'; //Clase predeterminada para las estrellas
        }
        nuevoComentario += `
                    <div class="list-group-item list-group-item-action">
                            <div class="col">
                                <div class="d-flex w-100 justify-content-between">
                                    <p class="mb-1" style="color: red;" >`+ user + `</p>
                                    <small class="text-muted">` + dateTime + `</small>
                                </div>
                                <div>
                                    <small class="text-muted">` + description + `</small>
                                    <br>
                                    <small class="text-muted">` + estrellas + `</small>

                                </div>
                            </div>         
                    </div>
                    `

        document.getElementById("productComments").innerHTML += nuevoComentario;
        document.getElementById("addnewcomment").value = "";
        document.getElementById("puntaje").value = 0;
    }
    document.getElementById("mensajeEnviado").innerHTML = mensaje;
}