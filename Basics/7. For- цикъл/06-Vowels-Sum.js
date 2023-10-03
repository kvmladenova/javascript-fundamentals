function vowelsSum (input) {
 let text = input [0];
 let vowelSum = 0;

 for (let t=0; t <= text.length; t++){
    let char = text [t];

    switch (char){
        case 'a':
            vowelSum += 1;
            break;
        case 'e':
            vowelSum += 2;
            break;
        case 'i':
            vowelSum += 3;
            break;
        case 'o':
            vowelSum += 4;
            break;
        case 'u':
            vowelSum +=5;
            break;
    }
    
 }
 console.log(vowelSum);
}
vowelsSum (["hello"]);