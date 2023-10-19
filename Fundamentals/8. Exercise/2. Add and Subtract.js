function addAndSubtract (a, b, c){
    let result1 = sum (a,b);
    let result2 = subtract(result1, c);

    function sum (num1, num2){
        return  num1 + num2;
    }

    function subtract (num1, num2){
        return num1 - num2;
    }

    console.log(result2);
}
addAndSubtract(23, 6, 10);