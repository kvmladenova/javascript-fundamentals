function sequence (input){
    let num = Number (input[0]);
    let index = 1;

    while (index <= num){
        console.log(index);
        index = 2*index + 1;

    }
}
sequence (["3"])