function accountBalasnce (input){
    let command = input[0];
    let balans = 0;
    let index = 1;

    while (command != 'NoMoreMoney'){
       let sum = Number (command);
      
       if(sum <0){
       console.log("Invalid operation!");
       break;
       }

       balans += sum;

console.log(`Increase: ${sum.toFixed(2)}`);

       command = input  [ index];
       index++;
    }
    console.log(`Total ${balans.toFixed(2)}`);
}
accountBalasnce (["5.51",

"69.42",

"100",

"NoMoreMoney"])