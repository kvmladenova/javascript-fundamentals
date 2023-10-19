function grade (input){
    if (input < 3.00){
        console.log('Fail (2)');
    } else if ( input < 3.50){
        console.log(`Poor (${input.toFixed(2)})`);
    } else if ( input < 4.50){
        console.log(`Good (${input.toFixed(2)})`);
    } else if (input < 5.50){
        console.log(`Very good (${input.toFixed(2)})`);
    } else if (input >= 5.50){
        console.log(`Excellent (${input.toFixed(2)})`);
    }
}
grade (3.33);
grade (4.50);
grade (2.99);
