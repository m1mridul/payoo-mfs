document.getElementById('btn-login').addEventListener('click',function(event){
event.preventDefault();
    console.log('login button clicked');

    const phone = document.getElementById('phn-num').value
    const pin = document.getElementById('pin-num').value
    
console.log(phone,pin);
if(phone ==='0199' && pin ==='1234'){
    console.log('you are logged in');
    window.location.href ='home.html'
}
else{
    alert('wrong phone number or pin')
}

})