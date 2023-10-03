function distansBetweenPoints(a,b,c,d){
    let min = Number.MIN_SAFE_INTEGER;
    let max = Number.MAX_SAFE_INTEGER;
    let distansBetweenPoints = 0;
    
    if (a>b>c>d){
        max = a;
    } else if (b>a>c>d){
        max = b;
    } else if (c>a>b>d) {
        max = c;
    } else if ( d>a>c>d){
        max = d;
    }

    if (a<b<c<d){
        min = a;
    } else if (b<c<d<a){
        min = b;
    } else if (c<a<b<d){
        min = c;
    } else if (d<a<b<c){
        min = d;
    }

    let newMin = Math.abs(min);
    let newMax = Math.abs (max);
    // distansBetweenPoints = newMax + newMin;
    console.log(difference (newMin, newMax));
}
distansBetweenPoints ('2', '4','5','0');
distansBetweenPoints ('2.34', '15.66', '-13.55', '-2.9985')