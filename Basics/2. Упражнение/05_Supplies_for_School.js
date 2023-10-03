function suppliesForSchool (inputArray){
    let pensCount = Number(inputArray[0]);
    let markersCount = Number (inputArray[1]);
    let preparationLiters = Number (inputArray [2]);
    let percentageReduction = Number (inputArray [3]);
    let sum = pensCount*5.8 + markersCount*7.2 + preparationLiters*1.2

    console.log(sum-sum*percentageReduction/100);
}

suppliesForSchool(["2 ","3 ","4 ","25 "]);