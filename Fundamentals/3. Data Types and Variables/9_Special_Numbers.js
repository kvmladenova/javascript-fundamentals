function specialNumbers (start){
    let sum = 0;
    let curNum = '';

    for (let i = 1; i <= start; i++){
        curNum = String (i);
        let num = Number (curNum);
        while (num!=0) {
        let units = num % 10;
        num -= units;
        num /= 10;
        sum += units;
    }
        if (sum%5==0 || sum%7==0 || sum%11 ==0){
            console.log(`${curNum} -> True`);
        } else {
            console.log((`${curNum} -> False`));
        }
    }
    }
specialNumbers ('5');
// specialNumbers ('20');