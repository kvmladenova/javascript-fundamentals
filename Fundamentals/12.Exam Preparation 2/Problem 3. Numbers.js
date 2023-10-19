function numbers(str){
    let nums = str.split(' ').map(Number);
    let sum = 0;
    let count = 0;

    for(let num of nums){
        sum += num;
        count++;
    }

    let avgNum = sum / count;
    
    let newArr = [];

    for (let i = 0; i < nums.length; i++){
        if(nums[i] > avgNum){
            newArr.push(nums[i]);
        } 
    }

    if( newArr.length == 0){
        console.log('No');
    } else if(newArr.length > 5){
        let sort = newArr.sort((a,b) => b-a);
        let result = sort.splice(0,5);
        console.log(result.join(' '));
    } else {
        let sort = newArr.sort((a,b) => b-a);
        console.log(sort.join(' '));
    }
      

}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6')