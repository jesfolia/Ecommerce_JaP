//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";
    fetch(url)
        .then(result => result.json())
        .then(data => {
            for (let index = 0; index < data.length; index++) {
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
                        <img src="` + imgSrc + `" alt="` + description + `" height="100" class="img-thumbnail" >
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ name +`</h4>
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
                document.getElementById("autos").innerHTML += tabla;


            }
        })
});





