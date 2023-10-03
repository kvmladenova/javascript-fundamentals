function oscars (input){
    let nameOfActor = input [0];
    let startingPoints = Number (input[1]);
    let juryCount = Number (input [2]);

    let allPoints = startingPoints;

    for (let i=1; i < juryCount * 2; i += 2){
        let juriName = input[i+2];
        let juriPoints = Number(input[i+3]);

        allPoints += (juriName.length * juriPoints)/2;

        if (allPoints > 1250.5){
            break;
        }
    }

        if (allPoints > 1250.50){
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${allPoints.toFixed(1)}!`);
        } else {
            console.log(`Sorry, ${nameOfActor} you need ${(1250.50-allPoints).toFixed(1)} more!`);
        }
    }
oscars (["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])