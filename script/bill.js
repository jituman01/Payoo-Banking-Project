document.getElementById('biller-btn').addEventListener('click', function () {
  //1 - get back acc & validate
  const backAccount = getValueFromInput('select-back');
  
  if (backAccount == 'Select Back') {
    alert('PLease select a back');
    return;
  }
  // console.log(backAccount)
  //2- get bank acc number----------------------
  const accountNumber = getValueFromInput('biller-number');
  if (accountNumber.length != 11) {
    alert('Invalid acc no');
    return;
  }

  // 3- get amount-------------------------------
  const billerAmount = getValueFromInput('biller-amount');

  //3- get the current balance
  const currentBalance = getBalance();

  //calculate new balance----------------------
  const newBalance = currentBalance - Number(billerAmount);

  if (newBalance < 0) {
    alert('Invalid Amount');
    return;
  }
  //5-get the pin and verify
  const pin = getValueFromInput('biller-pin');
  if (pin == '1234') {
    alert('Pay Bill Successful');
  
    setBalance(newBalance);
    
         //1-history container ke dhore niye asbo
  const history = document.getElementById('history-container');
  //2- new div create korbo
  const newHistory = document.createElement('div');
  //3- new div a innerHTML add krbo
  newHistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100 ">

      ${backAccount}  Bill pay ${billerAmount} TAKA Success to
    ${accountNumber} , at ${new Date()}
      </div>
  `
  //4- history container e newDiv append korbo
  history.append(newHistory);
 }
  else {
    alert('Invalid Pin');
    return
  }

})