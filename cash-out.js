// const htmlTag = document.getElementsByTagName('html')[0];
// htmlTag.setAttribute('data-theme', 'light');

// step -1---add event handler on withdraw money button

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // step-2--get the amount to withdraw
    const cashOutInput = document.getElementById('cash-out-input').value;
    const cashOutNumber = Number(cashOutInput);
    // get the pin number
    const cashOutPin = document.getElementById('cash-out-pin').value;
    // step-3---verify pin number
    if(cashOutPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = Number(balance);
        // step-4 --less the amount from available balance
        const newBalance = balanceNumber - cashOutNumber;
        // step-5---add the changes in dom
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong pin number ! Please try again.')
    }

})