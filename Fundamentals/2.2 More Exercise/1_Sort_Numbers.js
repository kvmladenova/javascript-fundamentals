function sortNumbers (a, b, c){
    let max;
    let min;
    let middle;
    if (a>b && b>c) {
        max = a;
        middle = b;
        min = c;
    } else if (a<b && b<c){
        max=c;
        middle = b;
        min = a;
    } else if (a>b<c && a>c){
        max = a;
        min = b;
        middle = c;
    } else if (a>b<c && a<c){
        max = c;
        min = b;
        middle = a;
    } else if (a<b>c && a>c){
        max = b;
        middle = a;
        min = c;
    } else if (a<b>c && a<c){
        max=b;
        middle = c;
        min = a;
    }
    console.log(max);
    console.log(middle);
    console.log(min);
}
sortNumbers (2,1,3);
// sortNumbers (-2,1,3);
// sortNumbers (0,0,3);