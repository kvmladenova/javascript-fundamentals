function requiredReading (bookPages, pagePerHour, pagesPerDay){
    let totalTimeRead = bookPages / pagePerHour;
    let hourPerDay = totalTimeRead / pagesPerDay;

    console.log(hourPerDay);

}
requiredReading ('212','20','2');
requiredReading ('432', '15', '4');