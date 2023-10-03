function password (input){
    let username = input [0];
    let pass = input [1];
    let guessPass = input [2];

    let index = 3;
    
    while (guessPass != pass){
        guessPass = input [index];
        index++;
    }

    console.log(`Welcome, ${username}`);
}
password (["Nakov",

"1234",

"Pass",

"1324",

"1234"])