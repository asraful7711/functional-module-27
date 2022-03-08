// handle deposite button 

document.getElementById('deposit-button').addEventListener('click' , function(){

   const depositeInput = document.getElementById('deposit-input');
   const newDepositeText = depositeInput.value;
   const newDepositeAmount = parseFloat (newDepositeText)


   const depositeTotal = document.getElementById('deposit-total')
   const previousDepositetext = depositeTotal.innerText
   const previousDepositeAmount = parseFloat(previousDepositetext)
   const  newDepositeTolat = previousDepositeAmount + newDepositeAmount

    depositeTotal.innerText = newDepositeTolat


    // update account balance 
    const balanceTotal = document.getElementById('balance-total')
    const BalanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(BalanceTotalText)
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount
    balanceTotal.innerText = newBalanceTotal

//    clear the deposite input field 
    depositeInput.value = ''

})

// handle withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawinput = document.getElementById('withdraw-input')
    const newWithdrawText = withdrawinput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText)
    
    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalText)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal



//    clear the withdraw input field 
    withdrawinput.value = ''
})