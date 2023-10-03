function projectCreation(input){
    let arhitect = input [0];
    let projectCount = Number(input[1]);
    let hours = projectCount * 3;
    let result = `The architect ${arhitect} will need ${hours} hours to complete ${projectCount} project/s.`

    console.log(result);
}

projectCreation(["George ","4 "]);