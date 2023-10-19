function arrayManipulator (nums, commands){
    for(let command of commands){
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action == 'add'){
            let idx = Number (tokens[1]);
            let num = Number (tokens[2]);

            nums.splice(idx, 0, num); //отива на даден индекс, трие 0 елементи и добавя новите числа num

        } else if (action == 'addMany'){
            let idx = Number (tokens[1]);
            let numsToAdd = tokens.slice(2, ).map(Number); //имаме елементи за добавяне от втори индек до края на масива
       
            for(let num of numsToAdd){
                num=Number(num);
                num.splice(idx, 0, num);
                idx++;
            }
        } else if (action == 'contains'){
            let num = Number(tokens[1]);
            let idx = nums.indexOf(num);
            console.log(idx);
        } else if (action == 'remove'){
            let idx = Number (tokens[1]);
            nums.splice(idx, 1);
        } else if (action =='shift'){
            let rotations = Number(tokens[1]);

            for(let rotation = 1; rotation <= rotations ; rotation++){
                let firstNum= nums.shift();
                nums.push(firstNum)
            }
        } else if (action == 'sumPairs'){
            let pairedArr= [];
            for( let i = 0; i < nums.length; i+= 2){
                
                if( i + 1 < nums.length){
                     pairedArr. push(nums[1] + nums[i+1]);
                } else {
                    pairedArr.push(nums[i])
                }               
            }
            nums = pairedArr;
        } else if (action == 'print'){
            console.log(`[ ${nums.join(',') }]`);
        }

    }

}
arrayManipulator ([1, 2, 4, 5, 6, 7],
    ['add 1 8', 
    'contains 1', 
    'contains 3',
    'print'])