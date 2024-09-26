document.getElementById('btn-cash-out')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const cashOut = getInputFieldById('cash-out-input');
    const pinNumber = getInputFieldById('cash-out-pin');

    if (isNaN(cashOut)) {
      alert('please correct your amount');
      return;
    }


    if (pinNumber === 1234) {
      const balance = getTextFieldById('account-balance');

      if(cashOut > balance)
      {
        alert('you dont have enough money');
        return ;
      }

      const newBalance = balance - cashOut;

      document.getElementById('account-balance').innerText = newBalance;

      const div = document.createElement('div');
      div.classList.add('bg-yellow-300');
      div.innerHTML = `
          <h4 class="text-2xl font-bold"> Cash Out </h4>
          <p>${cashOut} withdraw and New Balance ${newBalance}</p>
        `
      document.getElementById('transaction-container').appendChild(div);

    }
    else {
      alert('failed to Cash Out');
    }


  });
