function maidenParty (input){
    let maidenPartyPrice = Number (input[0]);
    let loveLetterCount = Number (input [1]);
    let rosesCount = Number (input[2]);
    let keychainCount = Number (input[3]);
    let caricaturieCount = Number (input[4]);
    let luckySurpriceCount = Number (input[5]);

    let totalPriceFromSales = loveLetterCount * 0.60 + rosesCount * 7.20 + keychainCount * 3.60 + caricaturieCount * 18.20 + luckySurpriceCount * 22;
    let totalCountArticul = loveLetterCount + rosesCount + keychainCount + caricaturieCount + luckySurpriceCount;

    if (totalCountArticul >= 25){
        totalPriceFromSales = totalPriceFromSales * 0.65;
    }

    let finalWin = totalPriceFromSales * 0.90;

   
    if (finalWin >= maidenPartyPrice){
        let moneyLeft = finalWin - maidenPartyPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeede = maidenPartyPrice - finalWin;
        console.log(`Not enough money! ${moneyNeede.toFixed(2)} lv needed.`);
    }
}
maidenParty (["40.8",
"20",
"25",
"30",
"50",
"10"])
