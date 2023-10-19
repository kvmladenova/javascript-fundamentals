function smallestTwoNumber(arr){
    let sortArr = arr.sort((a,b) => a-b)

    let sliceArr = sortArr.slice (0, 2)
    console.log(sliceArr.join(' '));

    
}
smallestTwoNumber ([30, 15, 50, 5]);
smallestTwoNumber ([3, 0, 10, 4, 7, 3]);