function histogram (inputArr){
    let numInput = Number (inputArr[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i<=numInput; i++){
        if (inputArr[i] < 200){
            p1 +=1;
        } else if (inputArr[i] <=399){
            p2+= 1;
        }else if (inputArr[i] <= 599){
            p3 += 1;
        }else if (inputArr[i] <= 799){
            p4 += 1;
        }else {
            p5 += 1;
        }
    }
    console.log(`${((p1 / numInput) * 100).toFixed(2)}%`);
        console.log(`${((p2 / numInput) * 100).toFixed(2)}%`);
        console.log(`${((p3 / numInput) * 100).toFixed(2)}%`);
        console.log(`${((p4 / numInput) * 100).toFixed(2)}%`);
        console.log(`${((p5 / numInput) * 100).toFixed(2)}%`);
}
histogram (["3","1","2","999"])