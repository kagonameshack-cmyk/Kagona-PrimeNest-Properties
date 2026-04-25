// GLOBAL STATE
let currentCurrency = localStorage.getItem("currency") || "USD";

// STATIC RATES (replace with API later)
let rates = {
  USD: 1,
  KES: 130,
  EUR: 0.92
};

const symbols = {
  USD: "$",
  KES: "KSh",
  EUR: "€"
};

// FORMAT NUMBER
function formatPrice(num){
  return num.toLocaleString(undefined, {maximumFractionDigits: 0});
}

// CONVERT FUNCTION
function convertPrice(amountUSD){
  const rate = rates[currentCurrency];
  return amountUSD * rate;
}

// GET SYMBOL
function getSymbol(){
  return symbols[currentCurrency];
}

// UPDATE ALL PRICES
function updateAllPrices(){

  const prices = document.querySelectorAll(".property-price");

  prices.forEach(el => {

    let usd = parseFloat(el.getAttribute("data-price"));
    let converted = convertPrice(usd);

    el.innerText = getSymbol() + " " + formatPrice(converted);

  });

}

// CHANGE CURRENCY
function changeCurrency(value){
  currentCurrency = value;
  localStorage.setItem("currency", value);
  updateAllPrices();
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
  updateAllPrices();
});
