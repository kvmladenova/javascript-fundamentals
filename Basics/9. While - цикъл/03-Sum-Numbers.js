function sumNumbers (input){
    let targetSum = Number (input [0]);
    let curSum = 0;

    let num = Number (input[1]);
    let index = 2;

    while (curSum < targetSum){
        curSum += num;
        num= Number (input[index]);
        index++;
    }
    console.log(curSum);
}
sumNumbers (["20", "1", "2", "3", "4", "5", "6"])