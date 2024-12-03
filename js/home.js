// add money event 
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('money added button clicked');

    const addMoney = document.getElementById('amount').value
    // console.log(addMoney);

    const getPin = document.getElementById('pin').value
    // console.log(getPin);

    if (getPin === '1234') {
        // console.log('adding money from account');



        const balance = document.getElementById('balance').innerText
        const AddBalanceNumber = parseFloat(balance);
        console.log(AddBalanceNumber);
        const AddMoneyNumber = parseFloat(addMoney);
        console.log(typeof AddBalanceNumber);
        const newBalance = AddBalanceNumber + AddMoneyNumber
        // console.log(newBalance);
        const updateBlacnce = document.getElementById('balance').innerText = newBalance
        console.log(updateBlacnce);

    }
    else {
        alert('Failed to add money! Please try again')
    }
})