function cleverLily (input){

    let ageLily = Number (input[0]);
    let washmachinePrice = Number (input[1]);
    let oneToyPrice = Number (input[2]);

    let evenAgeSum = 0;
    let evenCount = 0;
    let oddAgeToyCount = 0;

    for (let i=1; i <= ageLily; i ++){
        if (i % 2 ===0){
            evenAgeSum += (i/2)*10;
            evenCount += 1;
        } else {
            oddAgeToyCount += 1;
        }
    }
    
    let toyPrice = oddAgeToyCount * oneToyPrice;
    let totalSum = evenAgeSum + toyPrice - evenCount;

    if(washmachinePrice > totalSum){
        let moneyNeed = washmachinePrice - totalSum
        console.log(`No! ${moneyNeed.toFixed(2)}`);
    } else{
        let moneySave = totalSum - washmachinePrice
        console.log(`Yes! ${moneySave.toFixed(2)}`);
    }

}
cleverLily (["10","170.00","6"])