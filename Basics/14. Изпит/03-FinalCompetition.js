function finalCompetition (input){
    let dancersCount = Number (input[0]);
    let pointsCount = Number (input [1]);
    let seasons = input [2];
    let places = input[3];
    let moneyPrice = 0;

    switch (places){
        case 'Bulgaria':
            moneyPrice = dancersCount * pointsCount;
            if (seasons === 'summer'){
                moneyPrice = moneyPrice * 0.95;
            } else if (seasons === 'winter'){
                moneyPrice = moneyPrice * 0.92;
            }
            break;
        case 'Abroad':
            moneyPrice = dancersCount * pointsCount * 1.5;
            if (seasons === 'summer'){
                moneyPrice = moneyPrice * 0.90;
            } else if (seasons === 'winter'){
                moneyPrice = moneyPrice * 0.85;
            }
            break;
    }
    let donationMoney = moneyPrice * 0.75;
    let leftMoney = moneyPrice - donationMoney;
    let moneyPerPerson = leftMoney / dancersCount;

    console.log(`Charity - ${donationMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerPerson.toFixed(2)}`);
}
finalCompetition (["1",
"89.5",
"summer",
"Abroad"])
