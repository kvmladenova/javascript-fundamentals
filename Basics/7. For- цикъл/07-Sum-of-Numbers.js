function sumOfNumbers (input) {
    let text = input [0];
    let sum = 0;
    for (let t=0; t < text.length; t++){
        let char = text [t];
        let num = Number (char);
        sum += num;
    }
    console.log(`The sum of the digits is: ${sum}`);
}
sumOfNumbers (["567"])