function negativOrPositive(arr){
    let result = [];

    for (let item of arr){
        if (item >= 0){
            result.push(item);
        } else if (item < 0){
            result.unshift (item);
        }
    }
    console.log(result.join('\n'));
}
negativOrPositive (['7', '-2', '8', '9']);
negativOrPositive (['3', '-2', '0', '-1']);