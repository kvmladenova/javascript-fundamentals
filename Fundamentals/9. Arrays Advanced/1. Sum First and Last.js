function sumFirstLast (arr){
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());
    console.log(firstNum + lastNum);
}
sumFirstLast (['20', '30', '40']);
sumFirstLast (['5', '10']);