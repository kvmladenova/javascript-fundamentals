function worldSwimmingRecord (input){
    let worldRecord = Number (input[0]);
    let distanceInMetres = Number (input[1]);
    let timeInSecondsForOneM = Number (input[2]);

    let timeWithoutResistance = distanceInMetres * timeInSecondsForOneM ;
    let resistance = Math.floor(distanceInMetres / 15) * 12.5;
    let totalTimeIvan = timeWithoutResistance + resistance;

    if (totalTimeIvan<worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalTimeIvan.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTimeIvan-worldRecord).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord (["55555.67",

"3017","5.03"])