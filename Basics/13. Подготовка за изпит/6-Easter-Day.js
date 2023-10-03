function easterDay (input){
    let easterBreadCount = Number (input[0]);
    let highestPoints = 0;
    let nameWhitMaxPoint = '';
    let index = 1;
    let currentRow = input[index];
    
    for (let current = 1; current <= easterBreadCount; current++ ){
        let currentPoints = 0;

        let chefName = input[index];
        index++;
        currentRow = input[index];

        while (currentRow !== 'Stop'){
            let points = Number (currentRow);
            currentPoints += points;

            index++;
            currentRow = input[index];
        }
        
        console.log(`${chefName} has ${currentPoints} points.`);
        index++;
        currentRow = input[index];   

        if (currentPoints > highestPoints){
            highestPoints = currentPoints;
            nameWhitMaxPoint = chefName;
            console.log(`${chefName} is the new number 1!`);
        }        
    } 
    console.log(`${nameWhitMaxPoint} won competition with ${highestPoints} points!`);
}
easterDay (["3",
"Chef Manchev","10","10","10","10","Stop",
"Natalie","8","2","9","Stop",
"George","9","2","4","2", "Stop"])