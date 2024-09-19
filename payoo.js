// step 1---get the login button and call addEventListener

document.getElementById('btn-login').addEventListener('click', function(event){
    // step-2--preventDefault for not reload browser
    event.preventDefault();
    console.log('login button clicked')
    // step-3 get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})

