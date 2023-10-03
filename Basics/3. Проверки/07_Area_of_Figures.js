function areaOfFigures (input){
    let figure = input [0];
    let side1 = Number (input[1]);
    let side2 = Number (input[2]);

    if (figure === "square"){
        console.log((side1 * side1).toFixed(3));
    } else if (figure === "rectangle"){
        console.log((side1 * side2.toFixed(3)));
    } else if (figure === "circle"){
        console.log((Math.PI*side1**2).toFixed(3));
    } else if (figure === "triangle"){
        console.log(((side1*side2)/2).toFixed(3));
    }
}
areaOfFigures (["triangle",
"4.5",
"20"])


