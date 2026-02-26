document.getElementById('cashout-btn').addEventListener('click', function () {
  //   //1 - get agent number & validate
  const cashoutNumber = getValueFromInput('cashout-number');
  
   if (cashoutNumber.length != 11) {
     alert('Invalid Agent Number');
     return;
  }

  //2- get the amount ,validate, convert to number
  const cashoutAmount = getValueFromInput('cashout-amount');

    //3- get the current balance ,validate, convert to number
  const currentBalance = getBalance();

  //   //4- calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  
//   //--------------validation----------
  if (newBalance < 0) {
    alert('Invalid Amount')
    return;
  }

  //5-get the pin and verify
  const pin = getValueFromInput('cashout-pin');
  if (pin === '1234') {
       //5.1- true ==> show an alert > set balance
      alert('Cash Out Successfull')
    
     //-------new balance set---------
     setBalance(newBalance);

      //1-history container ke dhore niye asbo
  const history = document.getElementById('history-container');
  //2- new div create korbo
  const newHistory = document.createElement('div');
  //3- new div a innerHTML add krbo
  newHistory.innerHTML = `
      <div class="transaction-card p-5 bg-base-100 ">

      Cash Out ${cashoutAmount} TAKA Success to
    ${cashoutNumber} , at ${new Date()}
      </div>
  `
  //4- history container e newDiv append korbo
  history.append(newHistory);
    }
      else {
        //5.2- false ==> show an error alert > return
        alert('Invalid Pin')
      }
})



// document.getElementById('cashout-btn').addEventListener('click', function(){
//   //1 - get agent number & validate
//   const cashoutNumberInput = document.getElementById('cashout-number');
//   const cashoutNumber = cashoutNumberInput.value;
//   // console.log(cashoutNumber)
//   if (cashoutNumber.length != '11') {
//     alert('Invalid Agent Number');
//     return;
//   }

//   //2- get the amount ,validate, convert to number
//   const cashoutAmountInput = document.getElementById('cashout-amount');
//   const cashoutAmount = cashoutAmountInput.value;
//   // console.log(cashoutAmount)

//   //3- get the current balance ,validate, convert to number
//   const balanceElement = document.getElementById('balance');
//   const balance = balanceElement.innerText;
//   // console.log(balance)

//   //4- calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);
  
//   //--------------validation----------
//   if (newBalance < 0) {
//     alert('Invalid Amount')
//     return;
//   }
//   // console.log('newBalance', newBalance);
  
//   //5-get the pin and verify
//   const cashoutPin = document.getElementById('cashout-pin');
//   const pin = cashoutPin.value;
//   if (pin === '1234') {
//     //5.1- true ==> show an alert > set balance
//     alert('Cash Out Successfull')

// //-------new balance set---------
//     balanceElement.innerText = newBalance;
//   }
//   else {
//     //5.2- false ==> show an error alert > return
//     alert('Invalid Pin')
//   }

// })