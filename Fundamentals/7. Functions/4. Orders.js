function orders (products, quantity){
    let result;
    switch (products){
        case 'coffee':
            result = quantity * 1.50;
            break;
        case 'water':
            result = quantity * 1.00;
            break;
        case 'coke':
            result = quantity * 1.40;
            break;
        case 'snack':
            result = quantity * 2.00;
            break;
    }
    console.log(result.toFixed(2));
}
orders ("water", 5);
orders ("coffee", 2);