function numbersDivisibleByNine (input){
    let startNum = Number (input [0]);
    let endNum = Number (input [1]);
    
    let sum = 0;
    let next = '';

    for (let num = startNum; num <= endNum; num++) {
        if (num % 9 ===    0){
            sum += num;
            next += num +'\n';
        }
    }

    console.log(`The sum is: ${sum}`);
    console.log(next);
}
numbersDivisibleByNine (["100", "200"])