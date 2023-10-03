function newHouse (input) {
    let flowers = input [0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
  
    switch (flowers){
        case 'Roses':
            price = flowersCount * 5;
            if (flowersCount > 80){
                price -= price * 0.1;
            }
            break;
        case 'Dahlias':
            price = flowersCount * 3.8;
            if (flowersCount > 90){
                price -= price * 0.15;
            }
            break;
        case 'Tulips':
            price = flowersCount * 2.8;
            if (flowersCount > 80){
                price -= price * 0.15;
            }
             break;
        case 'Narcissus':
            price = flowersCount * 3;
            if (flowersCount < 120){
                price += price * 0.15;
            }
            break;
        case 'Gladiolus':
            price = flowersCount * 2.5;
            if (flowersCount < 80){
                price += price * 0.20;
            }
            break;
    }
    if (price <= budget){
        let moneyLeft = budget - price;
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${moneyLeft.toFixed(2)} leva left.`);
     } else {
        let moneyNeeded = price - budget
         console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
         }
}
newHouse (["Roses",
"55",
"250"])
