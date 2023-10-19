function mathPower (n, exponenta){
    let result = 1;
    for (let i = 1; i <= exponenta; i ++){
        result *= n;
    }
    console.log(result);
}
mathPower (2, 8);
mathPower (3, 4);