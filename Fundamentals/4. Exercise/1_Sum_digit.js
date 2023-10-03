function sumDigit (num){
    let numAsStrin = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStrin.length; i++){
        sum += Number (numAsStrin[i]);
    }
        
    console.log(sum);
}
sumDigit ('245678');
sumDigit ('97561');
sumDigit ('543')