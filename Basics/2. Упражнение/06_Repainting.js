function repaining (inputArray){
    let nylon = Number(inputArray[0]);
    let paint = Number (inputArray[1]);
    let thinner = Number (inputArray[2]);
    let hous = Number (inputArray[3]);
    const bag = 0.40;
    let sum = (nylon+2)*1.5 + (paint*110/100)*14.5 + thinner*5 + bag;
    let master = (sum*30/100)*hous;

    console.log(sum+master);

}

repaining (["10 ","11 ","4 ","8 "])