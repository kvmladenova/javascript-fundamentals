function firstAndLastKNumbers (arr){
    let k = arr.shift();
    
    let firstKNum = arr.slice(0, k);
    let lastKNum = arr.slice (-k);
    
    console.log(firstKNum.join(' '));
    console.log(lastKNum.join(' '));
}
firstAndLastKNumbers ([2, 7, 8, 9]);
firstAndLastKNumbers ([3, 6, 7, 8, 9]);