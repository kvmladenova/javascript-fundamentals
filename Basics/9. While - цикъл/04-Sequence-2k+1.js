function sequence (input){
    let n = Number (input [0]);
    let nextNum = 1;

    while (nextNum <= n){
         console.log(nextNum);
         nextNum = nextNum * 2 + 1;
    }
}
sequence (['3'])