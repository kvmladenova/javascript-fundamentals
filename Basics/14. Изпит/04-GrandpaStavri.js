function grandpaStavri (input){
    let dayCount = Number (input[0]);

    let rakiaLiterCount = 0;
    let degreesCount = 0;

    for (let i = 1; i <= dayCount*2; i +=2){
        let rakia = Number(input [i]);
        rakiaLiterCount += rakia;

        let degrees = Number(input[i+1]);
        let degreesPerDay = rakia * degrees
        degreesCount += degreesPerDay;
    }

    let avrDegrees = degreesCount / rakiaLiterCount;
    
    console.log(`Liter: ${rakiaLiterCount.toFixed(2)}`);
    console.log(`Degrees: ${avrDegrees.toFixed(2)}`);

    if (avrDegrees < 38){
        console.log('Not good, you should baking!');
    } else if (avrDegrees <= 42){
        console.log(`Super!`);
    } else {
        console.log('Dilution with distilled water!');
    }
}
grandpaStavri (["2",
"200",
"43",
"200",
"4"])
