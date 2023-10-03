function amazingNumbers (num){
    let numAsString = String (num)
    let sum = 0;
 
    for (let i = 0; i < numAsString.length; i++){
        sum += Number (numAsString[i]);
    }

    let  sumAsStr = String (sum);
    let isAmazing = 'False'

     for (let i=0; i < sumAsStr.length; i++){
        if (sumAsStr [i] == '9'){
            isAmazing = 'True'
        }
     }

     console.log(`${num} Amazing? ${isAmazing}`);

}
amazingNumbers (1233);
amazingNumbers (999);