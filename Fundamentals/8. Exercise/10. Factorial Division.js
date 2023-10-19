function factorialDivision (num1, num2){
    let factorial1 = factorial (num1);
    let factorial2 = factorial (num2);

    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));

    function factorial (num){
        let product = 1;
        for (let i = 1; i <= num; i ++){
            product *= i;
        }
        return product;
    }
}
factorialDivision (5, 2);
factorialDivision (6, 2);