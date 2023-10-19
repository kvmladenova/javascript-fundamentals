function printEl (arr){
    let step = Number (arr[arr.length - 1]);
    let result = [];

    for (let i = 0; i < arr.length - 1; i += step){
        let firstEl = arr[i];
        result.push(firstEl);

    }
    console.log(result.join(' '));
}
printEl (['5', '20', '31', '4', '20', '2']);
printEl (['dsa', 'asd', 'test', 'test', '2']);
printEl (['1', '2', '3', '4', '5', '6'])