function lunchTimeNew (input){
    let nameOfSerial = input[0];
    let timeOfEpizode = Number (input[1]);
    let timeOfBreak = Number (input[2]);

    let timeForLunch = timeOfBreak / 8;
    let freeTime = timeOfBreak / 4;
    let leftTime = timeOfBreak - timeForLunch - freeTime;

    if (leftTime >= timeOfEpizode){ 
        let timeFinal = Math.ceil(leftTime - timeOfEpizode)
        console.log(`You have enough time to watch ${nameOfSerial} and left with ${timeFinal} minutes free time.`);
    } else {
        let neededTime = Math.ceil( timeOfEpizode - leftTime)
        console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${neededTime} more minutes.`);
    }
}
//lunchTimeNew (["Game of Thrones", "60", "96"]);
lunchTimeNew (["Teen Wolf", "48", "60"])