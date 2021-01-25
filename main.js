 //
 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function () {
     const loginBox = document.getElementById('login-box');
     loginBox.style.display = "none";
     const bankStatement = document.getElementById("status");
     bankStatement.style.display = "block";
 })
 //deposit event listener
 const depositBtn = document.getElementById("makeDeposit");
 depositBtn.addEventListener('click', function () {

     const depositNumber = getInputValue("depositValue");

     updateSpanText("currentDeposit", depositNumber);
     updateSpanText("currentBalance", depositNumber);

     document.getElementById("depositValue").value = "";


 })


 //withdraw listener

 const withdrawBtn = document.getElementById("makeWithdraw");
 withdrawBtn.addEventListener('click', function () {
     const withdrawAmountNumber = getInputValue("withdrawValue");

     updateSpanText("currentWithdraw", withdrawAmountNumber);
     updateSpanText("currentBalance", withdrawAmountNumber * -1);
 })
 function getInputValue(id) {
     const inputAmount = document.getElementById(id).value;
     const inputAmountNumber = parseFloat(inputAmount);
     return inputAmountNumber;
 }

 function updateSpanText(id, depositNumber) {
     const currentAmount = document.getElementById(id).innerHTML;
     const currentAmountNumber = parseFloat(currentAmount);
     const totalAmount = currentAmountNumber + depositNumber;
     document.getElementById(id).innerHTML = totalAmount;
     document.getElementById("withdrawValue").value = "";
 }