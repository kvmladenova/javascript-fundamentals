function multiplicationTable (input) {
    let firstNum = Number (input[0]);
    let secondNum;
    for (secondNum = 1; secondNum <= 10; secondNum++){
        let result = firstNum * secondNum;
        console.log(`${secondNum} * ${firstNum} = ${result}`);
    }
}
multiplicationTable (["5"])