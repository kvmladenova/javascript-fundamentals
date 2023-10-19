function singCheck (a,b,c){
    let arr = [a, b, c];
    let negativeCount = 0;
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] < 0){
            negativeCount++;
        }
    }
    if (negativeCount % 2 == 0){
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
singCheck (5, 12, -15);
singCheck (-6, -12, 14);