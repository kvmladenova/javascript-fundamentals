function integerAndFloat (firstNum, secNum, ednNum){
    let sum = Number(firstNum) + Number(secNum) + Number(ednNum);
    if (sum % 1 == 0){
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
// integerAndFloat ('9', '100', '1.1');
integerAndFloat ('100', '200', '303')
