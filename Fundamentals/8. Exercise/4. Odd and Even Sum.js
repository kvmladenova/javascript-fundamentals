function oddAndEvenSum (num){
    let numAsStr = String (num);
    let oddSum = 0;
    let evenSum = 0;

    for (let char of numAsStr){
        let digit =Number (char);

        if (digit % 2 == 0){
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum (1000435);
oddAndEvenSum (3495892137259234);