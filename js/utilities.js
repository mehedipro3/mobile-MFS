// function getInputFieldById() {
//   const addMoney = document.getElementById('add-money-input').value;
//   return addMoney;

// };


function getInputFieldById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldById(id){
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}


function showSectionById(id)
{
  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('transactions-section').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}