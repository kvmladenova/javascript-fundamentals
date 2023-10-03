function toyShop (input){
    let sumTour = Number (input[0]);
    let puzzles = Number (input[1]);
    let dolls = Number (input[2]);
    let bears = Number (input[3]);
    let minions = Number (input[4]);
    let trucks = Number (input[5]);

    let toysCount = puzzles + dolls + bears + minions + trucks;
    let sum = puzzles*2.6 + dolls*3 + bears*4.1 + minions*8.2 + trucks*2;

    if (toysCount >= 50){
        sum = 0.75*sum;
    }

    sum = 0.9*sum;

    if (sum >= sumTour){
        let moneyLeft = sum - sumTour;
        console.log(`Yes! ${(moneyLeft.toFixed(2))} lv left.`);
    } else {
        let moneyNeeded = sumTour - sum ;
        console.log(`Not enough money! ${(moneyNeeded.toFixed(2))} lv needed.`);}
}
toyShop (["40.8","20","25","30","50","10"])