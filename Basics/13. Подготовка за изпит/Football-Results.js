function footballResults (input){
    let firstResult = input [0];
    let seondResult = input [1];
    let finalResult = input[2];

    let wins = 0;
    let draws = 0;
    let loses = 0;

    let ourTeamFirstResult = Number(firstResult [0]);
    let enemyTeamFirstResult = Number (firstResult[2]);
    if(ourTeamFirstResult > enemyTeamFirstResult){
        wins++;
    } else if (ourTeamFirstResult === enemyTeamFirstResult){
        draws++;
    } else if (ourTeamFirstResult < enemyTeamFirstResult){
        loses++;
    }

    let ourTeamSecondResult = Number(seondResult [0]);
    let enemyTeamSecondResult = Number (seondResult[2]);
    if(ourTeamSecondResult > enemyTeamSecondResult){
        wins++;
    } else if (ourTeamSecondResult === enemyTeamSecondResult){
        draws++;
    } else if (ourTeamSecondResult < enemyTeamSecondResult){
        loses++;
    }

    let ourTeamFinalResult = Number(finalResult [0]);
    let enemyTeamFinaleResult = Number (finalResult[2]);
    if(ourTeamFinalResult > enemyTeamFinaleResult){
        wins++;
    } else if (ourTeamFinalResult === enemyTeamFinaleResult){
        draws++;
    } else if (ourTeamFinalResult < enemyTeamFinaleResult){
        loses++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${draws}`); 
}
footballResults (["3:1","0:2","0:0"])