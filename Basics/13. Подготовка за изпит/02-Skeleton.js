function skeleton (input){
    let controlMinutes = Number (input[0]);
    let controlSeconds = Number (input[1]);
    let spaceInMeters = Number (input[2]);
    let secondsForHundredMeters = Number (input[3]);

    let totalSecond = controlMinutes * 60 + controlSeconds;
    let timeLess = (spaceInMeters / 120) * 2.5;

    let timeMartin =  (spaceInMeters / 100) * secondsForHundredMeters - timeLess;

    if (timeMartin > totalSecond){
        let neededTime = timeMartin - totalSecond;
        console.log(`No, Marin failed! He was ${neededTime} second slower.`);
    } else {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${timeMartin.toFixed(3)}.`);
    } 
}
skeleton (["1","20","1546","12"])