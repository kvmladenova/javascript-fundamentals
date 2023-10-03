function vacation (group, type, day){
    let pricePrePerson = 0;
    switch (type){
        case 'Students':
            if (day == 'Friday'){
                pricePrePerson = 8.45;
            } else if (day == 'Saturday'){
                pricePrePerson = 9.80;
            } else if ( day == 'Sunday'){
                pricePrePerson = 10.46;
            }
            break;
        case 'Business':
            if (day == 'Friday'){
                pricePrePerson = 10.90;
            } else if (day == 'Saturday'){
                pricePrePerson = 15.60;
            } else if ( day == 'Sunday'){
                pricePrePerson = 16;
            }
            break;
        case 'Regular':
            if (day == 'Friday'){
                pricePrePerson = 15;
            } else if (day == 'Saturday'){
                pricePrePerson = 20;
            } else if ( day == 'Sunday'){
                pricePrePerson = 22.50;
            }
            break;
    }

    let totalPrice = group * pricePrePerson;

    if (type == 'Students' && group >= 30){
        totalPrice = 0.85 * totalPrice;
    }
    if (type == 'Business' && group >= 100){
        let freePrice = 10 * pricePrePerson;
        totalPrice -= freePrice;
    }
    if (type == 'Regular' && (group >= 10 && group <= 20)){
        totalPrice = 0.95 * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

} 

vacation (30,"Students","Sunday")
vacation (40,"Regular","Saturday")