const currDict = {
  PKR: 0.0036,
  USD: 1,
  EUR: 1.08,
  BHD: 2.65,
};

function getConvRate(from, to) {
  const currencies = ["PKR", "USD", "EUR", "BHD"];
  if (currencies.includes(from) && currencies.includes(to)) {
    const fromCurrVal = currDict[from];
    const toCurrVal = currDict[to];
    let convRate;
    if (fromCurrVal > toCurrVal) {
      convRate = fromCurrVal / toCurrVal;
    } else {
      convRate = fromCurrVal * toCurrVal;
    }
    return Math.round(convRate * 1000) / 1000;
  } else {
    return 0;
  }
}
function getExcRateInfo(from, to) {
  const convRate = getConvRate(from, to);
  if (convRate != 0) {
    return `1 ${from} = ${convRate} ${to}`;
  } else {
    return "No data found";
  }
}

function getExcRate(from, to, val) {
  let convAmount = getConvRate(from, to) * val;
  convAmount = Math.round(convAmount * 1000) / 1000;
  return `${val} ${from} = ${convAmount} ${to}`;
}
function submitEvent(event) {
  event.preventDefault();
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  document.getElementById("curr-info").textContent = getExcRateInfo(from, to);
  document.getElementById("exc-info").textContent = getExcRate(
    from,
    to,
    amount
  );
}
document.getElementById("myform").addEventListener("submit", submitEvent);
