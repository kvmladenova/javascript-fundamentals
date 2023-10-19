function solve (arr){
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++){
        sum1 += arr [i];
    }
    
    let newArr =[];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            arr[i] += i;
            newArr.push(arr[i]);
        } else {
            arr[i] -= i;
            newArr.push(arr[i]);
        }
    }

    let sum2 = 0;
    for (let num of newArr){
        sum2 += num;
    }

    console.log(newArr);
    console.log(sum1);
    console.log(sum2);
}
solve ([5, 15, 23, 56, 35]);
solve ([-5, 11, 3, 0, 2]);
