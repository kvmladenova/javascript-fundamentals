function depositCalculator (input) {
    let deposit = Number (input[0]);
    let depositTime = Number (input[1]);
    let depositProcent = Number (input[2]);
    let result = deposit + depositTime*(deposit*(depositProcent/100))/12;

    console.log(result);
}

depositCalculator(["200 ","3 ","5.7 "]);