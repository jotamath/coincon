//Coeficientes das respectivas moedas baseadas no real (26/12 19:00 UTC)
document.addEventListener('DOMContentLoaded',() => {
var tabela = {
        BRL: 1.000,
        USD: 4.830,
        EUR: 5.330,
        JPY: 0.034,
        GBP: 6.13,
        ETH: 10657.81,
        BTC: 203325.73
    }

let btn = document.getElementById('bconv');
let baseCurrencyInput = document.getElementById('fromCurrency');
let secondCurrencyInput = document.getElementById('toCurrency');
let amountInput = document.getElementById('amount');


function toShowResult(texto) {
    document.getElementById('resultado').innerHTML = texto;
}


btn.addEventListener("click", convertCurrency)

function convertCurrency(event) {
    let valor = amountInput.value;
    let from = baseCurrencyInput.value;
    let to = secondCurrencyInput.value;
    let conv = (tabela[from]/tabela[to]);
    let result = valor*conv;

    return toShowResult(`${result} ${to}`);
}

})