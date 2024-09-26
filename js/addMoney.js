document.getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();
    // const addMoney = getInputFieldById();
    // console.log(addMoney);

    const addMoney=getInputFieldById('add-money-input');
    const pinNumber=getInputFieldById('input-pin-number');

    if(isNaN(addMoney))
    {
      alert('please correct your amount');
      return;
    }
    
    if(pinNumber === 1234)
    {
      const balance = getTextFieldById('account-balance');
        
      const newBalance = balance + addMoney ;
      
      document.getElementById('account-balance').innerText = newBalance ;
      

      const p = document.createElement('p');
      p.innerText = `Added :${balance} tk. Balance :${newBalance}`;
      document.getElementById('transaction-container').appendChild(p);
    }
    else
    {
      alert('failed to addMoney');
    }

  });