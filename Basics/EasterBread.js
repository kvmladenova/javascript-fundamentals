function easterBread (input){
    let easterBreadCount = Number (input[0]);
    let maxPoint = 0;
    let index = 1;
    let command = input [index];
    let name = '';

    for (let cur=1; cur <= easterBreadCount; cur++){
        let nameChef = input[index];
        index ++;
        let totalpoint = 0;

        let curPoint = input[index];
        while (curPoint != 'Stop'){
            let point = Number (curPoint);
            totalpoint += point;

            index++;
            curPoint = input[index];
        }
        console.log(`${nameChef} has ${totalpoint} points.`);
        index ++;
        curPoint = input[index];
        
        if (totalpoint > maxPoint){
            maxPoint = totalpoint;
            name = nameChef;
            console.log(`${nameChef} is the new number 1!`);
        }

    }
    console.log(`${name} won competition with ${maxPoint} points`);
}
    

easterBread (["2","Chef Angelov","9","9","9","Stop",
"Chef Rowe","10","10","10","10","Stop"])