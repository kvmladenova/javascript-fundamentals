function numbersEndingInSeven () {
    for (let i = 1; i<= 1000; i += 1){
        if (i % 10 === 7){
            console.log(i);
        }
    }
}
numbersEndingInSeven();