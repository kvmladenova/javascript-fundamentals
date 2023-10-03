function bestPlayer (input){
    let index = 0;
    let command = input[index];
    let bestresult = 0;
    let playerWithBestResult = '';
    let hatTrick = false;

    while (command != 'END'){
        let namePlayer = command;
        index++;
        let goals = Number (input[index]);

        if (goals > bestresult){
            bestresult = goals;
            playerWithBestResult = namePlayer 
        }

         if (goals >=  3){
            hatTrick = true;
        }
        if (goals >= 10){
            break;
        }

       

        index++;
        command = input[index];
       
    }

    console.log(`${playerWithBestResult} is the best player!`);

    if (hatTrick) {
        console.log(`He has scored ${bestresult} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestresult} goals.`);
    }
}
bestPlayer (["Petrov",
"2",
"Drogba",
"11"])


