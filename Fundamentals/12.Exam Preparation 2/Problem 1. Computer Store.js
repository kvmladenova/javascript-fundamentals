function computerStore (arr){
    let customer = arr.pop();
    let priceNoTax = 0;
    let priceArr = arr.map(Number);

    
    for (let i = 0; i < priceArr.length; i++){
        if (priceArr[i] < 0){
            console.log("Invalid price!");
            continue;
        } else {
            priceNoTax += priceArr[i];
        }
    }

    let taxes = priceNoTax * 0.2;
    let totalPrice = priceNoTax + taxes;

    if(customer == 'special'){
        totalPrice = totalPrice * 0.9;
    }

    if (totalPrice == 0){
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);

    }
    
}
// computerStore ([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
//     ])

// computerStore ([
//     '1023', 
//     '15', 
//     '-20',
//     '-5.50',
//     '450', 
//     '20', 
//     '17.66', 
//     '19.30', 'regular'
//     ])
    
computerStore ([
    'regular'
    ])
     