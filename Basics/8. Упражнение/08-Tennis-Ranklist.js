function tennisRanklist (input){
    let tourneyCount = Number (input[0]);
    let startingPoints = Number (input[1]);

    let allPoints = 0;
    let allWins = 0;
    
    for (let i = 0; i < tourneyCount; i++){
        switch (input[i + 2]){
            case 'W':
                allPoints += 2000;
                allWins += 1;
                break;
            case 'F':
                allPoints += 1200;
                break;
            case 'SF':
                allPoints += 720;
                break;
        }
    }
    console.log(`Final points: ${allPoints + startingPoints}`);
    console.log(`Average points: ${Math.floor(allPoints / tourneyCount)}`);
    console.log(`${(((allWins / tourneyCount) * 100).toFixed(2))}%`);
}
tennisRanklist (["5","1400","F","SF","W","W","SF"])