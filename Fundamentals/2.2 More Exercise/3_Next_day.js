function nextDay (year, month, day){
    day = Number (day) + 1;
    if (day > 30){
        day = 1;
        month = Number(month) + 1;
    }
    console.log(`${year}-${month}-${day}`);
}
nextDay ('2016','9','30');
nextDay ('2020','3','24');
nextDay ('1','1','1')