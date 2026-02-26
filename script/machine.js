
//machine id -> input value------------------
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  // console.log(id, value);
  return value;
}

//machine -> balance-----------------
function getBalance() {
  const balanceElement = document.getElementById('balance');
  const balance = balanceElement.innerText;
  return  parseFloat(balance);
  // console.log('current balance')
}

//machine value --> set balance
function setBalance(value) {
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = value;
}

//machine > hide all >show id
function showOnly(id) {
  const addMoney = document.getElementById('add-money');
  const cashout = document.getElementById('cashout');
  const history = document.getElementById('history');
  const transfer = document.getElementById('transfer');
  const bill = document.getElementById('bill');
  // console.log(`add money- ${addMoney}, cashout- ${cashout}`);

  //sobaike hide kore dao
  addMoney.classList.add('hidden');
  cashout.classList.add('hidden');
  history.classList.add('hidden');
  transfer.classList.add('hidden');
  bill.classList.add('hidden');

  // id wala element ke show kora
  const selected = document.getElementById(id);
  selected.classList.remove('hidden');
}