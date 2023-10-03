function journey (input){
    let budget = Number (input[0]);
    let season = input [1];
    let price = 0;
        
    if (budget <= 100){
        console.log('Somewhere in Bulgaria');

        if (season === 'summer'){
            price = budget * 0.30;
            console.log(`Camp - ${price.toFixed(2)}`);
        } else if (season === 'winter'){
            price = budget * 0.70;
            console.log(`Hotel - ${price.toFixed(2)}`);
        }
    }

    if (budget > 100 && budget <= 1000){
        console.log('Somewhere in Balkans');

        if (season === 'summer'){
            price = budget * 0.40;
            console.log(`Camp - ${price.toFixed(2)}`);
        } else if (season === 'winter'){
            price = budget * 0.80;
            console.log(`Hotel - ${price.toFixed(2)}`);
        }
    }

    if (budget > 1000){
        console.log('Somewhere in Europe');
        price = budget * 0.90;
        console.log(`Hotel - ${price.toFixed(2)}`);
    }
}
journey (["1500", "summer"])