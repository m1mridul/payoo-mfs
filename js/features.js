// console.log('feature');
document.getElementById('btn-cash-out').addEventListener('click',function(){
    console.log('cash out button clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('btn-add-money').addEventListener('click',function(){
    console.log('add money button clicked');
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})