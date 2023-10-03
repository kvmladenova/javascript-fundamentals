function metersToKilometres (num){
    let meters = Number (num);
    let kilometres = meters / 1000;
    console.log(kilometres.toFixed(2));
}
metersToKilometres ('1852');
metersToKilometres ('798');