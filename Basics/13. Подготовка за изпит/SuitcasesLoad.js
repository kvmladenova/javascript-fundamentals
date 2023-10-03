function suitecasesLoad (input){
    let maxVolumeOfSuitecases = Number (input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let suitecaseCouter = 0;

    while (command != 'End'){
        let nextVolumeSiutecases = Number (command);
        if (nextVolumeSiutecases > maxVolumeOfSuitecases){
            console.log(`No more space!`);
            break;
        }
        if (index === 4){
            nextVolumeSiutecases = nextVolumeSiutecases*1.1;
        }
        maxVolumeOfSuitecases -= nextVolumeSiutecases;

        suitecaseCouter++;
        command = input[index];
        index++

    }

    if (command === 'End'){
           console.log(`Congratulations! All suitecases are loaded!`); 
    }

    console.log(`Statistic: ${suitecaseCouter} suitcases loaded.`);
}
suitecasesLoad (["700.5",

"180",

"340.6",

"126",

"220"])