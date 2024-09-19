// step 1---get the login button and call addEventListener

document.getElementById('btn-login').addEventListener('click', function(event){
    // step-2--preventDefault for not reload browser
    event.preventDefault();
    // step-3 get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // step-4 add condition to go another page but this is wrong way
    if(phoneNumber === '5' && pinNumber === '1234'){
       window.location.href = 'home.html';
        // console.log('you are logged in');
    }
    else{
        alert('wrong phone number or pin number');
    }
})

