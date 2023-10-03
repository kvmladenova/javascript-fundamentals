function paintingEggs (input){
    let sizeOfEggs = input [0];
    let colorOfEggs = input [1];
    let countOfPartidies = Number (input[2]);
    let price = 0;

    switch (sizeOfEggs){
        case 'Large':
            if (colorOfEggs === 'Red'){
                price = countOfPartidies * 16;
            } else if (colorOfEggs === 'Green'){
                price = countOfPartidies * 12;
            } else if (colorOfEggs === 'Yellow'){
                price = countOfPartidies * 9;
            }
            break;
        case 'Medium':
            if (colorOfEggs === 'Red'){
                price = countOfPartidies * 13;
            } else if (colorOfEggs === 'Green'){
                price = countOfPartidies * 9;
            } else if (colorOfEggs === 'Yellow'){
                price = countOfPartidies * 7;
            }
            break;
        case 'Small':
            if (colorOfEggs === 'Red'){
                price = countOfPartidies * 9;
            } else if (colorOfEggs === 'Green'){
                price = countOfPartidies * 8;
            } else if (colorOfEggs === 'Yellow'){
                price = countOfPartidies * 5;
            }
            break;
    }
    let totalPrice = price * 0.65;
    console.log(`${totalPrice.toFixed(2)} leva.`);
}
paintingEggs (["Large","Red","7"])