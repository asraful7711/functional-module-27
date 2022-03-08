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
function updateBalance( newDepositeAmount ,isAdd){
     // update account balance 
     const balanceTotal = document.getElementById('balance-total')
     const BalanceTotalText = balanceTotal.innerText
     const previousBalanceTotal = parseFloat(BalanceTotalText)
    if(isAdd == true){
     const newBalanceTotal = previousBalanceTotal + newDepositeAmount
     balanceTotal.innerText = newBalanceTotal}
   else{
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount
    balanceTotal.innerText = newBalanceTotal
   }
}


// handle deposite button 

document.getElementById('deposit-button').addEventListener('click' , function(){
    const newDepositeAmount = getInputValue('deposit-input');
    
    addTotalFeild('deposit-total',newDepositeAmount);

    updateBalance( newDepositeAmount,true)

})

// handle withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function(){

    const newWithdrawAmount = getInputValue('withdraw-input');

    addTotalFeild('withdraw-total',newWithdrawAmount);

    updateBalance(  newWithdrawAmount ,false)

})