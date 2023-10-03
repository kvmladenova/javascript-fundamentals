function careOfPuppy (input){
    let puppyFood = Number (input[0]);
    let puppyFoodGram = puppyFood * 1000;
    let totalEatenFood = 0;

    let index = 1;
    let command = input [index];
    index++;

    while (command != 'Adopted'){
        let puppyFoodEat = Number (command);
        totalEatenFood += puppyFoodEat;

        command = input[index];
        index++;
    }

    if(puppyFoodGram >= totalEatenFood){
        console.log(`Food is enough! Leftovers: ${puppyFoodGram - totalEatenFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${totalEatenFood - puppyFoodGram} grams more.`);
    }
}
careOfPuppy (["4","130","345","400","180","230","120","Adopted"])