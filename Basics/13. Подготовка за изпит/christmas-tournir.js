function christmasTournir (input){
    let tournamentDays = Number (input[index]);
    let allDaysSum = 0;
    let index = 1;
    let curInput = input[index];

    for (let day = 1; day < tournamentDays; day++){
        let curDayWins = 0;
        let curDayLoses = 0;
        let curDaySum = 0
        while (curInput !== 'Finish'){
                if (curInput === 'Win'){
                    curDayWins++;
                    finalSum += 20;
                } else if (curInput === 'Lose'){
                    curDayLoses++;
                }
                index ++;
                curInput = input[index];

        }
        if (curDayWins>curDayLoses){
            allDaysSum *= 1.10;
        }
    }
}
christmasTournir(["2",

"volleyball",

"win",

"football",

"lose",

"basketball",

"win",

"Finish",

"golf",

"win",

"tennis",

"win",

"badminton",

"win",

"Finish"])