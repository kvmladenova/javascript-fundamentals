function birthdayParty (input){
    let rent = Number (input [0]);
    let cake = 0.2* rent;
    let drink = cake - 0.45 * cake;
    let animator = rent / 3;

    let budget = rent + cake + drink + animator;

    console.log(budget);
}
birthdayParty (["2250"])