// separate function for not repeatation 
function getInputValue(inputId){
    const inputFeild = document.getElementById(inputId);
    const newInputText = inputFeild.value;
    const newInputAmount = parseFloat (newInputText)

    //    clear the deposite input field 
    inputFeild.value = ''
    return newInputAmount;
 
}
function addTotalFeild(totalId,Amount){
    const totalFeild = document.getElementById(totalId)
   const previousTotaltext = totalFeild.innerText
   const previousTotalAmount = parseFloat(previousTotaltext)
   const  newTotal = previousTotalAmount + Amount

    totalFeild.innerText = newTotal
    
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total')
     const BalanceTotalText = balanceTotal.innerText
     const previousBalanceTotal = parseFloat(BalanceTotalText)
     return previousBalanceTotal;
}
function updateBalance( amount ,isAdd){
     // update account balance 

     const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
     const newBalanceTotal = previousBalanceTotal + amount
     balanceTotal.innerText = newBalanceTotal}
   else{
    const newBalanceTotal = previousBalanceTotal - amount
    balanceTotal.innerText = newBalanceTotal
   }
}


// handle deposite button 

document.getElementById('deposit-button').addEventListener('click' , function(){


    const DepositeAmount = getInputValue('deposit-input');

    if (DepositeAmount > 0){
        addTotalFeild('deposit-total',DepositeAmount);

        updateBalance( DepositeAmount,true)
    }

})

// handle withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function(){

    const WithdrawAmount = getInputValue('withdraw-input');
    const  currentBalance = getCurrentBalance()

    if(WithdrawAmount > 0 && WithdrawAmount < currentBalance){
        addTotalFeild('withdraw-total',WithdrawAmount);

        updateBalance(  WithdrawAmount ,false)
    }
    if( WithdrawAmount > currentBalance){
        document.getElementById('withdraw-alert').style.display = 'block'
    }

})