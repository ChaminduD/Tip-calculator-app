const billAmount = document.getElementById("bill");
const fivePercent = document.getElementById("five");
const tenPercent = document.getElementById("ten");
const fifteenPercent = document.getElementById("fifteen");
const twentyFivePercent = document.getElementById("twenty-five");
const fiftyPercent = document.getElementById("fifty");
const customPercent = document.getElementById("custom");
const customNumberInput = document.getElementById("custom-input");
const numberOfPeople = document.getElementById("no-people");
const tip = document.getElementById("tip-amount");
const total = document.getElementById("total");
const resetBtn = document.getElementById("reset-btn");
const form = document.getElementById("form");
const error = document.getElementById("error");

customNumberInput.addEventListener('click', function() {
    customPercent.checked = true;
});

customPercent.addEventListener('click', function() {
  if(customPercent.checked){
    customNumberInput.focus();
  }
});

form.addEventListener('reset', function() {
  resetBtn.disabled = true;
  tip.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  error.style.display = "none";
  numberOfPeople.style.border = "none";
});

form.addEventListener('input', function() {
  const isFormEmpty = Array.from(form.elements).some(element => element.value !== '');
  resetBtn.disabled = !isFormEmpty;
});

function totalCost(){
  const bill = parseFloat(billAmount.value);
  const noPeople = parseInt(numberOfPeople.value);
  const customNumber = parseInt(customNumberInput.value);
  let tipAmount;
  let totalAmount;

  if(billAmount.value.length == 0 || billAmount.value == 0){
    tip.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  }else if(noPeople == 0){
    error.style.display = "block";
    numberOfPeople.style.border = "2px solid hsl(9, 100%, 64%)";
    tip.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  }else{
    error.style.display = "none";
    numberOfPeople.style.border = "none";

    if(numberOfPeople.value.length == 0){
      tip.innerHTML = "$0.00";
      total.innerHTML = "$0.00";
    }else{
      if(fivePercent.checked){
        tipAmount = ((bill * 5)/100)/noPeople;
        tip.innerHTML = "$" + tipAmount.toFixed(2);
        totalAmount = (bill / noPeople)+ tipAmount;
        total.innerHTML = "$" + totalAmount.toFixed(2);
      }
      if(tenPercent.checked){
        tipAmount = ((bill * 10)/100)/noPeople;
        tip.innerHTML = "$" + tipAmount.toFixed(2);
        totalAmount = (bill / noPeople)+ tipAmount;
        total.innerHTML = "$" + totalAmount.toFixed(2);
      }
      if(fifteenPercent.checked){
        tipAmount = ((bill * 15)/100)/noPeople;
        tip.innerHTML = "$" + tipAmount.toFixed(2);
        totalAmount = (bill / noPeople)+ tipAmount;
        total.innerHTML = "$" + totalAmount.toFixed(2);
      }
      if(twentyFivePercent.checked){
        tipAmount = ((bill * 25)/100)/noPeople;
        tip.innerHTML = "$" + tipAmount.toFixed(2);
        totalAmount = (bill / noPeople)+ tipAmount;
        total.innerHTML = "$" + totalAmount.toFixed(2);
      }
      if(fiftyPercent.checked){
        tipAmount = ((bill * 50)/100)/noPeople;
        tip.innerHTML = "$" + tipAmount.toFixed(2);
        totalAmount = (bill / noPeople)+ tipAmount;
        total.innerHTML = "$" + totalAmount.toFixed(2);
      }
      if(customPercent.checked){
        if(customNumberInput.value.length == 0){
          tip.innerHTML = "$0.00";
          total.innerHTML = "$0.00";
        }else{
          tipAmount = ((bill * customNumber)/100)/noPeople;
          tip.innerHTML = "$" + tipAmount.toFixed(2);
          totalAmount = (bill / noPeople)+ tipAmount;
          total.innerHTML = "$" + totalAmount.toFixed(2);
        } 
      }
    }
  }
}

billAmount.addEventListener('input', totalCost);
numberOfPeople.addEventListener('input', totalCost);
customNumberInput.addEventListener('input', totalCost);
fivePercent.addEventListener('input', totalCost);
tenPercent.addEventListener('input', totalCost);
fifteenPercent.addEventListener('input', totalCost);
twentyFivePercent.addEventListener('input', totalCost);
fiftyPercent.addEventListener('input', totalCost);
customPercent.addEventListener('input', totalCost);