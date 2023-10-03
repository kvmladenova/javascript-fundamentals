function specialNumber (input){
    let n = Number (input[0]);
    let result = '';

    for (let curNum = 1111; curNum < 9999; curNum++){
        let isSpecial = true;

        let curNumAsString = curNum.toString();

        for (let i = 0; i <curNumAsString.length; i ++){
            let curDigit = Number (curNumAsString[i]);

            if (n % curDigit !== 0){
                isSpecial = false;
                break;
            }
        }

        if (isSpecial === true){
            result += curNum + ' ';
        }
    }
    console.log(result);
}
specialNumber (["3"])