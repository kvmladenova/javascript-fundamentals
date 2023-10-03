function cake (input){
    let width = Number (input [0]);
    let height = Number (input[1]);

    let index = 2;

    let cakeSize = width * height;
    let currentMissingCakeParts = 0;

    while (currentMissingCakeParts < cakeSize){
        if (input[index] === 'STOP'){
            break;
        }

        currentMissingCakeParts += Number (input[index]);
        index++;
    }

        if (currentMissingCakeParts < cakeSize){
            console.log(`${cakeSize - currentMissingCakeParts} pieces are left.`);
        } else {
            console.log(`No more cake left! You need ${currentMissingCakeParts - cakeSize} pieces more.`);
        }
}
cake (["10","2","2","4","6","STOP"])
