function timePlusFifteenMinustes (input){
    let hours = Number (input[0]);
    let minutes = Number (input[1]);

    let hoursToMinutes = hours * 60;
    let totalMinutes = hoursToMinutes + minutes + 15;

    let newHours = Math.trunc(totalMinutes/60);
    let newMinutes = totalMinutes % 60;

    if (newHours == 24){
        newHours = 0;
    }
    if (newMinutes < 10) {
        console.log(`${newHours}:0${newMinutes}`);
    } else {
        console.log(`${newHours}:${newMinutes}`)}
}

timePlusFifteenMinustes(["23","59"]);