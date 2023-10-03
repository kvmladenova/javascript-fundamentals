function easterDecoration (input){
    let clientCount = input [0];
    let index = 1;
    let totalPrice = 0;

    for (let current = 1; current <= clientCount; current++){
        let decorationType = input[index];
        index ++;
        let price = 0;
        let itemCounter = 0;
            
        while (decorationType != 'Finish'){
            if (decorationType === 'basket'){
                price += 1.5;
            } else if (decorationType === 'wreath'){
                price += 3.8;
            } else if (decorationType === 'chocolate bunny'){
                price +=7;
            }
        itemCounter++;

        decorationType = input[index];
        index++;
        } 

        if (itemCounter % 2 === 0){
            price = price * 0.80;
        }
        
        console.log(`You purchased ${itemCounter} items for ${price.toFixed(2)} leva.`)
        totalPrice += price
        decorationType = input [index];
    }
     console.log(`Average bill per client is: ${(totalPrice/clientCount).toFixed(2)} leva.`);
}
easterDecoration (["2",
"basket","wreath","chocolate bunny","Finish",
"wreath","chocolate bunny","Finish"])
