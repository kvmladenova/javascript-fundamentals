function age (num){
    if (num < 0){
        console.log('out of bounds');
    } else if ( num >= 0 && num <= 2){
        console.log('baby');
    } else if (num >= 3 && num <= 13){
        console.log('child');
    } else if ( num >= 14 && num <= 19){
        console.log('teenager');
    } else if ( num >= 20 && num <= 65){
        console.log('adult');
    } else {
        console.log('elder');
    }
}
age (20);
age (1);
age (100);
age (-1) 