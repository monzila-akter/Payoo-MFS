const htmlTag = document.getElementsByTagName('html')[0]
htmlTag.setAttribute('data-theme', 'light');

// step-1---add event handler to the add money button
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    // step-2-get money to be added to the account
    const addMoneyInput = document.getElementById('add-money-input').value;
    // get pin to add money
    const pinNumberInput = document.getElementById('pin-number-input').value;
    // step-3--verify pin number
    if(pinNumberInput === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        // step-4--get the new balance
        const balanceNumber = Number(balance);
        const addMoneyNumber = Number(addMoneyInput);
        const newBalance = balanceNumber + addMoneyNumber; 
        // step-5----add the new balance to available balance
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Wrong pin number! Please try again.')
    }
    
})