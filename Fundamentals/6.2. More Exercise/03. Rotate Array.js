function rotateArray (arr){
    let rotationCount = Number (arr[arr.length - 1]);
    arr.pop(rotationCount);

    for (let i = 1; i <= rotationCount; i++){
        let lastEl = arr[arr.length - 1];
        arr.pop(lastEl);
        arr.unshift(lastEl);
    }
    console.log(arr.join(' '));
}
rotateArray (['1', '2', '3', '4', '2']);
rotateArray (['Banana', 'Orange', 'Coconut', 'Apple', '15']);
