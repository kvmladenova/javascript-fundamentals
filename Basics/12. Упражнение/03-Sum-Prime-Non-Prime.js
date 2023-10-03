function sumPrimeNotPrime (input) {
    let index = 0;
    let command = input [index];
    index ++;
    
    let primeSum = 0;
    let notPrimeSum = 0;

    while (command != 'stop'){
        let num = Number (command);

        if (num < 0){
            console.log('Number is negative.');
            command = input [ index];
            index++;
            continue;
        }

        let isPride = true;

        for (let divider = 2; divider < num; divider ++){
            if (num % divider === 0){
                isPride = false;
                break;
            }
        }

        if (isPride === true){
            primeSum += num;
        } else {
            notPrimeSum += num
        }
        
        command = input[index];
        index ++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeSum}`);
}
sumPrimeNotPrime (["3", "9", "0","7","19","4", "stop"]);