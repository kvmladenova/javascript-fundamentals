function mobileOperator(input) {
    let yearContract = input[0];
    let typeContract = input[1];
    let mobileInternet = input[2];
    let mounthCount = Number(input[3]);
    let price = 0;


    switch (typeContract) {
        case 'Small':
           if (yearContract === 'one'){
                price = 9.98;
           } else if (yearContract === 'two'){
                price = 8.58;
           }
           break;
        case 'Middle':
            if (yearContract === 'one'){
                price = 18.99;
           } else if (yearContract === 'two'){
                price = 17.09;
           }
           break;
        case 'Large':
            if (yearContract === 'one'){
                price = 25.98;
           } else if (yearContract === 'two'){
                price = 23.59;
           }
           break;
        case 'ExtraLarge':
            if (yearContract === 'one'){
                price = 35.99;
           } else if (yearContract === 'two'){
                price = 31.79;
           }
           break;
    }
    if (mobileInternet === 'yes'){
        if (price <= 10){
            price += 5.50;
        } else if (price <= 30){
            price +=4;
        } else {
            price += 3.85;
        }
    }

    if (yearContract === 'two'){
        price *= 0.9625;
    }

    let finalPrice = price * mounthCount;

    console.log(`${finalPrice.toFixed(2)} lv.`);
}
mobileOperator(["one", "Small", "yes", "10"])