function fishingBoat (input) {
    let budget = Number (input[0]);
    let season = input [1];
    let fisherCount = Number (input[2]);
    let rentBoat = 0;
    
    switch (season){
        case 'Spring':
            rentBoat = 3000;
            if (fisherCount <= 6){
                rentBoat -= rentBoat*0.10;
            } else if (fisherCount>7 && fisherCount <= 11){
                rentBoat -= rentBoat*0.15;
            } else if (fisherCount > 12){
                rentBoat -= rentBoat*0.25;
            };

            if (fisherCount % 2 ===0){
                rentBoat -= rentBoat*0.05;
            };

            if (rentBoat <= budget){
                let moneyLeft = budget - rentBoat;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            } else if (rentBoat > budget){
                let moneyNeeded = rentBoat - budget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            };
            break;
        case 'Summer':
            rentBoat = 4200;
            if (fisherCount <= 6){
                rentBoat -= rentBoat*0.10;
            } else if (fisherCount>7 && fisherCount <= 11){
                rentBoat -= rentBoat*0.15;
            } else if (fisherCount > 12){
                rentBoat -= rentBoat*0.25;
            };

            if (fisherCount % 2 ===0){
                rentBoat -= rentBoat*0.05;
            };

            if (rentBoat <= budget){
                let moneyLeft = budget - rentBoat;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            } else if (rentBoat > budget){
                let moneyNeeded = rentBoat - budget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            };
            break;
        case 'Autumn':
            rentBoat = 4200;
            if (fisherCount <= 6){
                rentBoat -= rentBoat*0.10;
            } else if (fisherCount>7 && fisherCount <= 11){
                rentBoat -= rentBoat*0.15;
            } else if (fisherCount > 12){
                rentBoat -= rentBoat*0.25;
            };

                if (rentBoat <= budget){
                let moneyLeft = budget - rentBoat;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            } else if (rentBoat > budget){
                let moneyNeeded = rentBoat - budget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            };
            break;
        case 'Winter':
            rentBoat = 2600;
            if (fisherCount <= 6){
                rentBoat -= rentBoat*0.10;
            } else if (fisherCount>7 && fisherCount <= 11){
                rentBoat -= rentBoat*0.15;
            } else if (fisherCount > 12){
                rentBoat -= rentBoat*0.25;
            };

            if (fisherCount % 2 ===0){
                rentBoat -= rentBoat*0.05;
            };

            if (rentBoat <= budget){
                let moneyLeft = budget - rentBoat;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            } else if (rentBoat > budget){
                let moneyNeeded = rentBoat - budget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            };
            break;
    }
}

fishingBoat (["2000",
"Winter",
"13"])


