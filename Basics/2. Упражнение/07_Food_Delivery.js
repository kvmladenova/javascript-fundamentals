function foodDelivery (insetArray){
    let chickenCount = Number (insetArray[0]);
    let fishCount = Number (insetArray[1]);
    let vegitarian = Number (insetArray[2]);

    let sum = chickenCount*10.35+fishCount*12.40+vegitarian*8.15;
    let desert = sum*20/100;
    let delivery = sum+desert+2.5;

    console.log(delivery);
}

foodDelivery(["2 ","4 ","3 "]);