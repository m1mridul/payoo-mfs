// console.log('cash out');
document.getElementById('cash-out-btn').addEventListener('click', function () {
    // console.log('cash out Button clicked');
    const cashOutAmount = document.getElementById('cash-out-amount').value
    const cashOutAmountNumber = parseFloat(cashOutAmount);
    console.log(typeof cashOutAmountNumber);
    const cashOutPin = document.getElementById('cash-out-pin').value

    // console.log(cashOutAmount,cashOutPin);
    if (cashOutPin === '1234') {
        // console.log('you can cash out');
        const balance = document.getElementById('balance').innerText
        const balanceNumber = parseFloat(balance)
        console.log(typeof balanceNumber);
        const cashOutBal = balanceNumber - cashOutAmountNumber
        console.log(cashOutBal);

         document.getElementById('balance').innerText = cashOutBal;
        // console.log(bal);

    }
    else {
        alert('Failed to cash out! Please try again')
    }



})