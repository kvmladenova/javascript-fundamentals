function numberPyramid (input){
    let macNum = Number (input[0]);
    let curNum = 1;
    let curRow = 1;
    let curRowNums = 0;
    let result = '';

    while (curNum <= macNum){
        if (curRowNums < curRow){
            result += `${curNum} `;
            curRowNums ++;
        } else {
            result += `\n${curNum} `;
            curRow++;
            curRowNums = 1;
        }


        curNum ++;
    }

    console.log(result);
}
numberPyramid (["7"])