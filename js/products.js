//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let pos = 0;
    let url = "https://japdevdep.github.io/ecommerce-api/product/all.json"
    console.log (url)
    fetch(url)
        .then(result => result.json())
        .then (data => {
            let name = data[0].name
            let description = data[0].description;
            let cost = data[0].cost;
            let currency = data[0].currency;
            let imgSrc = data[0].imgSrc;
            let soldCount = data[0].soldCount;
            console.log(name,description,cost,currency,imgSrc,soldCount)
        })

});


