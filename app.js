// step -1 - selecting all the elements
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

//ex-5
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    //loss logic
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(
      `Hey the Loss is ${loss} & the Percentage is ${lossPercentage}%.`
    );
  } else if (current > initial) {
    //profit logic
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey the Profit is ${profit} & the Percentage is ${profitPercentage}%.`
    );
  } else {
    //rest of logic
    showOutput(`No Pain No Gain & No Gain No Pain.`);
  }
}

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  if (ip === 0 || qty === 0 || curr === 0) {
    showOutput("Please fill all details ");
  } else if (ip <= 0 || qty <= 0 || curr <= 0) {
    showOutput("no negative values ");
  } else {
    calculateProfitAndLoss(ip, qty, curr);
  }
}

function showOutput(message) {
  outputBox.innerText = message;
}

//ex-6
submitBtn.addEventListener("click", submitHandler);

//calculateProfitAndLoss(100, 1000, 10);
