function sceleton(arr){
let controlMinutes = Number(arr[0])
let controlSeconds = Number(arr[1])
let distanceInMeters = Number(arr[2])
    let hundretMetersInSeconds =  Number(arr[3]);

    let allControlInSeconds = controlMinutes*60+controlSeconds;

    let lowerTimesInControl = distanceInMeters / 120;
    let lowerTimeInSeconds = lowerTimesInControl*2.5;
    let mariasTime = (distanceInMeters / 100)*hundretMetersInSeconds - lowerTimeInSeconds

    if(mariasTime<=allControlInSeconds){
console.log(`Marin Bangiev won an Olympic quota!`)
console.log(`His time is ${mariasTime.toFixed(3)}.`)

    }else{
console.log(`No, Marin failed! He was ${(mariasTime-allControlInSeconds).toFixed(3)} second slower.`)
    }
}
sceleton(["2",

"12",

"1200",

"10"])