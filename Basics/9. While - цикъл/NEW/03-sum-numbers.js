function sumNumbers (input){
    let firstNum = Number (input[0]);
    let curNum = Number (input[1]);
    let curSum = 0;

    let index = 2;

    while (curSum < firstNum){
        curSum += curNum;
        curNum = Number (input [index]);
        index++;
    }
    console.log(curSum);
}
sumNumbers (["20", "1", "2", "3", "4", "5", "6"])