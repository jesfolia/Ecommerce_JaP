//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let totalCost = 0;
let envioCost = 0;
function costoTotal(unitCost, cantidad, currency) {
    let totalCost = unitCost * cantidad.value;
    document.getElementById("productCostTotal").innerHTML = currency + " " + totalCost;
    document.getElementById("SubT").innerHTML = currency + " " + totalCost;
    envio(totalCost);
}
function envio(totalCost) {
    envioCost = totalCost * 0.15;
    document.getElementById("costoEnvio").innerHTML = envioCost;
    document.getElementById("costoTotal").innerHTML = totalCost + envioCost;

    document.getElementById("envioPremium").addEventListener("change", function () {
        envioCost = Math.round(totalCost * 0.15);
        document.getElementById("costoEnvio").innerHTML = envioCost;
        document.getElementById("costoTotal").innerHTML = totalCost + envioCost;
    });
    document.getElementById("envioExpress").addEventListener("change", function () {
        envioCost = Math.round(totalCost * 0.07);
        document.getElementById("costoEnvio").innerHTML = envioCost;
        document.getElementById("costoTotal").innerHTML = totalCost + envioCost;
    });
    document.getElementById("envioStandard").addEventListener("change", function () {
        envioCost = Math.round(totalCost * 0.05);
        document.getElementById("costoEnvio").innerHTML = envioCost;
        document.getElementById("costoTotal").innerHTML = totalCost + envioCost;
    });
}
document.addEventListener("DOMContentLoaded", function (e) {
    let i = 0;
    fetch(CART_INFO_URL)
        .then(result => result.json())
        .then(data => {
            while (i < data.articles.length) {
                let name = data.articles[i].name;
                let count = data.articles[i].count;
                let unitCost = data.articles[i].unitCost;
                let currency = data.articles[i].currency;
                let src = data.articles[i].src;
                let totalCost = unitCost * count;
                // Mostrar datos del carrito producto
                document.getElementById("productName").innerHTML = name;
                document.getElementById("productCount").innerHTML = `<input type="number" min ="1" class="form-control" id="cantidad" placeholder="" value="` + count + `" ></input>`
                document.getElementById("productCost").innerHTML = currency + " " + unitCost;
                document.getElementById("SubT").innerHTML = currency + " " + totalCost;
                document.getElementById("productImages").innerHTML = `<img class="img-fluid img-thumbnail" src="` + src + `" alt="">`;
                document.getElementById("costoTotal").innerHTML = currency + " " + totalCost;
                costoTotal(unitCost, cantidad, currency);
                document.getElementById("cantidad").addEventListener("change", function () {
                    costoTotal(unitCost, cantidad, currency);
                });
                i++
            }
        });
});
document.getElementById("Comprar").onclick = function (e) { //Entrega 5
    let envio = "";
    let direccion = document.getElementById('EnvioCalle').value;
    let esquina = document.getElementById('EnvioEsquina').value;
    let numero = document.getElementById('EnvioNumero').value;
    if (direccion.length == 0 || numero.length == 0 || esquina.length == 0) {
        envio += `	
          <FONT FACE="arial" SIZE=2 COLOR="red">
          Ingresar los datos para realizar el envio</FONT>
        `
        document.getElementById("envio").innerHTML = envio;
        return;
    }
    else {
        envio += `	
          <FONT FACE="arial" SIZE=2 COLOR="red">
          Se envio correctamente a :` + direccion + " " + numero + ` </FONT>
        `
        document.getElementById("envio").innerHTML = envio;
        document.getElementById('EnvioCalle').value = "";
        document.getElementById('EnvioEsquina').value = "";
        document.getElementById('EnvioNumero').value = "";
    }
}