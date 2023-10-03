function walking(input){
    let allSteps = 0;
    let index = 0

    while (allSteps < 10000){
        if(input[index] === 'Going home'){
            allSteps += Number (input[index+1]);
            break;
        }
        
        allSteps += Number( input[index]);
        index ++;
    }

    if (allSteps<10000){
        console.log(`${10000-allSteps} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${allSteps - 10000} steps over the goal!"`);
    }
}
walking (["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
