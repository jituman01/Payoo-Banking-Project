document.getElementById('add-money-btn').addEventListener('click', function () {
  //1- get bank account--------------------
  const bankAccount = getValueFromInput('add-money-bank');
  
  if (bankAccount == 'Select Bank') {
    alert('Please Select a Bank');
    return;
  }
  console.log(bankAccount)

  //2- get bank acc number----------------------
  const accno = getValueFromInput('add-money-number')
  if (accno.length != 11) {
    alert('Invalid acc no');
    return;
  }
  console.log(accno)

  // 3- get amount
  const amount = getValueFromInput('add-money-amount');

  //4- calculate new balance
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);
  console.log(newBalance)

  //5-get the pin and verify
  const pin = getValueFromInput('add-money-pin');
  if (pin === '1234') {
    //5.1- true ==> show an alert > set balance
    alert(`Add Money Success from
    ${bankAccount} at ${new Date()}`)
 
  //-------new balance set---------
  setBalance(newBalance);
  
  
    //1-history container ke dhore niye asbo
  const history = document.getElementById('history-container');
  //2- new div create korbo
  const newHistory = document.createElement('div');
  //3- new div a innerHTML add krbo
  newHistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100 ">

      Add Money Success from
    ${bankAccount} ,acc-no ${accno} at ${new Date()}
      </div>
  `
  //4- history container e newDiv append korbo
  history.append(newHistory);
}
   else {
     //5.2- false ==> show an error alert > return
    alert('Invalid Pin')
    return;
   }
})