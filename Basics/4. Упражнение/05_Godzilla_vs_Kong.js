function godzilaVsKing (input){
    let budget = Number (input[0]);
    let actorsCount = Number (input[1]);
    let clothesPricePerActors = Number (input[2]);

    let sumDecor = budget * 0.1;
    let sumClothes = actorsCount * clothesPricePerActors;

    if (actorsCount > 150){
        sumClothes = 0.9 * sumClothes;
    }

    let clothesPlusDecor = sumClothes + sumDecor;
    
    if(clothesPlusDecor > budget){
        let moneyNeeded = clothesPlusDecor - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - clothesPlusDecor ;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

godzilaVsKing (["20000","120","55.5"])