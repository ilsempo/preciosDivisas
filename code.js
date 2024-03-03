let btc = document.getElementById("btc-dolar");
let eth = document.getElementById("eth-dolar");
let bnb = document.getElementById("bnb-dolar");
let ada = document.getElementById("ada-dolar");
let sol = document.getElementById("sol-dolar");
let doge = document.getElementById("doge-dolar");
let ltc = document.getElementById("ltc-dolar");
let dot = document.getElementById("dot-dolar");
let xrp = document.getElementById("xrp-dolar");

let blue = document.getElementById("blue-compra");
let blueAvg = document.getElementById("blue-promedio");
let blueSell = document.getElementById("blue-venta");

let oficial = document.getElementById("oficial-compra");
let oficialAvg = document.getElementById("oficial-promedio");
let oficialSell = document.getElementById("oficial-venta");

let euro = document.getElementById("euro-compra");
let euroAvg = document.getElementById("euro-promedio");
let euroSell = document.getElementById("euro-venta");

const cargarCriptos = async () => {
    try {
        const respuesta = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Csolana%2Cripple%2Cdogecoin%2Cpolkadot%2Cpolygon%2Clitecoin%2Cbinancecoin&vs_currencies=usd%2Ceur%2Cars');

        const datos = await respuesta.json();
        mostrarDataCripto(datos);

    } catch (error) {
        console.log(error);
    }
}

const cargarDolarEuro = async () => {
    try {
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        const data = await response.json();
        mostrarDataDolarEuro(data);

    } catch (error) {
        console.log(error);
    }
}

const mostrarDataDolarEuro = (data) => {

    blue.textContent = `= $${data.blue.value_buy} ARS`;
    blueAvg.textContent = `= $${data.blue.value_avg} ARS`;
    blueSell.textContent = `= $${data.blue.value_sell} ARS`;

    oficial.textContent = `= $${data.oficial.value_buy} ARS`;
    oficialAvg.textContent = `= $${data.oficial.value_avg} ARS`;
    oficialSell.textContent = `= $${data.oficial.value_sell} ARS`;

    euro.textContent = `= $${data.blue_euro.value_buy} ARS`;
    euroAvg.textContent = `= $${data.blue_euro.value_avg} ARS`;
    euroSell.textContent = `= $${data.blue_euro.value_sell} ARS`;
  
}

const mostrarDataCripto = (datos) => {

    const criptos = Object.keys(datos);
    criptos.sort();

    const resultadosMapeados = criptos.map(key => {
        const value = datos[key];
        return value.usd;
    })

    let coinsContent = [bnb, btc, ada, doge, eth, ltc, dot, xrp, sol];

    for (let i = 0; i < criptos.length; i++) {
        coinsContent[i].textContent = `= $${resultadosMapeados[i]} USD`;
    }

}

cargarCriptos();
cargarDolarEuro();