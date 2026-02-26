document.getElementById('transfer-btn').addEventListener('click', function () {
  // console.log('clicked')

  //1 - get number & validate
  const transferNumber = getValueFromInput('transfer-number')
  if (transferNumber.length != 11) {
    alert('Invalid Acc Number')
    return;
  }
  //2- get the amount
  const transferAmount = getValueFromInput('transfer-amount');
  //3- get the current balance
  const currentBalance = getBalance();
  //4- calculate new balance
  const newBalance = currentBalance - Number(transferAmount);
  
  //----validation----
  if (newBalance < 0) {
    alert('Invalid Amount')
    return;
  }
  //5-get the pin and verify
  const pin = getValueFromInput('transfer-pin');
  if (pin == '1234') {
    alert('Transfer Successfull')

        //1-history container ke dhore niye asbo
  const history = document.getElementById('history-container');
  //2- new div create korbo
  const newHistory = document.createElement('div');
  //3- new div a innerHTML add krbo
  newHistory.innerHTML = `
      <div class=" transaction-card p-5 bg-base-100 rounded-3xl">
       
      Transfer ${transferAmount} TAKA Success to
    ${transferNumber} , at ${new Date()}
      </div>
  `
  //4- history container e newDiv append korbo
    history.append(newHistory);
    
  }

  else {
    alert('Invalid Pin')
    return;
  }
 
  setBalance(newBalance);
})