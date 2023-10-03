function lunchBreak (input){
    let nameSerial = input [0];
    let epizodeTime = Number (input[1]);
    let breakTime = Number (input [2]);

    let lunchTime = breakTime / 8;
    let lunchBreakTime = breakTime / 4;
   
    let totalTakenTime = lunchTime + lunchBreakTime;
    let timeLeft = breakTime - totalTakenTime;

    if (timeLeft >= epizodeTime){
        let timeFinal = Math.ceil(timeLeft - breakTime);
        console.log(`You have enough time to watch ${nameSerial} and left with ${timeFinal} minutes free time`);
    } else {
        let timeNeeded = math.ceil (breakTime - timeLeft)
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${timeNeeded} more minutes.`);
    }
}
lunchBreak (["Game of Thrones",

"60",

"96"])