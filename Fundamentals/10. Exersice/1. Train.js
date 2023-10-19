function train (arr){
    let wagon = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr[0]);
    
    
    for(let i = 1; i < arr.length; i++){
        let command = arr[i];
        let tokens = command.split(' ');
        
        if (tokens[0] == 'Add'){
            let passangers = Number(tokens[1]);
            wagon.push(passangers);
        } else {
            let passangers = Number(tokens[0]);

            for (let index = 0; index < wagon.length; index++){
                if (wagon[index] + passangers <= maxCapacity){
                    wagon[index] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagon.join(' '));
}
// train (['32 54 21 12 4 0 23',
// '75',
// 'Add 10',
// 'Add 0',
// '30',
// '10',
// '75']);

train (['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])