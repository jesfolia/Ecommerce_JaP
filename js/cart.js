//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let totalCost = 0;
let envioCost = 0;
let SubT = 0;
let totalCostp = 0;
let totalCostPino = 0;
let totalCostAuto = 0;
let unitCost = 0;
let currency = "";
let validacion = 0;


function costoTotal(unitCost, cantidad, currency) {
    if (currency === "UYU") {
        totalCost = unitCost * cantidad.value
        document.getElementById("subTU").innerHTML = currency + " " + totalCost;
        SubT = totalCost + totalCostAuto;
        totalCostPino = totalCost;
    }

    else {
        totalCost = unitCost * cantidad.value
        let pesos = totalCost * 40
        document.getElementById("subTD").innerHTML = currency + " " + totalCost;
        SubT = totalCostPino + pesos
        totalCostAuto = pesos
    }
    document.getElementById("SubT").innerHTML = SubT;
    envio(SubT);
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
    fetch("https://japdevdep.github.io/ecommerce-api/cart/654.json")
        .then(result => result.json())
        .then(data => {
            while (i < data.articles.length) {
                let name = data.articles[i].name;
                let count = data.articles[i].count;
                unitCost = data.articles[i].unitCost;
                currency = data.articles[i].currency;
                let src = data.articles[i].src;
                totalCostp = unitCost * count
                // Mostrar datos del carrito producto
                if (currency === "UYU") {
                    let cart = `
                    <tr>
                        <td> <img class="img-fluid img-thumbnail" src="` + src + `" alt=""  width="100"></td>
                        <td> ` + name + ` </td>
                        <td></td>
                        <td>` + currency + `  </td>
                        <td id="costo0">` + unitCost + `  </td>
                        <td></td>
                        <td> <input type="number" min ="1" class="form-control" id="cantidad` + i + `"  placeholder="" value="` + count + `" ></input></td>
                        <td></td>
                        <td id="subTU"> `  + currency + " " + totalCostp + ` </td>
                    </tr>
                `
                    document.getElementById("cartProducts").innerHTML += cart;
                    totalCost += totalCostp
                    totalCostPino = totalCostp;
                }
                else {

                    let cart = `
                    <tr>
                    <td> <img class="img-fluid img-thumbnail" src="` + src + `" alt=""  width="100"></td>
                    <td> ` + name + ` </td>
                    <td></td>
                    <td>` + currency + `  </td>
                    <td id="costo0">` + unitCost + `  </td>
                    <td></td>
                    <td> <input type="number" min ="1" class="form-control" id="cantidad` + i + `"  placeholder="" value="` + count + `" ></input></td>
                    <td></td>
                    <td id="subTD"> `  + currency + " " + totalCostp + ` </td>
                    </tr>
                `
                    document.getElementById("cartProducts").innerHTML += cart;
                    totalCost += totalCostp * 40
                    totalCostAuto += totalCostp
                    totalCostAuto = totalCostAuto *40
            }

                document.getElementById("cantidad0").addEventListener("change", function () {

                    costoTotal(data.articles[0].unitCost, cantidad0, data.articles[0].currency);

                });
                i++
            }
            document.getElementById("cantidad1").addEventListener("change", function () {

                costoTotal(unitCost, cantidad1, currency);

            });

            document.getElementById("SubT").innerHTML = totalCost;
            envio(totalCost);

        });
});
document.getElementById("Comprar").onclick = function (e) { //Entrega 5
    let envio = "";
    let direccion = document.getElementById('EnvioCalle').value;
    let esquina = document.getElementById('EnvioEsquina').value;
    let numero = document.getElementById('EnvioNumero').value;
    let pais = document.getElementById('EnvioPais').value;
    if (direccion.length == 0 || numero.length == 0 || esquina.length == 0 || pais.length == 0 || validacion == 0) {
        envio += `	
          <FONT FACE="arial" SIZE=2 COLOR="red">
          Ingresar los datos para realizar el envio</FONT>
        `
        document.getElementById("envio").innerHTML = envio;
        return;
    }
    else {
        envio += `	
          <FONT FACE="arial" SIZE=5 COLOR="black">
          Se envio correctamente a: ` + direccion + " " + numero + ` </FONT>
        `
        document.getElementById("envio").innerHTML = envio;
        document.getElementById('EnvioCalle').value = "";
        document.getElementById('EnvioEsquina').value = "";
        document.getElementById('EnvioNumero').value = "";
        document.getElementById('EnvioPais').value = "";
        document.getElementById('NumeroTarjeta').value = "";
        document.getElementById('codigoSeguridad').value = "";
        document.getElementById('vencimiento').value = "";
        document.getElementById('NumeroCuenta').value = "";
        document.getElementById("formaP").innerHTML = `<p class="m-1 btn"> No ingreso forma de pago </p>`;

    }

}
document.getElementById("modalFPago").onclick = function (e) {
    validacion = 0;
    let tarjeta = document.getElementById('NumeroTarjeta').value;
    let codigo = document.getElementById('codigoSeguridad').value;
    let vencimiento = document.getElementById('vencimiento').value;
    let cuenta = document.getElementById('NumeroCuenta').value;


    if (document.getElementById('Tarjeta').checked) {

        if (tarjeta.length == 0 && codigo.length == 0 && vencimiento.length == 0) {
            validacion = 0;
        }
        else {
            validacion++;
            document.getElementById("formaP").innerHTML = `<p class="m-1 btn"> Tarjeta de credito </p>`;

        }
    }

    else if (document.getElementById('cuantaBancaria').checked) {
        if (cuenta.length == 0) {
            validacion = 0;
        }
        else {
            document.getElementById("formaP").innerHTML = `<p class="m-1 btn">Transferencia bancaria</p>`;
            validacion++;
        }
    }

}